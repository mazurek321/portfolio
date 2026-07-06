import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./Navbar.css";

interface NavbarProps {
  loading: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ loading, isDarkMode, toggleTheme }) => {
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
    <nav className={`navbar ${loading ? 'loading' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="nav-left">
        <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>Bartłomiej Mazurkiewicz</span>
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
          <li>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
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