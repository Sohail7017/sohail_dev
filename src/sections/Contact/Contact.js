'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitting: false,
        success: true,
        error: false
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (err) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.sectionTitle}>
              Let&apos;s build <br />
              <span className="text-gradient">something great.</span>
            </h2>
            <p className={styles.description}>
              I&apos;m open to exciting opportunities, collaborations, and building
              impactful mobile products. Drop a message if you have a project
              in mind or just want to connect.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div>
                  <h4>Email Me At</h4>
                  <p>sohailkhan19102@gmail.com</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>India | Remote Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.formCard}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Your Name</label>
                  <div className={styles.inputLine}></div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Your Email</label>
                  <div className={styles.inputLine}></div>
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows={4}
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                  <div className={styles.inputLine}></div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                  <div className={styles.btnGlow}></div>
                </button>

                {status.success && (
                  <motion.p
                    className={styles.successMsg}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status.error && (
                  <motion.p
                    className={styles.errorMsg}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
