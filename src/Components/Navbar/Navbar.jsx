import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import uk from "../../assets/img/uk.png"
import pl from "../../assets/img/pl.png"
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({lightMode,setLightMode}) => {
  const [scrolled, setScrolled] = useState(0);
  const [show, setShow] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = 100;

      if (scrollTop > viewportHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLightModeChange = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem("lightMode", newMode);
  }

  return (
    <nav 
      className={`flex ${lightMode ? 'light':'dark'} ${show ? 'shown' : ''}`}
    >
      <span className="material-symbols-outlined menu" onClick={()=>setShow(!show)}>menu</span>
      <div className="click-controler" onClick={()=>setShow(false)}></div>
      <div className={`background ${scrolled ? "scrolled" : ""} `}></div>
      <ul className="flex">
        <li><Link smooth to="/#MainContent">Home</Link></li>
        <li><Link smooth to="/#About">About</Link></li>
        <li><Link smooth to="/#Skills">Skills</Link></li>
        <li><Link smooth to="/#Experience">Experience</Link></li>
        <li><Link smooth to="/#Projects">Projects</Link></li>
        <li><Link smooth to="/#Contact">Contact</Link></li>
        <li><Link smooth to="/#Footer">CV</Link></li>
      </ul>
      <div className="selections flex">
        <div className="mode">
          <span className="material-symbols-outlined" onClick={handleLightModeChange}>dark_mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
