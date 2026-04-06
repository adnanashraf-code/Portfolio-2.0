import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "SaaS Dashboard Prototype",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      desc: "Built a responsive SaaS style productivity dashboard with task management widgets, interactive UI updates, and LocalStorage based state persistence.",
      links: { github: "", live: "#" }
    },
    {
      title: "Prediction of Absenteeism at Workplace",
      tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest"],
      desc: "Developed an ML model predicting employee absenteeism using HR attendance datasets. Achieved 85% prediction accuracy and improved workforce planning insights.",
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="container reveal">
      <span className="section-label">PROJECTS</span>
      <h2 className="section-title">FEATURED <span className="highlight">WORK</span></h2>
      
      <div className="grid-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="card glass" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="card-title">{proj.title}</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.3rem 0.8rem', 
                  background: 'rgba(6, 182, 212, 0.1)', 
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: 'var(--primary-cyan)',
                  borderRadius: '20px' 
                }}>
                  {t}
                </span>
              ))}
            </div>
            
            <p style={{ flexGrow: 1, marginBottom: '2rem' }}>{proj.desc}</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
               <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>
                 <Github size={18} /> GitHub
               </a>
               <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary-gold)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>
                 <ExternalLink size={18} /> Live Demo
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
