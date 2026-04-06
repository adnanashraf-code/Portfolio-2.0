import React, { useState } from 'react';
import { Briefcase, Code2, Zap, Palette, Layout, Cpu } from 'lucide-react';

function HeroVisual({ mousePos }) {
  // Parallax calculations
  const tx = (mousePos.x - window.innerWidth / 2) / 30;
  const ty = (mousePos.y - window.innerHeight / 2) / 30;

  return (
    <div 
      className="hero-visual-container"
      style={{ transform: `translate(${tx}px, ${ty}px)` }}
    >
      {/* Name above card with animation */}
      <div className="hero-card-name animate-name-float">ADNAN ASHRAF</div>

      {/* Rotating Background SVG */}
      <div className="hero-visual-svg-bg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="none" 
            stroke="rgba(6, 181, 212)" 
            strokeWidth="0.5" 
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" 
            strokeDasharray="5,5"
          />
          <path 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.7)" 
            strokeWidth="1" 
            d="M 100, 100 m -90, 0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0"
          />
        </svg>
      </div>

      {/* Background Glow */}
      <div className="hero-bg-glow"></div>
      
      {/* Profile Image Wrapper */}
      <div className="hero-profile-wrapper">
        <img src="/hero.png" alt="Adnan Ashraf" className="hero-profile-img" />
        
        {/* Floating Badges */}
        <div className="floating-badge vibe-coder">
          <Zap size={16} />
          <span>VIBE CODER</span>
        </div>
        
        <div className="floating-badge creative-mind">
          <Palette size={16} />
          <span>CREATIVE MIND</span>
        </div>
        
        <div className="floating-badge frontend-design">
          <Layout size={16} />
          <span>FRONTEND DESIGN</span>
        </div>
        
        <div className="floating-badge ai-learner highlight">
          <Cpu size={16} />
          <span>AI LEARNER</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="hero" className="container hero-content reveal" onMouseMove={handleMouseMove}>
      <div className="hero-text">
        <span className="section-label">INTRODUCTION</span>
        <h1 className="hero-title">ARCHITECTING <span className="text-gradient">PREMIUM</span> FRONTEND INTERFACES</h1>
        <p>I am a Frontend Specialist dedicated to building high-performance, pixel-perfect web applications. I transform complex ideas into seamless digital experiences using modern tools and creative engineering.</p>
        
        <div className="hero-stats">
          <div>
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Learning</span>
          </div>
          <div>
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div>
            <span className="stat-num">100%</span>
            <span className="stat-label">Commitment</span>
          </div>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.2rem' }}>
          <a href="#projects" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
            <Briefcase size={20} /> View My Work
          </a>
          <a href="https://github.com/adnanashraf-code" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', borderColor: 'var(--glass-border)' }}>
            <Code2 size={20} /> GitHub
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
         <HeroVisual mousePos={mousePos} />
      </div>

      {/* Animated Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
