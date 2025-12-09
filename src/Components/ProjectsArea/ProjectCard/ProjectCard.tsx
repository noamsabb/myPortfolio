import "./ProjectCard.css";
import { projectImages } from "../ProjectsData/ProjectsData";
import {projects, type Project} from "../ProjectsData/ProjectsData";
import { useState } from "react";
import { createPortal } from "react-dom";
type ProjectProps = {project: Project};


export function ProjectCard(props: ProjectProps) {
    const [showGallery, setShowGallery] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleImageClick = () => {
        if(props.project.gallery && props.project.gallery.length > 0){
            console.log(props.project.gallery);
            setShowGallery(true);
            setCurrentImageIndex(0);
        }
        else{
            
        }
    };

    const handleCloseGallery = () =>{ 
        setShowGallery(false);
    };

    const nextImage = () => {
        if (props.project.gallery) {
            setCurrentImageIndex((prev) => 
                prev === props.project.gallery!.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (props.project.gallery) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? props.project.gallery!.length - 1 : prev - 1
            );
        }
    };
    
    return (
        <div className="ProjectCard">
            <h3>{props.project.title}</h3>
            
            <div className="image-container">
                <img src={props.project.image} 
                alt={props.project.title} 
                onClick={handleImageClick}
                style={{cursor: props.project.gallery ? "pointer" : "default"}}
                />
                {props.project.gallery && props.project.gallery.length > 0 && (
                    <div className="image-overlay">
                        Click to open gallery
                    </div>
                )}
            </div>

            <p>{props.project.summary}</p>

            <ul className="tech-stack">
                {props.project.tech.map(t => (
                    <li key={t}>
                        {t}
                    </li>
                ))}
            </ul>

            <ul className="highlights">
                {props.project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                ))}
            </ul>

            <a 
                href={props.project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                View on GitHub
            </a>


                {showGallery &&
        createPortal(
          <div className="modal-overlay" onClick={() => setShowGallery(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="closeBtn" onClick={() => setShowGallery(false)}>×</button>
              
              <div className="gallery-main">
                <button className="gallery-arrow gallery-arrow-left" onClick={prevImage}>‹</button>
                <img 
                  src={projectImages[props.project.gallery![currentImageIndex] as keyof typeof projectImages]}
                  alt={`${props.project.title} - Image ${currentImageIndex + 1}`}
                  className="gallery-main-img"
                />
                <button className="gallery-arrow gallery-arrow-right" onClick={nextImage}>›</button>
              </div>

              <div className="gallery-thumbnails">
                {props.project.gallery?.map((imgKey, idx) => (
                  <img 
                    key={idx}
                    src={projectImages[imgKey as keyof typeof projectImages]}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`gallery-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
        </div>
    );
}
