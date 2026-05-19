import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    // --- Mouse Parallax & Coordinates ---
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      const parallaxTargets = document.querySelectorAll('.parallax-target');
      parallaxTargets.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        el.style.transform = `translate(${mouseX * speed * 100}px, ${mouseY * speed * 100}px)`;
        el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      });

      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // --- HMR-Safe High-Performance Canvas Particles (Minimalistic Grid) ---
    let animationFrameId;
    let canvasResizeListener;
    
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        animationFrameId = requestAnimationFrame(initCanvas);
        return;
      }

      const ctx = canvas.getContext('2d');
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      canvasResizeListener = resizeCanvas;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          // Extremely fine, crisp dots (0.6px to 1.8px) for a subtle minimalistic texture
          this.size = Math.random() * 1.2 + 0.6;
          // Very slow, weightless drifting speeds
          this.speedX = Math.random() * 0.2 - 0.1;
          this.speedY = Math.random() * 0.2 - 0.1;
          // 40% chance of subtle purple accent, 60% standard soft silver/white
          const isAccent = Math.random() > 0.6;
          const r = isAccent ? 178 : 255;
          const g = isAccent ? 88 : 255;
          const b = isAccent ? 255 : 255;
          this.opacity = Math.random() * 0.3 + 0.1;
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          // Wrap around canvas boundaries for continuous drift
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;

          // Dynamic physics attraction/repulsion based on mouse proximity
          const mouse = mouseRef.current;
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          const maxDistance = 130;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance; // 0 to 1
            const angle = Math.atan2(dy, dx);
            // Soft repel away from cursor for interactive responsiveness
            const forceDirectionX = Math.cos(angle) * force * 1.2;
            const forceDirectionY = Math.sin(angle) * force * 1.2;
            
            this.x += forceDirectionX;
            this.y += forceDirectionY;
          }
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Responsive particle count (fewer particles on mobile for clean look and perfect performance)
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 18));
      const particles = Array.from({ length: particleCount }, () => new Particle());

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw each particle
        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        // Draw connecting constellation lines
        const connectionDist = 115;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < connectionDist) {
              // The closer the particles, the slightly more visible the connection
              const alpha = (1 - dist / connectionDist) * 0.07;
              
              // Elegant, hyper-subtle connecting lines (faded vibranium purple)
              ctx.strokeStyle = `rgba(138, 43, 226, ${alpha})`;
              ctx.lineWidth = 0.55;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    };

    initCanvas();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (canvasResizeListener) {
        window.removeEventListener('resize', canvasResizeListener);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Ultra-premium slow-reveal ease
      },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Sleek, ultra-minimalist constellation canvas background */}
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg-glow"></div>

      <div className="container">
        <div className="hero-grid-layout">
          {/* Left Column: Majestic Display Heading & Status Badge */}
          <motion.div 
            className="hero-left-col parallax-target" 
            data-speed="0.1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Elegant Minimalist System Badge */}
            <motion.div className="hero-badge-container" variants={itemVariants}>
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span className="badge-text">Systems Active</span>
              </div>
            </motion.div>

            <motion.h1 className="hero-title-large" variants={itemVariants}>
              Full - Stack Python <br />
              <span className="accent-text">Developer</span>
            </motion.h1>
          </motion.div>

          {/* Right Column: Bio Description and Actions */}
          <motion.div 
            className="hero-right-col parallax-target" 
            data-speed="0.16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p className="hero-bio-simple" variants={itemVariants}>
              I build scalable web applications with Python on the backend and clean,
              responsive UIs on the front. I care as much about how it works as how it looks.
            </motion.p>
            
            <motion.div className="hero-actions-simple" variants={itemVariants}>
              <a href="#projects" className="btn-primary">Case Studies</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;