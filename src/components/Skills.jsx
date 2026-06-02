import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const SKILL_CATEGORIES = [
  { id: '01', title: 'Languages', items: 'Python // JavaScript // SQL // HTML5 // CSS3' },
  { id: '02', title: 'Frontend', items: 'React.js // Tailwind CSS // Bootstrap' },
  { id: '03', title: 'Backend', items: 'Django // REST Framework // Gunicorn // Nginx' },
  { id: '04', title: 'Database', items: 'PostgreSQL // SQLite // Django ORM' },
  { id: '05', title: 'Auth & Security', items: 'OAuth 2.0 // JWT // RBAC' },
  { id: '06', title: 'Tools & Platforms', items: 'Git // GitHub // AWS // VS Code' },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="grid-standard">
          <div className="skills-header-block">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              02 // CAPABILITIES
            </motion.span>
            <motion.h2
              className="heading-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Modern <br />
              <span className="text-italic text-muted">Stack</span>
            </motion.h2>
          </div>

          <div className="skills-interactive-list">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                className="skill-category-row"
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="cat-main">
                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-items">{cat.items}</p>
                </div>
                <div className="cat-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;