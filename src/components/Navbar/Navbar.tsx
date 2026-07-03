import React, { useState } from 'react';
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    setIsOpen(false); // Automatycznie zamyka menu mobilne po kliknięciu
    
    // Bezpieczne pobranie elementu i wywołanie płynnego scrolla
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span>Bartłomiej Mazurkiewicz</span>
      </div>

      <div className={`nav-right ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#about-section" onClick={(e) => handleScroll(e, 'about-section')}>O mnie</a>
          </li>
          <li>
            <a href="#skills-section" onClick={(e) => handleScroll(e, 'skills-section')}>Umiejętności</a>
          </li>
          <li>
            <a href="#projects-section" onClick={(e) => handleScroll(e, 'projects-section')}>Projekty</a>
          </li>
          <li>
            <a href="#contact-section" onClick={(e) => handleScroll(e, 'contact-section')}>Kontakt</a>
          </li>
        </ul>
      </div>

      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;