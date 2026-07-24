import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectsData } from "../../data/ProjectsData";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./AllProjectsPage.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  screenshots?: string[];
  github?: string;
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (id !== prevId) {
    setPrevId(id);
    setActiveImg(activeProject.img);
    setIsModalOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const allScreenshots: string[] = [
    activeProject.img,
    ...(activeProject.screenshots || [])
  ];

  const handlePrevImg = useCallback((e?: React.MouseEvent): void => {
    e?.stopPropagation();
    setActiveImg((currentImg) => {
      const currentIndex = allScreenshots.indexOf(currentImg);
      const prevIndex = currentIndex <= 0 ? allScreenshots.length - 1 : currentIndex - 1;
      return allScreenshots[prevIndex];
    });
  }, [allScreenshots]);

  const handleNextImg = useCallback((e?: React.MouseEvent): void => {
    e?.stopPropagation();
    setActiveImg((currentImg) => {
      const currentIndex = allScreenshots.indexOf(currentImg);
      const nextIndex = currentIndex === allScreenshots.length - 1 ? 0 : currentIndex + 1;
      return allScreenshots[nextIndex];
    });
  }, [allScreenshots]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevImg();
      } else if (e.key === "ArrowRight") {
        handleNextImg();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handlePrevImg, handleNextImg]);

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
                <FaGithub style={{ fontSize: "1.1rem" }} />
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
                <FaGithub style={{ fontSize: "1.1rem" }} />
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
                <FaGithub style={{ fontSize: "1.1rem" }} />
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
              <button className="gallery-nav-btn prev" onClick={handlePrevImg} aria-label="Poprzednie zdjęcie">
                &#10094;
              </button>
            )}

            <img
              src={activeImg}
              alt={activeProject.title}
              className="mockup-img clickable"
              onClick={() => setIsModalOpen(true)}
            />

            {allScreenshots.length > 1 && (
              <button className="gallery-nav-btn next" onClick={handleNextImg} aria-label="Następne zdjęcie">
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
                <img src={activeProject.img} alt="Podgląd główny" />
              </div>

              {activeProject.screenshots.map((screen: string, index: number) => (
                <div
                  key={index}
                  className={`screenshot-thumb ${
                    activeImg === screen ? "active" : ""
                  }`}
                  onClick={() => setActiveImg(screen)}
                >
                  <img src={screen} alt={`Zrzut ekranu ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <div className="image-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Zamknij podgląd"
            >
              <FaTimes />
            </button>

            {allScreenshots.length > 1 && (
              <>
                <button
                  className="modal-nav-btn prev"
                  onClick={handlePrevImg}
                  aria-label="Poprzednie zdjęcie"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="modal-nav-btn next"
                  onClick={handleNextImg}
                  aria-label="Następne zdjęcie"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <img src={activeImg} alt={activeProject.title} className="image-modal-img" />
          </div>
        </div>
      )}

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