import React from "react";
import "./ExhibitionList.css";

const ExhibitionList = ({ exhibitions }) => {
  return (
    <>
      {exhibitions.map((exhibition) => {
        return (
          <>
            <div className="exhibition-box">
              <div>
                <h2 className="exhibition-title">{exhibition.title}</h2>
                <p className="exhibition-description">
                  {exhibition.description}
                </p>
                <p className="bodytext-italic">{exhibition.date}</p>
                <p className="bodytext exhibition-place">{exhibition.place}</p>
                {exhibition.press && (
                  <>
                    <p className=" press-article">in the Press</p>
                    {exhibition.press.map((p) => {
                      return (
                        <a
                          target="_blank"
                          href={p.press_path}
                          className="press-link"
                        >
                          <div className="press-image-icon">
                            <img
                              className="press-image"
                              loading="lazy"
                              src={p.press_image}
                              alt=""
                            />{" "}
                          </div>
                          <div className="press-details">
                            <p className="press-details-1">{p.press_article}</p>
                            <p className="press-details-2">{p.press_name}</p>
                          </div>
                        </a>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            <p className="line"></p>
          </>
        );
      })}
    </>
  );
};

export default ExhibitionList;
