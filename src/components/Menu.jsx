import React from "react";
import { useDispatch } from "react-redux";
import BotonColor from "../styles/ComponentStiled/BotonColor";

import {
  GRYFFINDOR,
  SLYTHERYN,
  RAVENCLAW,
  HUFFLEPUFF,
} from "../redux/PotterSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <InfoChart className="modal__menu">
      <BotonColor
        onClick={() => dispatch(GRYFFINDOR())}
        className="container2__img"
      >
        GRYFFINDOR
      </BotonColor>
      <BotonColor
        onClick={() => dispatch(SLYTHERYN())}
        className="container2__img"
      >
        SLYTHERYN
      </BotonColor>
      <BotonColor
        onClick={() => dispatch(RAVENCLAW())}
        className="container2__img"
      >
        RAVENCLAW
      </BotonColor>
      <BotonColor
        onClick={() => dispatch(HUFFLEPUFF())}
        className="container2__img"
      >
        HUFFLEPUFF
      </BotonColor>
    </InfoChart>
  );
};

export default Menu;
