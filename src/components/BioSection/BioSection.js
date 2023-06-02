import React from "react";
import "./BioSection.css";
import { BsDownload } from "react-icons/bs";

const BioSection = () => {
  return (
    <div className="section bio-section ">
      <img src="/images/bio2.jpg" alt="" className="bio-image" />
      <h1 className="primary-headline">Design-based architect & artist</h1>
      <p className="bio-text bodytext">
        Born in Beirut, Lebanon, and raised in the USA, Chirine Sayegh is a 2003
        graduate of Beirut's Académie des Beaux Arts (ALBA). Self-taught in
        painting and sculpture, Chirine explores innovative techniques in the
        design and execution of her creations. Since 2004, she has maintained
        her own architectural practice while also being a team member in larger
        architectural firms. In recent years, her artwork, inspired by nature,
        has sold on multiple platforms and has taken a more central role in her
        creative process.
      </p>
      {/* <div className=" pdf-downloads">
        <p className="bodytext">
          Download{" "}
          <span className="pdf-name">
            Chirine <strong>Sayegh :</strong>
          </span>
        </p>
        <ul className="pdf-links">
          <li className="pdf-items">
            <a
              className="pdf-link"
              target="_blank"
              href="/images/cv/Chirine Sayegh-cv-2022-fr.pdf"
            >
              <BsDownload className="pdf-icon" />
              <p className="bodytext pdf-text">
                <strong>CV</strong> in french
              </p>
            </a>
          </li>
          <li className="pdf-items">
            <a
              className="pdf-link"
              target="_blank"
              href="/images/cv/Chirine Sayegh-cv-2022-eng.pdf"
            >
              <BsDownload className="pdf-icon" />
              <p className="bodytext pdf-text">
                <strong>CV</strong> in english
              </p>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default BioSection;
