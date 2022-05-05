import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, selectModal, MODALCLOSE } from "../redux/UtilSlice";

const Modal = () => {
  const displayModal = useSelector(selectModal);
  const modelData = useSelector(selectData);
  const dispatch = useDispatch();

  const modal = useRef("");

  useEffect(() => {
    if (displayModal === 1) {
      modal.current.style.display = "flex";
      console.log("flex");
    }
    console.log("effect");
  }, [displayModal]);

  const displayoff = () => {
    dispatch(MODALCLOSE());
    modal.current.style.display = "none";
  };

  return (
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
      <button onClick={() => displayoff()}> x</button>
    </div>
  );
};

export default Modal;
