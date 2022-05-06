import React from "react";
import { useSelector } from "react-redux";
import { selectBook } from "../redux/dataSlice";
import { InfoChart } from "../styles/ComponentStiled/InfoChart";
import { imgBook } from "../assets/gallery";

const Books = () => {
  const data = useSelector(selectBook);

  return (
    <div className="Book">
      {data.map((x, index) => (
        <InfoChart className="Book__Item" key={index}>
          <img src={imgBook[x.id]} alt="libro" />
          <div className="Info__Text">
            <h1>{x.libro}</h1>
            <h3>{x.fecha_de_lanzamiento}</h3>
            <p>{x.descripcion}</p>
          </div>
        </InfoChart>
      ))}
    </div>
  );
};

export default Books;
