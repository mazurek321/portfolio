import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import uk from "../../assets/img/uk.png"
import pl from "../../assets/img/pl.png"

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
        <li><a href="#MainContent">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Footer">CV</a></li>
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
