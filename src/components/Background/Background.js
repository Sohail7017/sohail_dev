'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import styles from './Background.module.css';

export default function Background() {
  const { theme } = useTheme();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles only on client to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 4 + 1, // 1px to 5px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {/* Mesh Gradient Blobs */}
      <motion.div
        className={`${styles.blob} ${styles.blob1}`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.blob} ${styles.blob2}`}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.blob} ${styles.blob3}`}
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Subtle Floating Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}vw`,
              top: `${p.y}vh`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: ["0vh", "-20vh", "20vh", "0vh"],
              x: ["0vw", "10vw", "-10vw", "0vw"],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className={styles.noiseOverlay}></div>
    </div>
  );
}
