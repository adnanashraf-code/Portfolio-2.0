import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Customer IT Support Executive",
      company: "Venturesathi Pvt Ltd, India",
      date: "May 2025 - Feb 2026",
      details: [
        "Provided technical support to 100+ customers daily via chat and email, ensuring smooth issue resolution and customer satisfaction.",
        "Maintained approximately 98% customer satisfaction by delivering timely and accurate troubleshooting solutions.",
        "Collaborated with cross-functional teams to identify and resolve recurring customer pain points, contributing to a 15% improvement in overall customer experience scores.",
        "Assisted users with account, payment, and technical platform queries, improving overall service efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="container reveal">
      <span className="section-label">EXPERIENCE</span>
      <h2 className="section-title">PROFESSIONAL <span className="highlight">JOURNEY</span></h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card glass reveal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>{exp.title}</h3>
                <h4 style={{ color: 'var(--primary-cyan)', fontWeight: '600', marginTop: '0.5rem' }}>{exp.company}</h4>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.9rem', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                {exp.date}
              </span>
            </div>
            
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {exp.details.map((detail, idx) => (
                <li key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-cyan)' }}></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
