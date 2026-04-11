import React from "react";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="container about-section reveal">
      <div className="about-breadcrumb">ABOUT</div>

      <div className="about-grid">
        {/* Left: Profile Visual */}
        <div className="about-profile-visual">
          <div className="profile-frame">
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>
            <div className="halo-glow"></div>
            <img
              src="/profile.png"
              alt="Adnan Ashraf Profile Photo"
              className="profile-img"
              loading="lazy"
              width="420"
              height="525"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800/030712/06b6d4?text=Adnan+Ashraf";
              }}
            />
            {/* Overlay Info Card */}
            <div className="profile-info-tag">
               <div className="tag-name">Adnan Ashraf</div>
               <div className="tag-role">
                 <span className="tag-dot"></span>
                 FRONTEND DEVELOPER
               </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-main-title reveal">
            Engineering <span className="text-secondary">precision</span>, meets thoughtful design.
          </h2>

          <div className="about-description reveal">
            <p>
              I'm <span className="highlight-text">Adnan Ashraf</span>, a full-stack developer obsessed with 
              building digital experiences that are both technically rigorous and visually stunning.
            </p>
            <p>
              I bridge the gap between engineering and design — writing clean, performant code 
              while crafting interfaces that feel alive. Every pixel has a purpose.
            </p>
            <a href="/resume.pdf" target="_blank" className="resume-link">
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
                  <span className="edu-title">Bachelor of Computer Applications</span>
                  <span className="edu-desc">Sambalpur University • 2022 - 2025</span>
                </div>
              </div>

              <div className="edu-group">
                <div className="edu-label">SCHOOLING</div>
                <div className="edu-item">
                  <span className="edu-title">Senior Secondary Education</span>
                  <span className="edu-desc">Sri Aurobindo School, Rourkela • 2019 - 2021</span>
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
