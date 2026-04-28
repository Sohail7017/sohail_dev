'use client';

import { motion } from 'framer-motion';
import { Smartphone, Server, Paintbrush, Layers } from 'lucide-react';
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Mobile App Development',
    description: 'Building high-performance cross-platform mobile applications using Flutter with scalable architecture, smooth UI, and production-ready user experiences.',
    icon: <Smartphone size={36} />,
    color: '#3b82f6'
  },
  {
    title: 'UI/UX Implementation',
    description: 'Transforming designs into responsive and polished interfaceswith smooth animations, clean layouts, and intuitive user experiences.',
    icon: <Paintbrush size={36} />,
    color: '#ec4899'
  },
  {
    title: 'Backend Integration',
    description: 'Integrating REST APIs, Firebase services, authentication, cloud functions, and state management for robust app functionality.',
    icon: <Server size={36} />,
    color: '#10b981'
  },
  {
    title: 'Payment Solutions',
    description: 'Integrating secure payment flows using Razorpay and Google Play Billing for subscriptions, in-app purchases, and monetized mobile products.',
    icon: <Layers size={36} />,
    color: '#8b5cf6'
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="services" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.headingBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            Specialized <span className="text-gradient">Services</span>
          </h2>
          <p className={styles.subtitle}>What I bring to the table</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div
                className={styles.glowOverlay}
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}30 0%, transparent 70%)` }}
              ></div>
              <div
                className={styles.iconWrapper}
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
