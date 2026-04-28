'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';



export default function Hero() {
  const containerRef = useRef(null);

  // Mouse-parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 20, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>

        {/* ── Left: Text content ── */}
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Available for new projects
            </div>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Building High-Performance <br />
            <span className="text-gradient">Mobile</span> <br />
            Experiences.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            I&apos;m Sohail, a Flutter Developer building high-performance cross-platform apps
            with premium UI and scalable architecture.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              <span>View Projects</span> <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className={styles.secondaryBtn} target="_blank" rel="noreferrer">
              <span>Download CV</span> <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* ── Right: Profile image showcase ── */}
        <motion.div
          ref={containerRef}
          className={styles.visualContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
        >
          {/* Animated glow rings */}
          <div className={styles.glowRing1} />
          <div className={styles.glowRing2} />
          <div className={styles.glowBlob} />

          {/* 3-D tilt card */}
          <motion.div
            className={styles.imageCard}
            style={{ rotateX, rotateY }}
          >
            {/* Animated gradient border */}
            <div className={styles.gradientBorder} />

            {/* Floating subtle motion wrapper */}
            <motion.div
              className={styles.imageWrapper}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/profile_pic.jpg"
                alt="Sohail — Flutter Developer"
                fill
                sizes="(max-width: 768px) 260px, 340px"
                priority
                className={styles.profileImage}
              />
              {/* Inner glow overlay */}
              <div className={styles.imageGlow} />
            </motion.div>
          </motion.div>


        </motion.div>

      </div>
    </section>
  );
}
