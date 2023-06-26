import React from "react";
import Gallery from "../components/Gallery/Gallery";

const Canvas = ({ allProjects, icon }) => {
  return (
    <div className="section canvas-section">
      <div>
        {allProjects.map((project) => {
          return (
            <>
              <h1 className="project-title">
                <img src={icon} alt="flower-icon" className="canvas-icon" />
                <i>{project.title_italic}</i>
                {project.title} <span className="space">|</span>
                <i className="project-location">{project.date}</i>
              </h1>
              <Gallery canvas={project.canvas} icon={icon} />

              <p
                className="bodytext canvas-description
            "
              >
                <i className="green">"{project.title_italic}</i>
                <span className="green">{project.title}"</span>{" "}
                {project.description}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Canvas;
