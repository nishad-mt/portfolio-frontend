import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="grid-standard">
          <div className="about-header">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              01 // PHILOSOPHY
            </motion.span>
            <motion.h2
              className="heading-section about-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The balance of <br />
              <span className="text-italic text-muted">Utility & Art</span>
            </motion.h2>

           
          </div>

          <div className="about-content">
            <motion.p
              className="about-para"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I believe that digital experiences should be as seamless as they are striking.
              My work focuses on architecting secure, scalable backends that empower
              fluid, motion-driven interfaces.
            </motion.p>
            <motion.p
              className="about-para para-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              From complex database migrations to cinematic UI transitions,
              I treat every line of code as a building block for the future web.
              Efficiency is my baseline; elegance is my goal.
            </motion.p>

            <div className="about-stats-row">
              <div className="about-stat">
                <span className="stat-label">Role</span>
                <span className="stat-value">Full Stack Engineer</span>
              </div>
              <div className="about-stat">
                <span className="stat-label">Focus</span>
                <span className="stat-value">Python / React / AI</span>
              </div>
              <div className="about-stat">
                <span className="stat-label">Base</span>
                <span className="stat-value">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
