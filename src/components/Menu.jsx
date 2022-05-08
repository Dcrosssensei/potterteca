import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <Link className="Menu__header --links" to="/">
        Potterteca
      </Link>
      <Link className="Menu__header --links" to="/characters">
        Personajes
      </Link>
      <Link className="Menu__header --links" to="/books">
        libros
      </Link>
      <Link className="Menu__header --links" to="/spells">
        Hechizos
      </Link>
      <Link className="Menu__header --links" to="/aboutme">
        Contactame
      </Link>
    </div>
  );
};

export default Menu;
