'use client';
import Image from "next/image";
import { useTheme } from '@/context/ThemeContext';
import styles from './Footer.module.css';

const TECH_PILLS = ['Flutter', 'Firebase', 'Next.js'];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>

      {/* ── Clean top separator ──────────────────────── */}
      <div className={styles.separator} aria-hidden="true" />

      {/* ════ MAIN CONTENT AREA ════════════════════════ */}
      <div className={styles.inner}>
        <div className={`container ${styles.mainRow}`}>

          {/* LEFT — brand identity */}
          <div className={styles.brand}>
            <div className={styles.logoGlow} aria-hidden="true" />

            <a href="#" className={styles.logo} aria-label="SohailDev home">
              <Image
                src={theme === 'dark' ? '/images/dark_logo.png' : '/images/light_logo.png'}
                alt="Sohail Logo"
                width={150}
                height={48}
                priority
              />
            </a>

            <p className={styles.description}>
              Flutter Developer passionate about building scalable mobile
              applications with clean architecture, premium user experiences,
              and impactful digital products.
            </p>


          </div>

          {/* RIGHT — social icons */}
          <div className={styles.socials}>
            {/* GitHub */}
            <a
              href="https://github.com/Sohail7017"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.socialBtn}
              data-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.82-.25.82-.58v-2.2c-3.25.7-3.93-1.4-3.93-1.4-.54-1.34-1.3-1.7-1.3-1.7-1.08-.74.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.07 1.8 2.78 1.28 3.46.98.1-.77.42-1.28.76-1.57-2.6-.3-5.34-1.3-5.34-5.76 0-1.28.45-2.32 1.2-3.13-.12-.3-.52-1.5.1-3.12 0 0 .98-.32 3.2 1.2a11.1 11.1 0 015.82 0c2.2-1.52 3.18-1.2 3.18-1.2.63 1.62.23 2.82.12 3.12.74.8 1.2 1.85 1.2 3.13 0 4.47-2.74 5.45-5.36 5.74.43.37.8 1.08.8 2.18v3.22c0 .33.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.socialBtn}
              data-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5A2.49 2.49 0 102.5 6a2.49 2.49 0 002.48-2.5zM3 8h4v13H3zm7 0h3.8v1.8h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V21h-4v-6.28c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.63-2.42 3.32V21h-4z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sohailkhan19102@gmail.com"
              aria-label="Email"
              className={styles.socialBtn}
              data-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ════ COPYRIGHT STRIP ══════════════════════════ */}
      <div className={styles.copyrightStrip}>
        <div className={`container ${styles.copyrightInner}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} SohailDev. Built with code and creativity.
          </p>
        </div>
      </div>

    </footer>
  );
}
