import React from "react";

const Modal = ({ modal, setModal }: any) => {
  if (modal === true)
    return (
      <div>
        Esse é o modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
};

export default Modal;
