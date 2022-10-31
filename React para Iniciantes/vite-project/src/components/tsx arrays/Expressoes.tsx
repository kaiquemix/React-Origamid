import React from "react";

const Expressoes = () => {
  const produtos = ["Notebook ", "Smartphone ", "Tablet "];

  /* KEYS - O JSX necessita de uma key única para cada elemento da Array. */
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  /* MAP - É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array. */

  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  /* Array de Objetos - O cenário mais comum é trabalhar com array's de objetos. */

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Sword", ano: 2000 },
  ];

  return (
    <div className="">
      <p>{produtos}</p>
      <p>{empresas}</p>
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}, {livro.ano}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Expressoes;
