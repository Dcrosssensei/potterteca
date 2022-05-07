import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets/gallery";
import { Cards } from "../styles/ComponentStiled/Card";

const MenuCard = () => {
  return (
    <div className="MenuCard">
      <Link to="/characters" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.character} alt="Personajes" />
          <h1> Personajes </h1>
        </div>
      </Link>
      <Link to="/books" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.book} alt="Libros" />
          <h1> Libros </h1>
        </div>
      </Link>
      <Link to="/spells" className="--links">
        <div className="MenuCard__Card">
          <Cards className="loadMenu" />
          <img className="" src={icons.spell} alt="Hechizos" />
          <h1> Hechizos </h1>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
