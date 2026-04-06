import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="#" className="logo">Adnan</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="" className="btn-primary">Hire Me</a>
      </div>
    </nav>
  );
}

export default Navbar;
