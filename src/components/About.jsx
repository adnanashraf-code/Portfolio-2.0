import React from "react";
import { ArrowUpRight, Zap, Palette, Layout, Cpu } from "lucide-react";

function About() {
  return (
    <section id="about" className="container about-section reveal">
      <div className="about-breadcrumb">ABOUT</div>

      <div className="about-grid">
        {/* Left: Profile Visual */}
        <div className="about-profile-visual">
          <div className="hero-visual-container">
            {/* Morphing Name branding */}
            <div className="hero-branding-morph">
              <span className="word word-1">ADNAN ASHRAF</span>
              <span className="word word-2">FRONTEND DEVELOPER</span>
            </div>

            {/* Rotating Background SVG */}
            <div className="hero-visual-svg-bg">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="rgba(6, 181, 212, 0.89)"
                  strokeWidth="0.5"
                  strokeDasharray="7,5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(249, 245, 245, 0.26)"
                  strokeWidth="1"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="105"
                  fill="none"
                  stroke="rgba(11, 181, 211, 0.1)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>

            {/* Background Glow */}
            <div className="hero-bg-glow"></div>

            {/* Profile Image Wrapper */}
            <div className="hero-profile-wrapper">
              <img
                src="/hero.png"
                alt="Adnan Ashraf - Frontend Developer"
                className="hero-profile-img"
                loading="lazy"
                width="360"
                height="480"
              />

              {/* Floating Badges */}
              <div className="floating-badge vibe-coder">
                <Zap size={16} />
                <span>CODE ARCHITECT</span>
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
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-main-title reveal">
            Engineering <span className="text-secondary">precision</span>, meets
            thoughtful design.
          </h2>

          <div className="about-description reveal">
            <p>
              I'm <span className="highlight-text">Adnan Ashraf</span>, a
              full-stack developer obsessed with building digital experiences
              that are both technically rigorous and visually stunning.
            </p>
            <p>
              I bridge the gap between engineering and design — writing clean,
              performant code while crafting interfaces that feel alive. Every
              pixel has a purpose.
            </p>
            <a
              href="/My%20resume.pdf"
              download="Adnan_Ashraf_Resume.pdf"
              target="_blank"
              className="resume-link"
            >
              Download Resume <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Education Terminal (Previously Tech Stack) */}
          <div className="education-terminal reveal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">education.json</div>
            </div>

            <div className="terminal-body">
              <div className="edu-group">
                <div className="edu-label">GRADUATION</div>
                <div className="edu-item">
                  <span className="edu-title">
                    Bachelor of Computer Applications
                  </span>
                  <span className="edu-desc">
                    Sambalpur University • 2022 - 2025
                  </span>
                </div>
              </div>

              <div className="edu-group">
                <div className="edu-label">SCHOOLING</div>
                <div className="edu-item">
                  <span className="edu-title">Senior Secondary Education</span>
                  <span className="edu-desc">
                    Sri Aurobindo School, Rourkela • 2019 - 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
