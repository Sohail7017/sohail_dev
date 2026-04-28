'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'CVNext',
    description: 'AI-powered career app for resume and cover letter generation, ATS checks, interview prep, Google Play Billing subscriptions, and Firebase backend.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'AI Integration', 'Play Billing', 'Google Play', 'PDF Generation'],
    github: 'https://github.com',
    demo: '#',
    accent: '#3b82f6',
  },
  {
    title: 'AI Study Assistant',
    description: 'An AI-powered learning assistant that helps students summarize notes, generate essays, create flashcards, and explain topics in simple terms, powered by Firebase backend and Google Play Billing integration.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'AI Integration', 'Play Billing',],
    github: 'https://github.com',
    demo: '#',
    accent: '#ec4899',
  },
  {
    title: 'Creche App',
    description: 'A childcare monitoring app for parents and daycare centers to track children’s activities, daily updates, and progress, with ongoing AI-based activity detection features under development.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Push Notifications', 'fl_chart'],
    github: 'https://github.com',
    demo: '#',
    accent: '#10b981',
  },
  {
    title: 'Cloberi App (E-commerce)',
    description: "A feature-rich e-commerce mobile application built with Flutter, featuring product browsing, API-driven data integration, cart management, and secure Razorpay payment integration.",
    tech: ['Flutter', 'Dart', 'REST API', 'Razorpay', 'Firebase'],
    github: 'https://github.com',
    demo: '#',
    accent: '#8b5cf6',
  },
  {
    title: 'IGYM Member',
    description: 'A gym membership app for users to manage attendance via barcode scanning, order supplements, and access fitness-related services through API and Firebase integration.',
    tech: ['Flutter', 'Dart', 'REST API', 'Firebase', 'Barcode Scanning'],
    github: 'https://github.com',
    demo: '#',
    accent: '#f59e0b',
  },
  {
    title: 'IGYM Partner',
    description: 'A partner management app for gym branches to manage memberships, subscriptions, enquiries, and member operations through Flutter, Firebase, and API integrations..',
    tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],
    github: 'https://github.com',
    demo: '#',
    accent: '#06b6d4',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.headingBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className={styles.subtitle}>A showcase of my recent mobile applications</p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <div
                className={styles.cardGlow}
                style={{ backgroundColor: project.accent }}
              ></div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>
                    <a href={project.demo} target="_blank" rel="noreferrer">{project.title}</a>
                  </h3>

                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <ul className={styles.techList}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
