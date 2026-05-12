import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const SOCIAL_LINKS = [
  { label: 'EMAIL', value: 'nishadpaul64@gmail.com', href: 'mailto:nishadpaul64@gmail.com' },
  { label: 'GITHUB', value: 'github.com/nishad-mt', href: 'https://github.com/nishad-mt' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/nishad-mt', href: 'https://www.linkedin.com/in/nishad-mt/' },
  { label: 'INSTAGRAM', value: '@mt_nishad_', href: 'https://www.instagram.com/mt_nishad_/' },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://portfolio-drf-react.onrender.com/api/contact/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError('Connection issue. Please use direct email.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="grid-standard">
          <div className="contact-left-premium">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              05 // CONTACT
            </motion.span>
            <motion.h2
              className="heading-section contact-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's build <br />
              <span className="text-italic text-muted">something great</span>
            </motion.h2>

            <div className="social-links-premium">
              {SOCIAL_LINKS.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" className="social-item">
                  <span className="social-label">{link.label}</span>
                  <span className="social-value">{link.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right-premium">
            {sent ? (
              <motion.div
                className="success-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Sent Successfully.</h3>
                <p>I'll respond within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="contact-form-premium" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>NAME</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nishad M T" />
                </div>
                <div className="input-group">
                  <label>EMAIL</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="hello@example.com" />
                </div>
                <div className="input-group">
                  <label>MESSAGE</label>
                  <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Tell me about your project..." />
                </div>

                {error && <p className="form-error-text">{error}</p>}

                <button type="submit" className="btn-primary full-width" disabled={loading}>
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="footer-premium">
          <div className="footer-line"></div>
          <div className="footer-bottom">
            <span>NISHAD M T // 2026</span>
            <span>BACKEND SPECIALIST</span>
            <span>KERALA // REMOTE</span>
          </div>
        </footer>

      </div>
    </section>
  );
}

export default Contact;