import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (currentScroll / totalHeight) * 100;
      setScrollProgress(percentage);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <Loader onComplete={() => setLoading(false)} />
      {!loading && (
        <div className="app-main-wrapper">
          <CustomCursor />
          
          {/* Background Elements */}
          <div className="bg-grid" aria-hidden="true"></div>
          <div className="glow-orb cyan" aria-hidden="true"></div>

          {/* Scroll Progress Bar */}
          <div 
            className="scroll-progress-bar" 
            style={{ width: `${scrollProgress}%` }}
            role="progressbar"
            aria-valuenow={scrollProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>

          <Navbar />

          <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <footer className="footer-modern">
            <div className="container footer-content">
              <div className="footer-left">
                <span className="footer-logo">ADNAN<span>.</span></span>
                <span className="copyright">© 2026 Adnan Ashraf. Built for performance.</span>
              </div>
              
              <nav className="footer-nav" aria-label="Footer Navigation">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
              </nav>

              <div className="footer-right">
                <p>Designed & Developed with <span className="heart" aria-label="heart">❤</span></p>
              </div>
            </div>
          </footer>

          {/* Scroll To Top Button */}
          <button 
            className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
