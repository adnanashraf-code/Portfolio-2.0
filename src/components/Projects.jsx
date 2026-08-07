import React, { useEffect, useRef } from "react";
import { ExternalLink, Github, Layers, Keyboard, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Kraft",
      subtitle: "Creative Design System & Component Library",
      badge: "DESIGN SYSTEM",
      icon: Layers,
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      desc: "A high-performance design system and component architecture for modern SaaS applications with fluid micro-interactions and dark mode tokens.",
      highlights: [
        "Fluid spring micro-interactions & gesture support",
        "Accessible, production-ready design tokens",
        "Zero-runtime overhead UI component primitives",
      ],
      links: {
        github: "https://github.com/adnanashraf-code/kraft",
        live: "https://kraft-chi.vercel.app/",
      },
    },
    {
      title: "Clackr",
      subtitle: "Mechanical Typing Speed Test & Analytics App",
      badge: "TYPING ENGINE",
      icon: Keyboard,
      tech: ["Next.js 15", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind CSS", "Web Audio API"],
      desc: "A state-of-the-art typing speed test app for typists & developers. Features an interactive 75% mechanical virtual keyboard, Web Audio API sound synthesizer, and WPM analytics.",
      highlights: [
        "Interactive 75% mechanical virtual keyboard with live keycap lighting",
        "Ultra low-latency Web Audio API mechanical sound synthesizer (<3ms buffer)",
        "Real-time WPM & accuracy analytics curves powered by Recharts",
        "5 test modes (Time, Words, Quotes, Zen, Code) & Canvas scorecard export",
      ],
      links: {
        github: "https://github.com/adnanashraf-code/clackr",
        live: "https://clackr-plum.vercel.app/",
      },
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cards Entrance Stagger
      gsap.fromTo(
        ".gsap-proj-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      // 2. Badges & Icons Pop
      gsap.fromTo(
        ".gsap-proj-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Tech Stack Tags Stagger
      gsap.fromTo(
        ".gsap-proj-tag",
        { y: 15, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // 4. Bullet Points Stagger
      gsap.fromTo(
        ".gsap-proj-highlight",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="container reveal">
      <span className="section-label">PROJECTS</span>
      <h2 className="section-title">
        FEATURED <span className="highlight">WORK</span>
      </h2>

      <div className="grid-2" style={{ gap: "2rem" }}>
        {projects.map((proj, idx) => {
          const IconComp = proj.icon;
          return (
            <div
              key={idx}
              className="card glass project-card-custom gsap-proj-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1.6rem 1.8rem",
                position: "relative",
                minHeight: "auto",
                borderRadius: "20px",
              }}
            >
              {/* Badge & Icon Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.8rem",
                }}
              >
                <span
                  className="gsap-proj-badge"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    letterSpacing: "1.2px",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "10px",
                    background: "rgba(6, 182, 212, 0.15)",
                    color: "var(--primary-cyan)",
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    textTransform: "uppercase",
                  }}
                >
                  {proj.badge}
                </span>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-cyan)",
                  }}
                >
                  <IconComp size={16} />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="card-title" style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}>
                {proj.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--primary-cyan)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "0.8rem",
                }}
              >
                {proj.subtitle}
              </p>

              {/* Tech Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1rem",
                }}
              >
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="gsap-proj-tag"
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.2rem 0.6rem",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "var(--text-light)",
                      borderRadius: "16px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p style={{ flexGrow: 1, marginBottom: "1rem", fontSize: "0.88rem", lineHeight: "1.5" }}>
                {proj.desc}
              </p>

              {/* Key Highlights */}
              <div style={{ marginBottom: "1.2rem" }}>
                {proj.highlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="gsap-proj-highlight"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: "var(--primary-cyan)", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "auto" }}>
                <a
                  href={proj.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary btn-secondary"
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.82rem",
                    borderRadius: "8px",
                  }}
                >
                  <Github size={15} /> Code
                </a>
                <a
                  href={proj.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.82rem",
                    borderRadius: "8px",
                  }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
