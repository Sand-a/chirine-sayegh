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
        <Route path="/mineral-sea">
          <Route index element={<Painting can={projects[1]} />} />
          <Route path=":id" element={<Painting can={projects[1].canvas} />} />
        </Route>
        <Route path="/vegetal-trees">
          <Route index element={<Painting can={projects[2]} />} />
          <Route path=":id" element={<Painting can={projects[2].canvas} />} />
        </Route>
        <Route path="/vegetal-watercolors">
          <Route index element={<Painting can={projects[3]} />} />
          <Route path=":id" element={<Painting can={projects[3].canvas} />} />
        </Route>
        <Route path="/vegetal-gold-series">
          <Route index element={<Painting can={projects[4]} />} />
          <Route path=":id" element={<Painting can={projects[4].canvas} />} />
        </Route>
        <Route path="/vegetal-secret-garden">
          <Route index element={<Painting can={projects[5]} />} />
          <Route path=":id" element={<Painting can={projects[5].canvas} />} />
        </Route>
        <Route path="/animal-sketches">
          <Route index element={<Painting can={projects[6]} />} />
          <Route path=":id" element={<Painting can={projects[6].canvas} />} />
        </Route>
      </Routes>
    </>
  );
}

export default ArtRoutes;
