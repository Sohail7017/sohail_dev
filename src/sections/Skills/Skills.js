'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'Flutter', glow: '#02569B' },
  { name: 'Dart', glow: '#0175C2' },
  { name: 'Firebase', glow: '#FFCA28' },
  { name: 'REST APIs', glow: '#4ADE80' },
  { name: 'AI Integration', glow: '#6366F1' },
  { name: 'BLoC', glow: '#38BDF8' },
  { name: 'Provider', glow: '#0EA5E9' },
  { name: 'Git / GitHub', glow: '#ffffff' },
  { name: 'UI/UX Design', glow: '#EC4899' },
  { name: 'Razorpay', glow: '#22C55E' },
  { name: 'Google Play Billing', glow: '#6366F1' },
  { name: 'App Check', glow: '#14B8A6' },         // teal
  { name: 'Cloud Functions', glow: '#F97316' },   // orange
  { name: 'Push Notifications', glow: '#8B5CF6' }, // violet
  { name: 'Deployment', glow: '#F59E0B' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.headingBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className={styles.subtitle}>Tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <motion.div
          className={styles.skillsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillPill}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 10px 30px ${skill.glow}40`,
                borderColor: skill.glow,
                color: skill.glow
              }}
            >
              <span
                className={styles.glowDot}
                style={{ backgroundColor: skill.glow, boxShadow: `0 0 10px ${skill.glow}` }}
              ></span>
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
