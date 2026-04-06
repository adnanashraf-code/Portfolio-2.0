import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="container reveal">
      <span className="section-label">GET IN TOUCH</span>
      <h2 className="section-title">LET'S BUILD <span className="text-gradient">TOGETHER</span></h2>
      
      <div className="contact-grid">
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>Contact Information</h3>
          <p style={{ marginBottom: '2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(6,182,212,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-cyan)' }}>
                <Mail />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</span>
                <a href="mailto:adnanashraf7205@gmail.com" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '600' }}>adnanashraf7205@gmail.com</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-gold)' }}>
                <Phone />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Phone</span>
                <a href="tel:+917847827969" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: '600' }}>+91 7847827969</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-light)' }}>
                <MapPin />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Location</span>
                <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>India</span>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/adnanashraf-code" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
            <a href="https://linkedin.com/in/adnanashraf78" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="glass" style={{ padding: '2.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
