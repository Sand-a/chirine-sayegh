import React from "react";
import CarouselSlide from "../components/CarouselSlide/CarouselSlide";
import { projectsArchitectureData } from "../datas/projectsdata";

const Architecture = () => {
  return (
    <div className="section section-projects">
      <h1 className="text-9xl font-bold underline ">Architecture</h1>
      {/* {projectsArchitectureData.map((project) => {
        return (
          <CarouselSlide key={project._id} projectImages={project.images} />
        );
      })} */}
    </div>
  );
};

export default Architecture;
