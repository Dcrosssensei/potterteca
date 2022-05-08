import React from "react";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";
import { about } from "../assets/gallery";
import { TitleColor } from "../styles/ComponentStiled/TitleColor";

const AboutME = () => {
  return (
    <div className="Aboutme">
      <InfoChart className="Aboutme__cards">
        <div className="name">
          <img src={about.logo} alt="Logo" />
          <div>
            <TitleColor> Danilo Moreno </TitleColor>
            <h2>Front End </h2>
          </div>
        </div>
        <div className="contactme">
          <a
            href="https://www.linkedin.com/in/danilomh/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <img src={about.ln} alt="title" />
            <TitleColor className="--links">Contact me </TitleColor>
          </a>
        </div>
        <div className="componentes">
          <TitleColor> Componentes Usados </TitleColor>
          <div>
            <img src={about.js} alt="title" title="JavaScript" />
            <img src={about.react} alt="title" title="React" />
            <img src={about.redux} alt="title" title="Redux" />
            <img src={about.sass} alt="title" title="Sass" />
            <img src={about.styled} alt="title" title="Styled Components" />
          </div>
        </div>
      </InfoChart>
    </div>
  );
};

export default AboutME;
