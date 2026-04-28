'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className={styles.inner}>
        <motion.div 
          className={styles.progressBarContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={styles.progressBar}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
        
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className={styles.bracket}>{'<'}</span>
          <span className={styles.text}>Sohail</span>
          <span className={styles.bracket}>{' />'}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
