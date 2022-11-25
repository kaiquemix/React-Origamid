import React from "react";

const ButtonModal = ({ setModal }: any) => {
  return <button onClick={() => setModal(true)}>Abrir Modal</button>;
};
export default ButtonModal;
