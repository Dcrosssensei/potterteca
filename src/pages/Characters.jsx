import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCharacter } from "../redux/dataSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";

const Characters = () => {
  const data = useSelector(selectCharacter);
  const modal = useRef("");
  const [modelData, setModel] = useState({
    personaje: "",
    id: 0,
    casaDeHogwarts: 0,
    hijos: [0],
    imagen: "",
  });

  const Info = (props) => {
    for (let i = 0; i < data.length; i++) {
      if (props === data[i].id) {
        setModel(data[i]);
        modal.current.style.display = "flex";
      }
    }
  };

  return (
    <div className="Character">
      <div className="modal" ref={modal}>
        <div className="details">
          <img src={modelData.imagen} alt={modelData.personaje} />
          Nombre: {modelData.personaje}
          Casa de Hogwarts: {modelData.casaDeHogwarts}
          Hijos: {modelData.hijos}
          {modelData.hijos.forEach((el) => {
            <p>{el}</p>;
          })}
        </div>
        <button></button>
      </div>
      {data.map((x, index) => (
        <InfoChart className="Character__Info" key={index}>
          <div className="Info__Text">
            <h1>{x.personaje}</h1>
            <h3>{x.casaDeHogwarts}</h3>
            <button
              onClick={() => {
                Info(x.id);
              }}
            >
              Detalles
            </button>
          </div>
          <img src={x.imagen} alt={x.personaje} />
        </InfoChart>
      ))}
    </div>
  );
};

export default Characters;
