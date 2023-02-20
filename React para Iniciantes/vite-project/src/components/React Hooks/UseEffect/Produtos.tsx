import React from "react";

const Produtos = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event: any) {
      console.log(event);
    }
    window.addEventListener("scroll", handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <p style={{ height: "200vh" }}>Produto</p>;
};

export default Produtos;
