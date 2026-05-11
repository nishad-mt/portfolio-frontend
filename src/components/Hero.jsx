import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-simple-layout">

          <motion.div
            className="hero-text-block-simple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <h1 className="hero-title-large">
              Engineering <br />
              <span className="accent-text">Intelligent</span> <br />
              Digital Realities
            </h1>
            <p className="hero-bio-simple">
              Nishad M T — Python Full Stack Architect.
              Bridging the gap between robust backend systems and cinematic frontend experiences.
            </p>
            <div className="hero-actions-simple">
              <a href="#projects" className="btn-hero-primary">Explore Work</a>
              <a href="#contact" className="btn-hero-secondary">Get in touch</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;