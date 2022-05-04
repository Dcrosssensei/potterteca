import React from "react";
import { imgHouse } from "../assets/gallery";

//StyledComponents
import { BarColor } from "../styles/ComponentStiled/BarColor";
import { Title } from "../styles/ComponentStiled/Title";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  GRYFFINDOR,
  SLYTHERYN,
  RAVENCLAW,
  HUFFLEPUFF,
} from "../redux/PotterSlice";
import { selectHouse, selectMascot } from "../redux/PotterSlice";

const Header = () => {
  const house = useSelector(selectHouse);
  const mascot = useSelector(selectMascot);
  const dispatch = useDispatch();

  return (
    <BarColor className="header">
      <div className="header__container1">
        <Title>{house}</Title>
        <img src={mascot} alt="" />
      </div>
      <div className="header__container2">
        <img
          onClick={() => dispatch(GRYFFINDOR())}
          className="container2__img"
          src={imgHouse.griffindor}
          alt="title"
          title="Gryffindor"
        />
        <img
          onClick={() => dispatch(SLYTHERYN())}
          className="container2__img"
          src={imgHouse.slytherin}
          alt="title"
          title="Slytherin"
        />
        <img
          onClick={() => dispatch(RAVENCLAW())}
          className="container2__img"
          src={imgHouse.ravenclaw}
          alt="title"
          title="Ravenclaw"
        />
        <img
          onClick={() => dispatch(HUFFLEPUFF())}
          className="container2__img"
          src={imgHouse.hufflepuff}
          alt="title"
          title="Hufflepuff"
        />
      </div>
    </BarColor>
  );
};

export default Header;
