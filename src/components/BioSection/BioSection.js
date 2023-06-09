import React from "react";
import "./BioSection.css";

const BioSection = () => {
  return (
    <div className="section bio-section ">
      <img src="/images/bio-image.jpg" alt="" className="bio-image" />
      <h1 className="primary-headline">Design-based architect & artist</h1>
      <p className="bio-text bodytext">
        Chirine Sayegh is a French Lebanese architect born in Beirut, Lebanon,
        and raised in the USA. With a Master of Architecture from ALBA—Académie
        Libanaise des Beaux Arts in 2003—she has been imparting her knowledge of
        creative sketching to architecture students at the institution since
        2014. In addition to her architectural expertise, Chirine is a
        self-taught artist known for her highly original and critically
        acclaimed paintings and sculptures.
        <br></br>
        <br></br>
        In 2005, Chirine embarked on furniture creation and manufacturing,
        broadening her artistic repertoire. From 2016 through the end of 2021,
        she played a pivotal role in a prestigious architecture firm in Beirut,
        where her experience working with clients, contractors, and students—as
        well as collaborating with other firms—refined her attentive listening
        skills and fueled her passion for exceptional design solutions.
        <br></br>
        <br></br>
        At the core of Chirine's philosophy lies a profound emphasis on respect:
        for her clients, the environment—both natural and built—and for the
        responsible use of materials. She believes that achieving comfort and
        diversity in space utilization relies on effective contextual
        integration, while the innovative use of sustainable materials in their
        purest form holds equal significance. These guiding principles have
        seamlessly merged in Chirine's creative approach which integrates
        furniture design, art, and architecture.
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
