import React from "react";
import ExhibitionList from "../components/ExhibitionList/ExhibitionList";

const Exhibitions = ({ exhibitionsYear }) => {
  return (
    <div className="section">
      <div className="exhibition-container ">
        <img
          className="exhibition-intro-img"
          src="/images/intro-images/exhibition-section.jpg"
          alt=""
        />
        {exhibitionsYear.map((year) => {
          return (
            <div className="exhibitions-year-container">
              <h1 className="exhibitions-year green">{year.year}</h1>
              <ExhibitionList exhibitions={year.exhibitions} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exhibitions;
