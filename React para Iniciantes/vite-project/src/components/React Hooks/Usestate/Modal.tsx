import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div className="">
        Esse é o modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
};

export default Modal;
