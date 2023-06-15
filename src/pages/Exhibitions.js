import React from "react";
import ExhibitionList from "../components/ExhibitionList/ExhibitionList";

const Exhibitions = () => {
  return (
    <div className="section">
      <div className="container">
        <img
          className="exhibition-intro-img"
          src="/images/intro-images/exhibition-section.jpg"
          alt=""
        />
        <ExhibitionList />
      </div>
    </div>
  );
};

export default Exhibitions;
