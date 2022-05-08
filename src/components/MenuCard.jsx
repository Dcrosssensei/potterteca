import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets/gallery";
import { Cards } from "../styles/ComponentStiled/Card";
import { TitleColor } from "../styles/ComponentStiled/TitleColor";

const MenuCard = () => {
  return (
    <div className="MenuCard">
      <Link to="/characters" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.character} alt="Personajes" />
          <TitleColor> Personajes </TitleColor>
        </div>
      </Link>
      <Link to="/books" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.book} alt="Libros" />
          <TitleColor> Libros </TitleColor>
        </div>
      </Link>
      <Link to="/spells" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.spell} alt="Hechizos" />
          <TitleColor> Hechizos </TitleColor>
        </div>
      </Link>
      <Link to="/aboutme" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.aboutme} alt="autor" />
          <TitleColor> About Me </TitleColor>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
