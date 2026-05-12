import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const API_URL = 'https://portfolio-drf-react.onrender.com/api/projects/';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProjects(Array.isArray(data) ? data : (data.results || []));
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="loading-state">
            <div className="loading-bar"></div>
            <span>SYNCING WORKS...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="grid-standard">
          <div className="projects-header-block">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              03 // SELECTED WORKS
            </motion.span>
            <motion.h2
              className="heading-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Case <br />
              <span className="text-italic text-muted">Studies</span>
            </motion.h2>
          </div>

          <div className="project-list-premium">
            {projects.map((project, idx) => (
              <motion.div
                className="project-row-premium"
                key={project.id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="project-row-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder-minimal">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>

                <div className="project-row-info">
                  <div className="project-row-meta">
                    <span className="project-num">0{idx + 1}</span>
                    <span className="project-tech-minimal">
                      {Array.isArray(project.tech_stack) ? project.tech_stack.join(' // ') : project.tech_stack.replace(/,/g, ' // ')}
                    </span>
                  </div>
                  <h3 className="project-row-title">{project.title}</h3>
                  <p className="project-row-desc">{project.description || 'Developing robust, scalable digital architectures.'}</p>

                  <div className="project-row-actions">
                    {project.live_link && <a href={project.live_link} target="_blank" rel="noreferrer" className="row-link">Live</a>}
                    {project.github_link && <a href={project.github_link} target="_blank" rel="noreferrer" className="row-link">Source</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;