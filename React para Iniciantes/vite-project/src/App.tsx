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

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
