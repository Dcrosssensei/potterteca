import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCharacter } from "../redux/dataSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";

import { DATA, MODALOPEN } from "../redux/UtilSlice";

const Characters = () => {
  const data = useSelector(selectCharacter);
  const dispatch = useDispatch();

  const Info = (props) => {
    for (let i = 0; i < data.length; i++) {
      if (props === data[i].id) {
        dispatch(DATA(data[i]));
        dispatch(MODALOPEN());
      }
    }
  };

  return (
    <div className="Character__Page">
      <div className="Character">
        {data.map((x, index) => (
          <InfoChart className="Character__Info" key={index}>
            <div>
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
    </div>
  );
};

export default Characters;
