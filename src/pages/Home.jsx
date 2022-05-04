import React from "react";
import MenuCard from "../components/MenuCard";
import { Title } from "../styles/ComponentStiled/Title";

const Home = () => {
  return (
    <div className="home">
      <Title className="otro"> esto es lo que debe cambiar </Title>
      <h1 className="cs2"> uno normal </h1>
      <MenuCard></MenuCard>
    </div>
  );
};

export default Home;
