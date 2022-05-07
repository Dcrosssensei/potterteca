import React from "react";
import { useSelector } from "react-redux";
import { selectSpell } from "../redux/dataSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";

const Spells = () => {
  const spell = useSelector(selectSpell);

  return (
    <div className="Spell">
      {spell.map((x, index) => (
        <InfoChart className="spell__Item__Text" key={index}>
          <h1>{x.hechizo}</h1>
          <p>{x.uso}</p>
        </InfoChart>
      ))}
    </div>
  );
};

export default Spells;
