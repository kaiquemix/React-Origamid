import React from "react";
import "./App.css";
import Header from "./components/Componentes/Header";
import Footer from "./components/Componentes/Footer";
import Form from "./components/Componentes/Form";
import Expressoes from "./components/tsx/Expressoes";
import Execexpressoes from "./components/tsx/Execexpressoes";
import Expressoesarray from "./components/tsx arrays/Expressoes";
import Execexpressoesarray from "./components/tsx arrays/Execexpressoes";
import Events from "./components/events/events";
import Estado from "./components/React Hooks/Usestate/Estado";
import Produto from "./components/React Hooks/Usestate/exec/Produto";

const App = () => {
  return (
    <>
      <Produto />
    </>
  );
};

export default App;
