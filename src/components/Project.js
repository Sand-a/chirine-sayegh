import React from "react";

import SwiperCaroussel from "./SwiperCaroussel/SwiperCaroussel";

const Project = ({ allProjects, icon }) => {
  return (
    <div className="section">
      <div className=" projects-container">
        {allProjects.map((project) => {
          return (
            <>
              <SwiperCaroussel key={project._id} images={project.images} />
              <div className="poject-details">
                <h1 className=" project-title">
                  {" "}
                  <img src={icon} alt="" className="project-icon" />
                  {project.title} <span className="space">| </span>
                  <span className="project-sub-title">{project.sub_title}</span>
                  {project.logo && (
                    <img className="project-logo" src={project.logo} alt="" />
                  )}
                  <span className="project-sub-title">{project.finish}</span>
                  <i className="project-location">{project.location}</i>
                </h1>
                <p
                  className="bodytext project-description
            "
                >
                  {project.description}
                </p>
                {project.press && (
                  <div className="press-container">
                    <p className=" press-article">in the Press</p>
                    <a
                      target="_blank"
                      href={project.press.press_path}
                      className="press-link"
                    >
                      <div className="press-image-icon">
                        <img
                          className="press-image"
                          loading="lazy"
                          src={project.press.press_image}
                          alt=""
                        />{" "}
                      </div>
                      <div className="press-details">
                        <p className="press-details-1">
                          {project.press.press_article}
                        </p>
                        <p className="press-details-2">
                          {project.press.press_name}
                        </p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
