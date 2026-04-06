import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    }
  }, []);

  return (
    <>
      {/* Custom Mouse Follower */}
      <div 
        className="custom-cursor" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

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
