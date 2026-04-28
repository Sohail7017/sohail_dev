'use client';
import { Code2, User, Mail } from 'lucide-react';
import Image from "next/image";
import { useTheme } from '@/context/ThemeContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Image
                src={
                  theme === "dark"
                    ? "/images/dark_logo.png"
                    : "/images/light_logo.png"
                }
                alt="Sohail Logo"
                width={140}
                height={45}
              />
            </a>

            <p className={styles.description}>
              Flutter Developer passionate about building scalable mobile applications with clean architecture, premium user experiences, and impactful digital products.
            </p>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/Sohail7017" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sohail-khan-066751333" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <User size={20} />
            </a>
            <a href="mailto:sohailkhan19102@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Sohail. Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
