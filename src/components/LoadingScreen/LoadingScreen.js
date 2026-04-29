'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './LoadingScreen.module.css';

const BOOT_LINES = [
  'Initializing portfolio...',
  'Loading modules...',
  'Compiling assets...',
  'Ready.',
];

const PARTICLE_COUNT = 22;

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Particles() {
  const rng = seededRandom(42);
  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: rng() * 100,
    y: rng() * 100,
    size: rng() * 2.5 + 1,
    dur: rng() * 4 + 3,
    delay: rng() * 2,
    opacity: rng() * 0.4 + 0.1,
  }));

  return (
    <div className={styles.particles} aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [p.opacity, p.opacity * 2.2, p.opacity],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function ScanLines() {
  return <div className={styles.scanLines} aria-hidden="true" />;
}

function HolographicRing() {
  return (
    <div className={styles.ringWrapper} aria-hidden="true">
      <motion.div
        className={styles.ringOuter}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.ringMiddle}
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.ringInner}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* Glow pulse */}
      <motion.div
        className={styles.ringGlow}
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function LogoMark() {
  return (
    <motion.div
      className={styles.logoMark}
      initial={{ opacity: 0, scale: 0.6, rotateY: -40 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <motion.span
        className={styles.logoAngle}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        {'<'}
      </motion.span>
      <motion.span
        className={styles.logoText}
        initial={{ opacity: 0, letterSpacing: '0.6em' }}
        animate={{ opacity: 1, letterSpacing: '0.06em' }}
        transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        SohailDev
      </motion.span>
      <motion.span
        className={styles.logoAngle}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        {'/>'}
      </motion.span>

      {/* 3D depth shadow layers */}
      <div className={styles.logoDepth1} aria-hidden="true">
        {'<SohailDev/>'}
      </div>
      <div className={styles.logoDepth2} aria-hidden="true">
        {'<SohailDev/>'}
      </div>
    </motion.div>
  );
}

function BootSequence({ onDone }) {
  const [lines, setLines] = useState([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let lineIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(interval);
      }
    }, 380);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;
    const raf = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setPercent(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(tick);
      else onDone?.();
    });
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className={styles.bootSequence}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className={styles.bootLines}>
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className={styles.bootLine}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <span className={styles.bootPrompt}>{'>'}</span>
              <span>{line}</span>
              {i === lines.length - 1 && (
                <motion.span
                  className={styles.cursor}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Premium percent loader */}
      <div className={styles.progressRow}>
        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            style={{ width: `${percent}%` }}
          />
          <motion.div
            className={styles.progressGlow}
            style={{ left: `${percent}%` }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
        <span className={styles.progressPercent}>{percent}%</span>
      </div>
    </motion.div>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleBootDone = () => {
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLoading(false);
        if (onComplete) onComplete();
      }, 900);
    }, 300);
  };

  if (!loading) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className={styles.container}
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(10px)',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Ambient background gradient orbs */}
          <div className={styles.orbA} aria-hidden="true" />
          <div className={styles.orbB} aria-hidden="true" />

          <ScanLines />
          <Particles />

          {/* Core stage */}
          <div className={styles.stage}>
            <HolographicRing />
            <LogoMark />

            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Mobile App Developer · Flutter Specialist
            </motion.p>

            <BootSequence onDone={handleBootDone} />
          </div>

          {/* Corner decorations */}
          <div className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
          <div className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
          <div className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
          <div className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
