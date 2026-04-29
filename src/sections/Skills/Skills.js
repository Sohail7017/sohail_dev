'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGithub,
  SiRazorpay
} from "react-icons/si";

import {
  FaShieldAlt,
  FaBell,
  FaCloud,
  FaRocket,
  FaPaintBrush
} from "react-icons/fa";

import { MdApi } from "react-icons/md";
import { TbBrandGooglePlay } from "react-icons/tb";
import { HiOutlineCubeTransparent } from "react-icons/hi";


const skillsData = [
  { name: 'Flutter', glow: '#02569B', icon: <SiFlutter />, featured: true },
  { name: 'Dart', glow: '#0175C2', icon: <SiDart />, featured: true },
  { name: 'Firebase', glow: '#FFCA28', icon: <SiFirebase />, featured: true },
  { name: 'BLoC', glow: '#38BDF8', icon: <HiOutlineCubeTransparent />, featured: true },
  { name: 'REST APIs', glow: '#4ADE80', icon: <MdApi />, featured: true },
  { name: 'AI Integration', glow: '#6366F1', icon: 'AI', featured: true },
  { name: 'Provider', glow: '#0EA5E9', icon: <HiOutlineCubeTransparent />, featured: true },
  { name: 'Git / GitHub', glow: '#ffffff', icon: <SiGithub />, featured: true },
  { name: 'UI/UX Design', glow: '#EC4899', icon: <FaPaintBrush />, featured: true },
  { name: 'Razorpay', glow: '#22C55E', icon: <SiRazorpay />, featured: true },
  { name: 'Google Play Billing', glow: '#6366F1', icon: <TbBrandGooglePlay />, featured: true },
  { name: 'App Check', glow: '#14B8A6', icon: <FaShieldAlt />, featured: true },
  { name: 'Cloud Functions', glow: '#F97316', icon: <FaCloud />, featured: true },
  { name: 'Push Notifications', glow: '#8B5CF6', icon: <FaBell />, featured: true },
  { name: 'Deployment', glow: '#F59E0B', icon: <FaRocket />, featured: true },
];


function SkillCard({ skill, index }) {

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(
      y,
      [-0.5, 0.5],
      [10, -10]
    ),
    {
      stiffness: 400,
      damping: 30
    }
  );

  const rotateY = useSpring(
    useTransform(
      x,
      [-0.5, 0.5],
      [-10, 10]
    ),
    {
      stiffness: 400,
      damping: 30
    }
  );

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (e.clientX - rect.left) / rect.width - .5
    );

    y.set(
      (e.clientY - rect.top) / rect.height - .5
    );
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const floatDelay = (index * 0.37) % 3.2;


  return (
    <motion.div
      ref={ref}
      className={`${styles.skillCard} ${skill.featured ? styles.featured : ''}`}

      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--glow': skill.glow,
        '--float-delay': `${floatDelay}s`
      }}

      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}

      initial={{
        opacity: 0,
        y: 28,
        scale: .88
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}

      viewport={{
        once: true,
        margin: '-50px'
      }}

      transition={{
        duration: .55,
        delay: index * .055,
        ease: [0.16, 1, 0.3, 1]
      }}

      whileHover={{
        scale: 1.07,
        zIndex: 20
      }}
    >

      {skill.featured && (
        <div className={styles.gradientBorder} />
      )}

      <div
        className={styles.cardFace}
        style={{
          transform: 'translateZ(16px)'
        }}
      >

        <span className={styles.skillIcon}>
          {skill.icon}
        </span>

        <span className={styles.skillName}>
          {skill.name}
        </span>

        <div
          className={styles.hoverBar}
          style={{
            background:
              `linear-gradient(
90deg,
${skill.glow}cc,
${skill.glow}22
)`
          }}
        />

      </div>

    </motion.div>
  )
}



export default function Skills() {
  return (

    <section
      id="skills"
      className={styles.skills}
    >

      <div
        className={styles.glowBlob}
        aria-hidden="true"
      />

      <div
        className={styles.glowRing1}
        aria-hidden="true"
      />

      <div
        className={styles.glowRing2}
        aria-hidden="true"
      />


      <div className={`container ${styles.container}`}>

        <motion.div
          className={styles.headingBox}

          initial={{
            opacity: 0,
            y: 32
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true,
            margin: '-80px'
          }}

          transition={{
            duration: .8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >

          <h2 className={styles.sectionTitle}>
            Technical{' '}
            <span className={styles.gradientWord}>
              Arsenal
            </span>
          </h2>

          <p className={styles.subtitle}>
            Tools and technologies I use to bring ideas to life.
          </p>

        </motion.div>


        <div className={styles.skillsCloud}>
          {
            skillsData.map(
              (skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                />
              ))
          }
        </div>

      </div>

    </section>

  )
}