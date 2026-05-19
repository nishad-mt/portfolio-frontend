import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Web App",
    description: "A full-stack shopping platform with product listings, cart management, user authentication, and order tracking. Built and deployed independently.",
    github_link: "https://github.com/nishad-mt/Fantasy-e-commerce-",
    live_link: "https://fantasyfoods.online",
    tech_stack: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
    renderMockup: () => (
      <div className="premium-mockup-wrapper food-ecommerce-bg">
        <div className="glass-card-mockup ecommerce-card">
          <div className="card-top-bar">
            <span className="card-dot red"></span>
            <span className="card-dot yellow"></span>
            <span className="card-dot green"></span>
            <span className="card-path">fantasyfoods.online/shop</span>
          </div>
          <div className="card-content-grid">
            <div className="sidebar-mock">
              <div className="mock-logo">FF</div>
              <div className="mock-menu-item active"></div>
              <div className="mock-menu-item"></div>
              <div className="mock-menu-item"></div>
            </div>
            <div className="main-mock">
              <div className="mock-header">
                <span className="mock-title-text">Gourmet Selection</span>
                <span className="mock-badge">Cart (3)</span>
              </div>
              <div className="mock-product-grid">
                <div className="product-item-mock">
                  <div className="product-img-mock p1"></div>
                  <div className="product-text-mock"></div>
                </div>
                <div className="product-item-mock">
                  <div className="product-img-mock p2"></div>
                  <div className="product-text-mock"></div>
                </div>
                <div className="product-item-mock">
                  <div className="product-img-mock p3"></div>
                  <div className="product-text-mock"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Virtual Drawing App",
    description: "A browser-based canvas drawing tool with brush controls, colour picker, undo/redo, and PNG export. Built with vanilla JavaScript and the HTML5 Canvas API.",
    github_link: "https://github.com/nishad-mt/virtual-drawings",
    live_link: "https://virtual-drawings.vercel.app",
    tech_stack: ["JavaScript", "Mediapipe", "Canvas API", "HTML5", "CSS3"],
    renderMockup: () => (
      <div className="premium-mockup-wrapper drawing-app-bg">
        <div className="glass-card-mockup drawing-card">
          <div className="card-top-bar">
            <span className="card-dot red"></span>
            <span className="card-dot yellow"></span>
            <span className="card-dot green"></span>
            <span className="card-path">virtual-drawings.vercel.app</span>
          </div>
          <div className="drawing-canvas-mock">
            <svg className="drawing-svg" viewBox="0 0 400 200">
              <path d="M 50,150 Q 150,50 250,150 T 380,100" fill="none" stroke="url(#gradient-line)" strokeWidth="4" strokeLinecap="round" />
              <path d="M 80,120 Q 200,180 320,80" fill="none" stroke="url(#gradient-line-2)" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,5" />
              <circle cx="250" cy="150" r="8" fill="#ff0844" className="glowing-cursor" style={{ filter: 'drop-shadow(0 0 8px #ff0844)' }} />
              <line x1="250" y1="150" x2="230" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="230" cy="130" r="4" fill="rgba(255,255,255,0.6)" />
              <line x1="250" y1="150" x2="270" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="270" cy="120" r="4" fill="rgba(255,255,255,0.6)" />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4facfe" />
                  <stop offset="100%" stopColor="#00f2fe" />
                </linearGradient>
                <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0844" />
                  <stop offset="100%" stopColor="#ffb199" />
                </linearGradient>
              </defs>
            </svg>
            <div className="drawing-toolbar-mock">
              <span className="tool-btn active"></span>
              <span className="tool-btn"></span>
              <span className="tool-btn"></span>
              <span className="color-indicator"></span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Decision Engine API",
    description: "A smart decision-making tool that evaluates multiple user inputs and recommends the best option. Built with a Django REST Framework backend and a React frontend — users feed in their choices, the engine scores and ranks them.",
    github_link: "https://github.com/nishad-mt/decision_engine_api",
    live_link: null,
    tech_stack: ["Python", "Django REST Framework", "React", "PostgreSQL", "REST API"],
    renderMockup: () => (
      <div className="premium-mockup-wrapper decision-engine-bg">
        <div className="glass-card-mockup decision-card">
          <div className="card-top-bar">
            <span className="card-dot red"></span>
            <span className="card-dot yellow"></span>
            <span className="card-dot green"></span>
            <span className="card-path">localhost:3000 // api/evaluate</span>
          </div>
          <div className="decision-grid-mock">
            <div className="json-panel-mock">
              <pre className="json-text">
{`{
  "status": "success",
  "data": {
    "engine": "v2.1",
    "best_option": "Option A",
    "confidence": 0.94
  }
}`}
              </pre>
            </div>
            <div className="graph-panel-mock">
              <svg className="graph-svg" viewBox="0 0 200 150">
                <circle cx="100" cy="30" r="12" fill="rgba(255, 255, 255, 0.05)" stroke="#00f2fe" strokeWidth="1.5" />
                <text x="100" y="33" fontSize="8" fill="#a5b4fc" textAnchor="middle" fontFamily="monospace">INPUT</text>
                
                <line x1="100" y1="42" x2="60" y2="78" stroke="#00f2fe" strokeWidth="1.5" />
                <line x1="100" y1="42" x2="140" y2="78" stroke="#ff0844" strokeWidth="1.5" strokeDasharray="3,3" />
                
                <circle cx="60" cy="90" r="12" fill="rgba(255, 255, 255, 0.05)" stroke="#00f2fe" strokeWidth="1.5" />
                <text x="60" y="93" fontSize="8" fill="#a5b4fc" textAnchor="middle" fontFamily="monospace">OPT A</text>
                
                <circle cx="140" cy="90" r="12" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <text x="140" y="93" fontSize="8" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">OPT B</text>
                
                <line x1="60" y1="102" x2="100" y2="132" stroke="#00f2fe" strokeWidth="1.5" />
                
                <circle cx="100" cy="140" r="6" fill="#00f2fe" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Catalyst Tech Hub",
    description: "A highly polished, premium marketing and enrollment platform for Catalyst Tech Hub—a leading technology institution. Built with modern, editorial-style layouts, campus navigation dropdowns, success stories feeds, and an interactive callback modal lead system.",
    github_link: "https://github.com/nishad-mt/Catalyst_Skill_hub",
    live_link: null,
    tech_stack: ["React", "Vite", "Framer Motion", "Vanilla CSS", "UI/UX Design"],
    renderMockup: () => (
      <div className="premium-mockup-wrapper catalyst-hub-bg">
        <div className="glass-card-mockup catalyst-card">
          <div className="card-top-bar">
            <span className="card-dot red"></span>
            <span className="card-dot yellow"></span>
            <span className="card-dot green"></span>
            <span className="card-path">catalyst.tech/hub</span>
          </div>
          <div className="catalyst-content-mock">
            <div className="catalyst-navbar-mock">
              <span className="catalyst-logo-mock">CATALYST</span>
              <div className="catalyst-navlinks-mock">
                <span>Courses</span>
                <span>Success Stories</span>
                <span>About</span>
              </div>
              <span className="catalyst-cta-mock">Enroll</span>
            </div>
            
            <div className="catalyst-hero-mock">
              <div className="hero-text-block-mock">
                <div className="mock-badge-glow">NO.1 SKILL INITIATIVE</div>
                <div className="hero-title-mock">Transforming <br /><span className="text-highlight-mock">Digital Minds</span></div>
              </div>
              
              <div className="enroll-modal-mock">
                <div className="modal-title-mock">Request Callback</div>
                <div className="modal-form-mock">
                  <div className="mock-input-field"></div>
                  <div className="mock-input-field"></div>
                  <div className="mock-submit-btn-glow">SUBMIT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function Projects() {
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
            {PROJECTS.map((project, idx) => (
              <motion.div
                className="project-row-premium"
                key={project.id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="project-row-image">
                  {project.renderMockup ? (
                    project.renderMockup()
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
                      {project.tech_stack.join(' // ')}
                    </span>
                  </div>
                  <h3 className="project-row-title">{project.title}</h3>
                  <p className="project-row-desc">{project.description}</p>

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