// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado, isso é um ESTADO

import React from "react";
import Produtos from "./Produtos";
const Produto = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event: any) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    console.log(json);
    setDados(json);
    setLoading(false);
  }
  return (
    <>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>SmartPhone</button>
      <button onClick={handleClick}>Tablet</button>
      {loading && <p>Carregando....</p>}
      {!loading && dados && <Produtos dados={dados} />}

      {dados ? <Produtos dados={dados} /> : " Sem Produtos"}
    </>
  );
};

export default Produto;
