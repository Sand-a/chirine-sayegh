import React from "react";
import CarouselInsta from "../components/CarouselInsta/CarouselInsta";

const Project = ({ allProjects, icon }) => {
  return (
    <div className="section">
      <div className=" projects-container">
        {allProjects.map((project) => {
          return (
            <>
              <CarouselInsta
                key={project._id}
                projectImages={project.images}
                autoSlide={true}
                // autoSlideInterval={3000}
              />
              <div className="poject-details">
                <h1 className=" project-title">
                  {" "}
                  <img src={icon} alt="" className="project-icon" />
                  {project.title} <span className="space">| </span>
                  <span className="project-sub-title">{project.sub_title}</span>
                  <img className="project-logo" src={project.logo} alt="" />
                  <i className="project-location">{project.location}</i>
                </h1>
                <p
                  className="bodytext project-description
            "
                >
                  {project.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
