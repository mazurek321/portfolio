import React, { useState } from 'react';
import "./Navbar.css";


interface NavbarProps {
  loading: boolean
}

const Navbar: React.FC<NavbarProps> = ({loading}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    setIsOpen(false); 
    
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${loading && 'loading'}`}>
      <div className="nav-left">
        <span onClick={scrollToTop}>Bartłomiej Mazurkiewicz</span>
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