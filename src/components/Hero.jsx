import React, { useState } from "react";
import { Briefcase, Code2, Zap, Palette, Layout, Cpu } from "lucide-react";

function HeroVisual({ mousePos }) {
  // Parallax calculations
  const tx = (mousePos.x - window.innerWidth / 2) / 30;
  const ty = (mousePos.y - window.innerHeight / 2) / 30;

  return (
    <div
      className="hero-visual-container"
      style={{ transform: `translate(${tx}px, ${ty}px)` }}
    >
      {/* Morphing Name branding */}
      <div className="morph-container hero-branding-morph">
        <span className="word word-1">ADNAN ASHRAF</span>
        <span className="word word-2">FULL-STACK ENGINEER</span>
      </div>

      {/* SVG FILTER - Move to more robust values */}
      {/* SVG FILTER - RESTORED FOR STABLE MORPHING */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="threshold">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.5"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              type="matrix"
              values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 8 -2
        "
              result="goo"
            />

            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Rotating Background SVG */}
      <div className="hero-visual-svg-bg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(6, 181, 212, 0.89)" strokeWidth="0.5" strokeDasharray="7,5" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(249, 245, 245, 0.57)" strokeWidth="1" />
          <circle cx="100" cy="100" r="105" fill="none" stroke="rgba(11, 181, 211, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
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
    <section
      id="hero"
      className="container hero-content reveal"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-text">
        <div className="hero-status-badges">
          <div className="status-badge available">
            <span className="status-dot"></span>
            Available for work
          </div>
          <div className="status-badge location">India • Remote</div>
        </div>
        <h1 className="hero-title">
          CRAFTING <span className="text-gradient">PREMIUM</span> FRONTEND
          INTERFACES
        </h1>
        <p>
          I craft high-performance, pixel-precise interfaces that transform
          complex ideas into intuitive digital experiences.
        </p>

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

        <div style={{ marginTop: "3rem", display: "flex", gap: "1.2rem" }}>
          <a
            href="#projects"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <Briefcase size={20} /> View My Work
          </a>
          <a
            href="https://github.com/adnanashraf-code"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              background: "rgba(255,255,255,0.03)",
              borderColor: "var(--glass-border)",
            }}
          >
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
