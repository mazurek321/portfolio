import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ProjectsData } from "../../data/ProjectsData";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./AllProjectsPage.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  screenshots?: string[];
  githubBackend?: string;
  githubFrontend?: string;
  technologies: string[];
  features: string[];
}

export default function AllProjectsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [showcaseRef, showcaseVisible] = useIntersectionObserver();
  const [otherProjectsRef, otherProjectsVisible] = useIntersectionObserver();

  const activeProject: Project =
    ProjectsData.find((p: Project): boolean => p.id === id) || ProjectsData[0];

  const [prevId, setPrevId] = useState<string | undefined>(id);
  const [activeImg, setActiveImg] = useState<string>(activeProject.img);

  if (id !== prevId) {
    setPrevId(id);
    setActiveImg(activeProject.img);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const allScreenshots: string[] = [
    activeProject.img,
    ...(activeProject.screenshots || [])
  ];

  const handlePrevImg = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    const currentIndex: number = allScreenshots.indexOf(activeImg);
    const prevIndex: number =
      currentIndex === 0 ? allScreenshots.length - 1 : currentIndex - 1;
    setActiveImg(allScreenshots[prevIndex]);
  };

  const handleNextImg = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    const currentIndex: number = allScreenshots.indexOf(activeImg);
    const nextIndex: number =
      currentIndex === allScreenshots.length - 1 ? 0 : currentIndex + 1;
    setActiveImg(allScreenshots[nextIndex]);
  };

  return (
    <div className="all-projects-container content-layer">
      <div className="nebula"></div>
      <button
        className="main-styled cold"
        onClick={() => navigate("/")}
        style={{ width: "auto", marginBottom: "3rem" }}
      >
        <span className="icon">←</span> Powrót do strony głównej
      </button>

      <section 
        className={`active-project-showcase reveal-section ${showcaseVisible ? 'animate-reveal' : ''}`}
        ref={showcaseRef}
      >
        <div className="project-detail-left">
          <h1 className="project-detail-title">{activeProject.title}</h1>

          <p className="project-detail-desc">{activeProject.description}</p>

          <div className="project-links-box">

            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <span className="dot-icon" />
                Kod projektu
              </a>
            )}

            {activeProject.githubBackend && (
              <a
                href={activeProject.githubBackend}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <span className="dot-icon" />
                Kod backendu
              </a>
            )}

            {activeProject.githubFrontend && (
              <a
                href={activeProject.githubFrontend}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <span className="dot-icon" />
                Kod frontendu
              </a>
            )}
          </div>

          <div className="tech-section">
            <h3>Technologie</h3>

            <div className="tech-tags-grid">
              {activeProject.technologies.map((tech: string, index: number) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="features-section">
            <h3>Funkcje</h3>

            <ul className="features-list">
              {activeProject.features.map((feat: string, index: number) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-detail-right">
          <div className="mockup-wrapper">
            {allScreenshots.length > 1 && (
              <button className="gallery-nav-btn prev" onClick={handlePrevImg}>
                &#10094;
              </button>
            )}

            <img
              src={activeImg}
              alt={activeProject.title}
              className="mockup-img"
            />

            {allScreenshots.length > 1 && (
              <button className="gallery-nav-btn next" onClick={handleNextImg}>
                &#10095;
              </button>
            )}
          </div>

          {activeProject.screenshots && activeProject.screenshots.length > 0 && (
            <div className="screenshots-gallery">
              <div
                className={`screenshot-thumb ${
                  activeImg === activeProject.img ? "active" : ""
                }`}
                onClick={() => setActiveImg(activeProject.img)}
              >
                <img src={activeProject.img} alt="Main preview" />
              </div>

              {activeProject.screenshots.map((screen: string, index: number) => (
                <div
                  key={index}
                  className={`screenshot-thumb ${
                    activeImg === screen ? "active" : ""
                  }`}
                  onClick={() => setActiveImg(screen)}
                >
                  <img src={screen} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <hr className="section-divider" />

      <section 
        className={`other-projects-section reveal-section ${otherProjectsVisible ? 'animate-reveal' : ''}`}
        ref={otherProjectsRef}
      >
        <h2 className="other-projects-heading">Inne projekty</h2>

        <div className="projects-grid">
          {ProjectsData
            .filter((p: Project): boolean => p.id !== activeProject.id)
            .map((project: Project) => {
              return (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="img-wrapper">
                    <img src={project.img} alt={project.title} />
                    <div className="card-overlay" />
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description.slice(0, 100)}...</p>
                    <button className="project-card-btn">
                      Zobacz projekt
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}