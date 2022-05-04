import React from "react";
import { Title } from "../styles/ComponentStiled/Title";

//redux
import { useDispatch } from "react-redux";
import {
  GRIFFINDOR,
  SLYTHERYN,
  RAVENCLAW,
  HUFFLEPUFF,
} from "../redux/PotterSlice";
import Header from "../components/Header";

const Home = () => {
  //redux
  const dispatch = useDispatch();

  return (
    <div className="home">
      <Header />

      <Title className="otro"> esto es lo que debe cambiar </Title>
      <h1 className="cs2"> uno normal </h1>
      <button onClick={() => dispatch(GRIFFINDOR())}>Griffindor</button>
      <button onClick={() => dispatch(SLYTHERYN())}>slytherin</button>
      <button onClick={() => dispatch(HUFFLEPUFF())}>hufflepuff</button>
      <button onClick={() => dispatch(RAVENCLAW())}>ravenclaw</button>
    </div>
  );
};

export default Home;
