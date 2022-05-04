import React from "react";
import { icons } from "../assets/gallery";
import { Cards } from "../styles/ComponentStiled/Card";
// import { Title } from "../styles/ComponentStiled/Title";
import { TitleColor } from "../styles/ComponentStiled/TitleColor";

const MenuCard = () => {
  return (
    <div className="MenuCard">
      <Cards className="MenuCard__Card">
        <img className="" src={icons.character} alt="Personajes" />
        <TitleColor> Personajes </TitleColor>
      </Cards>

      <Cards className="MenuCard__Card">
        <img className="" src={icons.book} alt="Libros" />
        <TitleColor> Libros </TitleColor>
      </Cards>
      <Cards className="MenuCard__Card">
        <img className="" src={icons.spell} alt="Hechizos" />
        <TitleColor> Hechizos </TitleColor>
      </Cards>
    </div>
  );
};

export default MenuCard;
