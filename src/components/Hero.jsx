import React, { useState } from "react";
import { Briefcase, Code2 } from "lucide-react";
import RotatingSphere from "./RotatingSphere";

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
      {/* ---------------------------------------------------- */}
      {/* DESKTOP HERO LAYOUT (visible > 768px)                */}
      {/* ---------------------------------------------------- */}
      <div className="desktop-only-element hero-text">
        <h1 className="hero-title">
          CRAFTING <span className="text-gradient">PREMIUM</span> FRONTEND
          INTERFACES
        </h1>
        <p>
          Focused on building polished, high-performance web applications with
          clean architecture and user-centric design.
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

        <div className="hero-btns-container">
          <a
            href="#projects"
            className="btn-primary"
            aria-label="View portfolio projects"
          >
            <Briefcase size={20} /> View My Work
          </a>
          <a
            href="https://github.com/adnanashraf-code"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-secondary"
            aria-label="Visit my GitHub profile"
          >
            <Code2 size={20} /> GitHub
          </a>
        </div>
      </div>

      {/* 3D Interactive Sphere Visual (Desktop View) */}
      <div className="hero-visual desktop-only-element">
        <RotatingSphere />
      </div>

      <div className="scroll-indicator desktop-only-element">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"></div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MOBILE HERO LAYOUT (visible <= 768px)                */}
      {/* Matches Reference Image with User Data               */}
      {/* ---------------------------------------------------- */}
      <div className="mobile-only-element hero-mobile-wrapper">
        {/* 1. Status Pill Badges */}
        <div className="hero-status-badges-mobile">
          <div className="status-badge-pill green">
            <span className="live-dot-green">●</span> Available for work
          </div>
          <div className="status-badge-pill grey">
            India • Remote
          </div>
        </div>

        {/* 2. Giant All-Caps Bold Heading */}
        <h1 className="hero-title-mobile">
          CRAFTING<br />
          PREMIUM<br />
          FRONTEND<br />
          INTERFACES
        </h1>

        {/* 3. Description with Cyan Highlights */}
        <p className="hero-description-mobile">
          Focused on building polished, high-performance web applications with{" "}
          <span className="text-cyan">clean architecture</span> and{" "}
          <span className="text-cyan">user-centric design</span>.
        </p>

        {/* 4. Action Pill Buttons */}
        <div className="hero-btns-mobile">
          <a href="#projects" className="btn-cyan-pill">
            VIEW MY WORK &rarr;
          </a>
          <a
            href="https://github.com/adnanashraf-code"
            target="_blank"
            rel="noreferrer"
            className="btn-dark-pill"
          >
            &larr; GITHUB
          </a>
        </div>

        {/* 5. Mobile Stats Grid */}
        <div className="hero-stats-mobile">
          <div>
            <span className="stat-num-mobile">3+</span>
            <span className="stat-label-mobile">YEARS LEARNING</span>
          </div>
          <div>
            <span className="stat-num-mobile">10+</span>
            <span className="stat-label-mobile">PROJECTS</span>
          </div>
          <div className="stat-item-full">
            <span className="stat-num-mobile">100%</span>
            <span className="stat-label-mobile">COMMITMENT</span>
          </div>
        </div>

        {/* 6. Mobile Scroll Indicator */}
        <div className="mobile-scroll-indicator">
          <span className="mobile-scroll-text">SCROLL</span>
          <div className="mobile-scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
