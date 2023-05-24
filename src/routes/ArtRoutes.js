import React from "react";
import { Routes, Route } from "react-router-dom";
import Art from "../pages/Art";
import Painting from "../pages/Painting";

function ArtRoutes({ projects, icon }) {
  return (
    <>
      <Routes>
        <Route index element={<Art allProjects={projects} icon={icon} />} />
        <Route path="/mineral">
          <Route index element={<Painting can={projects[0]} />} />
          <Route path=":id" element={<Painting can={projects[0].canvas} />} />
        </Route>
      </Routes>
    </>
  );
}

export default ArtRoutes;
