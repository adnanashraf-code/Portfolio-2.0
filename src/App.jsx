import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
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
  const progressRef = useRef(null);
  const sparkRef = useRef(null);

  // Initialize Lenis Smooth Scroll & Synchronized Progress Bar
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
    });

    let rafId;

    const updateProgress = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;
      
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      if (sparkRef.current) {
        sparkRef.current.style.left = `${progress * 100}%`;
      }
    };

    lenis.on("scroll", updateProgress);

    function raf(time) {
      lenis.raf(time);
      updateProgress();
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    updateProgress();

    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateProgress);
      lenis.destroy();
    };
  }, [loading]);

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
          <div className="scroll-progress-track" aria-hidden="true">
            <div
              ref={progressRef}
              className="scroll-progress-bar"
              role="progressbar"
              aria-label="Page scroll progress"
            />
            <div ref={sparkRef} className="scroll-progress-spark" />
          </div>

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
                <span className="footer-logo">
                  ADNAN<span>.</span>
                </span>
                <span className="footer-divider" aria-hidden="true">|</span>
                <span className="footer-copyright">
                  © 2026 Adnan Ashraf. All rights reserved.
                </span>
              </div>

              <div className="footer-right">
                <span className="footer-craft">
                  Crafted with precision & passion
                </span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
