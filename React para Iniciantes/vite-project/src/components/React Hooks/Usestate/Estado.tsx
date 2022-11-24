import React from "react";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

//O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

//Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

//Hooks
//Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

//Reatividade
//Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

//Callback
//Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

//Callback Valor Inicial
//A definição do estado inicial também pode ser feita com um callback.

const Estado = () => {
  const [ativo, setAtivo] = React.useState(true);

  const [modal, setModal] = React.useState(false);

  const [items, setItems] = React.useState(["Item 1", "Item 2"]);

  function handleClickReativo() {
    // REATIVIDADE Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, "Novo Item"]);
  }

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <>
      <button>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botão Ativo" : "Botão Inativo"}
      </button>
      <br />
      <br />
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      <br />
      <br />
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClickReativo}>Adicionar Reativo</button>

      <br />
      <br />
      <button onClick={handleClick}>
        {ativo ? "Está Ativo" : "Está Inativo"}
      </button>
    </>
  );
};

export default Estado;
