import React from "react";
import MenuCard from "../components/MenuCard";
import Characters from "../pages/Characters";
// import { Title } from "../styles/ComponentStiled/Title";

const Home = () => {
  return (
    <div className="home">
      <MenuCard></MenuCard>
      <Characters />
    </div>
  );
};

export default Home;
