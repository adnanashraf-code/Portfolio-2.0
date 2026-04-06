import React from "react";

function About() {
  return (
    <section id="about" className="container reveal">
      <span className="section-label">ABOUT</span>
      <h2 className="section-title">
        ENGINEERING PRECISION, <br />
        <span className="text-gradient">DESIGNING DELIGHT</span>
      </h2>

      <div className="grid-2" style={{ alignItems: "center" }}>
        <div className="profile-visual-wrapper">
          <div className="image-accent top-left"></div>
          <div className="image-accent bottom-right"></div>
          
          <div className="profile-image-container">
            <div className="profile-glow"></div>
            <img
              src="/profile.png"
              alt="Adnan Ashraf"
              className="about-profile-img"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800/030712/06b6d4?text=Adnan+Ashraf";
              }}
            />
            
            {/* Full Stack Info Card as per user image */}
            <div className="profile-info-card">
              <div className="info-card-header">
                <span className="info-name">Adnan Ashraf</span>
              </div>
              <div className="info-card-body">
                <div className="info-dot"></div>
                <span className="info-role">FULL-STACK DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              color: "var(--primary-cyan)",
            }}
          >
            Who Am I?
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            I am a Full stack developer with strong JavaScript fundamentals and
            experience building interactive web applications using HTML, CSS,
            and Vanilla JavaScript. My passion lies in bridging the gap between
            design and engineering, ensuring that applications not only function
            flawlessly but also deliver exceptional user experiences.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Recently, I refactored the backend architecture of a SaaS dashboard,
            reducing lines of code by 1200 lines and boosting UI component
            reusability by 40%. This streamlined feature development and
            significantly improved code maintainability.
          </p>

          <div className="glass" style={{ padding: "2rem" }}>
            <h4 style={{ marginBottom: "1rem", color: "var(--text-light)" }}>
              Education
            </h4>
            <div style={{ marginBottom: "1rem" }}>
              <h5 style={{ color: "var(--primary-cyan)" }}>
                Bachelor of Computer Applications (BCA)
              </h5>
              <p style={{ fontSize: "0.9rem" }}>
                Sambalpur University, Odisha, India (2022 - 2025)
              </p>
            </div>
            <div>
              <h5 style={{ color: "var(--primary-cyan)" }}>
                Senior Secondary Education
              </h5>
              <p style={{ fontSize: "0.9rem" }}>
                Sri Aurobindo School, Rourkela (2019 - 2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
