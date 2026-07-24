import React, { useState } from 'react';
import { 
  FaReact, FaJs, FaCss3Alt, FaPython, 
  FaDocker, FaLinux, FaWindows, FaHtml5, FaGithub 
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { AiOutlineDotNet } from 'react-icons/ai';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiTypescript } from 'react-icons/si';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import "./Skills.css";

const Skills = () => {
    const filters = ["Wszystkie", "Frontend", "Backend", "Bazy danych", "Devops", "Systemy"];
    const [active, setActive] = useState("Wszystkie");
    const [sectionRef, isVisible] = useIntersectionObserver();

    const skills = [
        { id: 1, name: "React", category: "Frontend", icon: <FaReact /> },
        { id: 2, name: "NextJs", category: "Frontend", icon: <TbBrandNextjs /> },
        { id: 3, name: "TypeScript", category: "Frontend", icon: <SiTypescript /> },
        { id: 4, name: "JavaScript", category: "Frontend", icon: <FaJs /> },
        { id: 5, name: "HTML", category: "Frontend", icon: <FaHtml5 /> },
        { id: 6, name: "CSS", category: "Frontend", icon: <FaCss3Alt /> },
        { id: 7, name: ".NET / C#", category: "Backend", icon: <AiOutlineDotNet /> },
        { id: 8, name: "Spring Boot / Java", category: "Backend", icon: <SiSpringboot /> },
        { id: 9, name: "Python", category: "Backend", icon: <FaPython /> },
        { id: 10, name: "PostgreSQL", category: "Bazy danych", icon: <BiLogoPostgresql /> },
        { id: 11, name: "MySQL", category: "Bazy danych", icon: <SiMysql /> },
        { id: 12, name: "Docker", category: "Devops", icon: <FaDocker /> },
        { id: 13, name: "Git / GitHub", category: "Devops", icon: <FaGithub /> },
        { id: 14, name: "Windows", category: "Systemy", icon: <FaWindows /> },
        { id: 15, name: "Linux", category: "Systemy", icon: <FaLinux /> }
    ];

    const filteredSkills = active === "Wszystkie" 
        ? skills 
        : skills.filter(s => s.category === active);

    return (
        <section 
            className={`skills-section reveal-section ${isVisible ? 'animate-reveal' : ''}`} 
            id="skills-section"
            ref={sectionRef}
        >
            <h2 className='skills-title'>Umiejętności</h2>
            
            <div className="filters">
                {filters.map((f) => (
                    <button 
                        key={f} 
                        className={`filter-option ${active === f ? 'active' : ''}`} 
                        onClick={() => setActive(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="skills-cloud">
                {filteredSkills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;