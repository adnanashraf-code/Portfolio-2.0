import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <a href="#" className="logo">Adnan</a>
        
        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="mobile-only"><a href="#" className="btn-primary">Hire Me</a></li>
        </ul>

        <div className="nav-actions">
           <a href="" className="btn-primary desktop-only">Hire Me</a>
           <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
