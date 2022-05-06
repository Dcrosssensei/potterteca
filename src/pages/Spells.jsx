import React from "react";
import { useSelector } from "react-redux";
import { selectSpell } from "../redux/dataSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";
import img from "../assets/chart.svg";

const Spells = () => {
  const spell = useSelector(selectSpell);

  return (
    <div className="Spell">
      {spell.map((x, index) => (
        <InfoChart className="spell__Item" key={index}>
          <h2>Hechizo: </h2>
          <img src={img} alt={x.hechizo} />
          <div className="Spell__Item__Text">
            <h1>{x.hechizo}</h1>
            <p>{x.uso}</p>
          </div>
        </InfoChart>
      ))}
    </div>
  );
};

export default Spells;
