import React from "react";
import { Layers, Monitor, PenTool } from "lucide-react";
import TiltCard from "./TiltCard";

function Skills() {
  const coreSkills = [
    { name: "HTML5 & CSS3", level: "98%" },
    { name: "JavaScript (ES6+)", level: "90%" },
    { name: "React JS", level: "85%" },
    { name: "DOM Manipulation", level: "95%" },
    { name: "REST API Integration", level: "80%" },
  ];

  return (
    <section id="skills" className="container reveal skills-page-section">
      <span className="section-label">SKILLS</span>
      
      <h2 className="section-title">
        Technical <span className="highlight">expertise.</span>
      </h2>

      <div className="skills-grid-container" style={{ marginTop: "1.5rem" }}>
        {/* Column 01: Core Competencies (Bars) */}
        <TiltCard className="skill-category-card glass skills-card-intense" maxTilt={25} scale={1.1}>
          <div className="cat-header">
            <div className="cat-info">
              <span className="cat-num-tag">01</span>
              <h3 className="cat-title-text">Core Competencies</h3>
            </div>
            <div className="cat-visual">
              <div className="cat-icon-glow" style={{ backgroundColor: "var(--primary-cyan)" }}></div>
              <Layers size={40} className="cat-icon-svg" />
            </div>
          </div>

          <div className="skill-list-rows">
            {coreSkills.map((skill, idx) => (
              <div key={idx} className="skill-row-item">
                <div className="skill-row-header">
                  <span className="skill-row-name">{skill.name}</span>
                  <span className="skill-row-val" style={{ color: "var(--primary-cyan)" }}>
                    {skill.level}
                  </span>
                </div>
                <div className="skill-row-track">
                  <div
                    className="skill-row-fill"
                    style={{
                      width: skill.level,
                      background: "var(--primary-cyan)",
                      boxShadow: "0 0 10px rgba(6, 182, 212, 0.4)",
                    }}
                  >
                    <div className="skill-row-glow-tip" style={{ backgroundColor: "var(--primary-cyan)" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* Column 02: Web Dev (Decorative Description) */}
        <TiltCard className="skill-category-card glass skills-card-intense" maxTilt={25} scale={1.1}>
          <div className="cat-header">
            <div className="cat-info">
              <span className="cat-num-tag">02</span>
              <h3 className="cat-title-text">Web Dev</h3>
            </div>
            <div className="cat-visual">
              <div className="cat-icon-glow" style={{ backgroundColor: "var(--primary-gold)" }}></div>
              <Monitor size={40} className="cat-icon-svg" />
            </div>
          </div>
          
          <div className="cat-description-content">
            <p className="cat-desc-p">
              Responsive Web Design, UI Fundamentals, Client Side State Management, LocalStorage.
            </p>
            <div className="cat-tags-styled">
              <span className="cat-tag">UI/UX</span>
              <span className="cat-tag">RESPONSIVE</span>
              <span className="cat-tag">STATE</span>
            </div>
          </div>
        </TiltCard>

        {/* Column 03: Tools (Decorative Description) */}
        <TiltCard className="skill-category-card glass skills-card-intense" maxTilt={25} scale={1.1}>
          <div className="cat-header">
            <div className="cat-info">
              <span className="cat-num-tag">03</span>
              <h3 className="cat-title-text">Tools</h3>
            </div>
            <div className="cat-visual">
              <div className="cat-icon-glow" style={{ backgroundColor: "#10b981" }}></div>
              <PenTool size={40} className="cat-icon-svg" />
            </div>
          </div>

          <div className="cat-description-content">
            <p className="cat-desc-p">
              Git, GitHub, VS Code, Browser DevTools, Vite.
            </p>
            <div className="cat-tags-styled">
              <span className="cat-tag">GIT</span>
              <span className="cat-tag">VITE</span>
              <span className="cat-tag">IDE</span>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

export default Skills;
