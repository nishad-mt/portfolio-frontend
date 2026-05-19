import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const timeline = [
  {
    id: 'internship',
    type: 'EXPERIENCE',
    period: '2026',
    title: 'Python Developer Intern',
    org: 'Makbig - Calicut',
    desc: 'Developing high-performance backend microservices and collaborating on enterprise-scale architectures.'
  },
  {
    id: 'degree',
    type: 'EDUCATION',
    period: '2022–2025',
    title: 'BSc Computer Science',
    org: 'Calicut University',
    desc: 'Specialized in Algorithms, Data Structures, and Software Engineering principles.'
  },
  {
    id: 'catalyst',
    type: 'EXPERIENCE',
    period: 'ONGOING',
    title: 'Web developer Intern',
    org: 'Catalyst Tech Hub',
    desc: 'A part of Catalyst Tech hub marketing team , and creating applications based on their requirements'
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="grid-standard">
          <div className="experience-header">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              04 // TRAJECTORY
            </motion.span>
            <motion.h2
              className="heading-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Path of <br />
              <span className="text-italic text-muted">Continuous Growth</span>
            </motion.h2>
          </div>

          <div className="experience-list-premium">
            {timeline.map((item, idx) => (
              <motion.div
                className="experience-row-premium"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="exp-meta-minimal">
                  <span className="exp-period-minimal">{item.period}</span>
                  <span className="exp-type-minimal">{item.type}</span>
                </div>
                <div className="exp-info-minimal">
                  <h3 className="exp-title-premium">{item.title}</h3>
                  <p className="exp-org-premium">{item.org}</p>
                  <p className="exp-desc-minimal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;