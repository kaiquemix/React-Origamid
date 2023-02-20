import React from "react";
import Produtos from "./Produtos";

// useEffect e Array de Dependências
//Componente Montou
//O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

const useEffect = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados]: any = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    // ao clickar zerar a numeração
    setContar(0);
  }, [modal]);

  return (
    <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}

      <button onClick={() => setModal(!modal)}>Modal</button>
      {modal && <p>Meu Modal</p>}
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>

      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produtos />}
    </>
  );
};

export default useEffect;
