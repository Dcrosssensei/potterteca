import React, { useEffect } from "react";

import { apiPotter } from "../services/serviceApi";
import { TitleColor } from "../styles/ComponentStiled/TitleColor";

import { useDispatch, useSelector } from "react-redux";
import { SPELL, INFO, CHARACTER, BOOK, selectSpell } from "../redux/dataSlice";
import Menu from "./Menu";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const check = useSelector(selectSpell);

  useEffect(() => {
    if (Object.keys(check).length === 0) {
      apiPotter().then((resp) => {
        const datos = resp;
        dispatch(SPELL(datos.hechizos));
        dispatch(INFO(datos.info));
        dispatch(CHARACTER(datos.personajes));
        dispatch(BOOK(datos.libros));
      });
    }
  });

  return (
    <div className="Layout">
      <TitleColor className="title-name"> Potterteca </TitleColor>
      <Menu></Menu>
      {children}
    </div>
  );
};
