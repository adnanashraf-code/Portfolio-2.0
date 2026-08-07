import React, { useEffect, useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      num: "01",
      title: "Frontend Architecture",
      accent: "var(--primary-cyan)",
      icon: Code2,
      skills: [
        { name: "React.js & Next.js", level: 92 },
        { name: "JavaScript (ES6+) & TypeScript", level: 90 },
        { name: "HTML5 & Modern CSS3", level: 95 },
        { name: "Tailwind CSS & UI Design", level: 92 },
        { name: "State Management (Redux/Zustand)", level: 88 },
      ],
      tags: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    },
    {
      num: "02",
      title: "Backend",
      accent: "#10b981",
      icon: Database,
      skills: [
        { name: "Node.js & Express.js", level: 85 },
        { name: "MongoDB & Database Design", level: 82 },
        { name: "RESTful APIs & WebSockets", level: 88 },
        { name: "JWT Auth & API Security", level: 85 },
        { name: "Server-Side Rendering (SSR)", level: 80 },
      ],
      tags: ["NODE.JS", "EXPRESS", "MONGODB", "REST API"],
    },
    {
      num: "03",
      title: "Tools & Tech",
      accent: "var(--primary-gold)",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub Version Control", level: 92 },
        { name: "Vite & Build Tooling", level: 90 },
        { name: "Postman & API Debugging", level: 88 },
        { name: "VS Code & DevTools", level: 95 },
        { name: "Web Performance & SEO", level: 85 },
      ],
      tags: ["GIT", "GITHUB", "VITE", "POSTMAN"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cards Entrance Stagger
      gsap.fromTo(
        ".gsap-skill-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Icons Pop Animation
      gsap.fromTo(
        ".gsap-cat-icon",
        { scale: 0, rotate: -30 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Progress Bar Fill & Percentage Counter
      const bars = gsap.utils.toArray(".gsap-progress-fill");
      bars.forEach((bar) => {
        const targetLevel = bar.getAttribute("data-level");
        const valSpan = bar.closest(".skill-row-item")?.querySelector(".gsap-val-num");

        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${targetLevel}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );

        if (valSpan) {
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: parseInt(targetLevel, 10),
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              valSpan.innerText = `${Math.round(counterObj.val)}%`;
            },
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          });
        }
      });

      // 4. Tech Badges Pop
      gsap.fromTo(
        ".gsap-tech-tag",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="container reveal skills-page-section">
      <span className="section-label">SKILLS & EXPERTISE</span>

      <h2 className="section-title">
        TECHNICAL <span className="highlight">STACK</span>
      </h2>

      <div className="skills-grid-container" style={{ marginTop: "2rem" }}>
        {skillCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div
              key={idx}
              className="card glass skill-category-card gsap-skill-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Category Header */}
              <div className="cat-header" style={{ marginBottom: "1.8rem" }}>
                <div className="cat-info">
                  <span className="cat-num-tag" style={{ color: cat.accent }}>
                    {cat.num}
                  </span>
                  <h3 className="cat-title-text" style={{ fontSize: "1.4rem" }}>
                    {cat.title}
                  </h3>
                </div>
                <div className="cat-visual gsap-cat-icon">
                  <IconComp size={28} className="cat-icon-svg" style={{ color: cat.accent }} />
                </div>
              </div>

              {/* Progress Bars for all Categories */}
              <div className="skill-list-rows" style={{ flexGrow: 1, gap: "1.2rem" }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row-item">
                    <div className="skill-row-header" style={{ marginBottom: "0.4rem" }}>
                      <span className="skill-row-name" style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>
                        {skill.name}
                      </span>
                      <span
                        className="skill-row-val gsap-val-num"
                        style={{ color: cat.accent, fontSize: "0.82rem" }}
                      >
                        0%
                      </span>
                    </div>
                    <div className="skill-row-track">
                      <div
                        className="skill-row-fill gsap-progress-fill"
                        data-level={skill.level}
                        style={{
                          width: "0%",
                          background: cat.accent,
                          boxShadow: `0 0 8px ${cat.accent}`,
                        }}
                      >
                        <div
                          className="skill-row-glow-tip"
                          style={{ backgroundColor: cat.accent }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Tech Badges / Tags Footer */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "1.8rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {cat.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="gsap-tech-tag"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      letterSpacing: "1px",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: `1px solid ${cat.accent}30`,
                      color: cat.accent,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
