import React from "react";

const Expressoes = () => {
  function meuNome() {
    return "André";
  }

  function quadrado(x: any) {
    return x * x;
  }

  const ativo = true;

  const carro = {
    rodas: 4,
    marca: "Ford",
  };

  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  return (
    <div>
      <p>IF com true e false: {ativo ? "ativo" : "inativo"}</p>
      <p>{"MINHA EMPRESA".toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>boolean não aparece = {true}</p>
      <p>null não aparece = {undefined}</p>
      <p>{(() => "Função Executada")()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(1) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p>
      <p>{quadrado(2) === 4 && "Fórmula correta"}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: "green" }}>Sempre aberta</p>
    </div>
  );
};

export default Expressoes;
