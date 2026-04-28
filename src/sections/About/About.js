'use client';

import { motion } from 'framer-motion';
import { User, Code2, Smartphone } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              <span className="text-gradient">About Me</span>
            </h2>

            <div className={styles.paragraphs}>
              <p>
                Hello! I&apos;m Sohail, a passionate Flutter Developer with 1 year of
                professional experience building high-quality cross-platform mobile
                applications. I enjoy creating digital products that are performant,
                scalable, and deliver smooth user experiences.
              </p>

              <p>
                I specialize in <strong>Flutter and Dart</strong>, with a strong focus on
                clean architecture, responsive UI, and maintainable code. I enjoy turning
                ideas into polished applications while balancing performance, usability,
                and modern design principles.
              </p>

              <p>
                I have worked with <strong>Firebase, REST APIs, Provider, Cubit, and BLoC</strong>,
                along with features like payment integration using Razorpay, in-app billing,
                and deploying applications to the Google Play Store. I focus on building
                robust mobile solutions while following scalable development practices.
              </p>

              <p>
                From e-commerce applications to AI-powered products, I enjoy solving
                real-world problems through intuitive design and thoughtful development.
                My goal is to build mobile experiences that feel reliable, polished,
                and meaningful for users.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1+</span>
                <span className={styles.statText}>Years<br />Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statText}>Projects<br />Built</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.cardsContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`${styles.glassCard} ${styles.card1}`}>
              <div className={styles.iconBox}><Smartphone size={28} /></div>
              <h3>Cross-Platform</h3>
              <p>Build once, deliver seamless experiences across platforms.</p>
            </div>
            <div className={`${styles.glassCard} ${styles.card2}`}>
              <div className={styles.iconBox}><Code2 size={28} /></div>
              <h3>Clean Architecture</h3>
              <p>Scalable, maintainable code built with modern architecture principles.</p>
            </div>
            <div className={`${styles.glassCard} ${styles.card3}`}>
              <div className={styles.iconBox}><User size={28} /></div>
              <h3>User-Centric</h3>
              <p>Designing intuitive, high-end mobile experiences users love.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
