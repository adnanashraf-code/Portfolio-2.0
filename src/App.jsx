import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="glow-orb cyan"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Adnan Ashraf. Built with React & Vanilla CSS.</p>
      </footer>
    </>
  );
}

export default App;
