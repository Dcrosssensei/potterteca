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
    }
  }, [displayModal]);

  const displayoff = () => {
    dispatch(MODALCLOSE());
    modal.current.style.display = "none";
  };

  return (
    <div className="modal" ref={modal}>
      <div className="details">
        <button onClick={() => displayoff()}></button>
        <img src={modelData.imagen} alt={modelData.personaje} />
        <section>
          <div>
            <h2> Nombre:</h2>
            <h3> {modelData.personaje}</h3>
          </div>
          <div>
            <h2> Casa de Hogwarts:</h2>
            <h3>{modelData.casaDeHogwarts}</h3>
          </div>
          <div>
            <h2>Hijos:</h2>
            <div>
              {modelData.hijos?.map((el) => (
                <h3 key={el}>{el} </h3>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
