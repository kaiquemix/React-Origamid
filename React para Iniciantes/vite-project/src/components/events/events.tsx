import React from "react";

//Eventos - Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

//window/document - Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

const Events = () => {
  function handClick(event: any) {
    alert("Comprou " + event.target.innerText);
  }
  function handleScroll(events: any) {
    console.log(events);
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <button onClick={handClick}> Camisas</button>
      <button onClick={handClick}> Bermudas</button>

      <div style={{ height: "200vw" }}>Div</div>
    </div>
  );
};

export default Events;
