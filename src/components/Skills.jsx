import React from 'react';

function Skills() {
  const skillsList = [
    { name: "HTML5 & CSS3", level: "98%" },
    { name: "JavaScript (ES6+)", level: "90%" },
    { name: "React JS", level: "85%" },
    { name: "DOM Manipulation", level: "95%" },
    { name: "REST API Integration", level: "80%" },
  ];

  return (
    <section id="skills" className="container reveal">
      <span className="section-label">SKILLS</span>
      <h2 className="section-title">TECHNICAL <span className="highlight">EXPERTISE</span></h2>
      
      <div className="grid-2">
        <div className="glass reveal" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '2rem', color: 'var(--primary-cyan)' }}>Core Competencies</h3>
          
          {skillsList.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-header">
                <span style={{ color: 'var(--text-light)' }}>{skill.name}</span>
                <span style={{ color: 'var(--primary-gold)' }}>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="card glass">
            <h4 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Web Dev</h4>
            <p style={{ fontSize: '0.9rem' }}>Responsive Web Design, UI Fundamentals, Client Side State Management, LocalStorage.</p>
          </div>
          <div className="card glass">
            <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Tools</h4>
            <p style={{ fontSize: '0.9rem' }}>Git, GitHub, VS Code, Browser DevTools, Vite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
