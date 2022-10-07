import React from "react";
import "./App.css";
import Expressoes from "./components/tsx/Expressoes";
import Execexpressoes from "./components/tsx/Execexpressoes";

const App = () => {
  return (
    <div className="App">
      <p>EXPRESSÕES :</p>
      <Expressoes />
      <p>EXEC EXPERSSOES</p>
      <Execexpressoes />
    </div>
  );
};

export default App;
