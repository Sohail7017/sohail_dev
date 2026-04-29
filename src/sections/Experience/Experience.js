'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.headingBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className={styles.subtitle}>My professional journey so far</p>
        </motion.div>

        <div className={styles.timelineContainer}>
          <div className={styles.glowingLine}></div>

          <motion.div
            className={`${styles.timelineItem} ${styles.left}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.timelineIcon}>
              <div className={styles.iconGlow}></div>
              <Briefcase size={20} />
            </div>

            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.role}>Flutter Developer</h3>
                <span className={styles.date}>June 2025 - Present</span>
              </div>
              <h4 className={styles.company}>Aucourant Technologies Pvt Ltd</h4>

              <ul className={styles.responsibilities}>
                <li>Developed cross-platform mobile applications using Flutter and Dart for e-commerce, AI, childcare, and productivity solutions.</li>
                <li>Integrated Firebase services including Authentication, Firestore, Storage, Cloud Functions, App Check, and Push Notifications.</li>
                <li>Implemented state management using Provider, Cubit, and BLoC, following scalable and clean architecture principles.</li>
                <li>Built production features including Razorpay, Google Play Billing, REST API integrations, and Play Store app deployments.</li>
                <li>Worked on AI-powered features such as resume generation, study assistance, ATS analysis, and activity detection concepts.</li>
              </ul>
            </div>
          </motion.div>


          <motion.div
            className={`${styles.timelineItem} ${styles.right}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.timelineIcon}>
              <div className={styles.iconGlow}></div>
              <Briefcase size={20} />
            </div>

            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.role}>Flutter Developer Intern</h3>
                <span className={styles.date}>Mar 2025 - May 2025</span>
              </div>

              <h4 className={styles.company}>
                Intouch Quality Services Pvt Ltd
              </h4>

              <ul className={styles.responsibilities}>
                <li>
                  Contributed to Flutter application development and reusable UI
                  components for real-world mobile products.
                </li>

                <li>
                  Worked on REST API integrations, Firebase services, and
                  application state management.
                </li>

                <li>
                  Assisted in implementing e-commerce flows, payment features,
                  and performance-focused mobile functionality.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
