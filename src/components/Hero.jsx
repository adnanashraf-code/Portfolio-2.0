import { Briefcase, Code2, Zap, Palette, Layout, Cpu } from 'lucide-react';

function HeroVisual() {
  return (
    <div className="hero-visual-container">
      {/* Background Glow */}
      <div className="hero-bg-glow"></div>
      
      {/* Profile Image Wrapper */}
      <div className="hero-profile-wrapper">
        <img src="/hero.png" alt="Adnan Ashraf" className="hero-profile-img" />
        
        {/* Floating Badges */}
        <div className="floating-badge vibe-coder">
          <Zap size={16} />
          <span>VIBE CODER</span>
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
  );
}

function Hero() {
  return (
    <section id="hero" className="container hero-content reveal">
      <div className="hero-text">
        <span className="section-label">INTRODUCTION</span>
        <h1>ARCHITECTING <span className="text-gradient">PREMIUM</span> FRONTEND INTERFACES</h1>
        <p>I am a Frontend Specialist dedicated to building high-performance, pixel-perfect web applications. I transform complex ideas into seamless digital experiences using modern tools and creative engineering.</p>
        
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

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Briefcase size={18} /> View My Work
          </a>
          <a href="https://github.com/adnanashraf-code" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'var(--bg-card)', borderColor: 'var(--glass-border)' }}>
            <Code2 size={18} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}/> GitHub
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
         <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
