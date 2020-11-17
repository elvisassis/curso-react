import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";

export default () => (
  <div className="App">
    <h1> Fundamentos React 2</h1>

    <div className="Cards">

      <Card titulo="#05 - Componente com filhos" color="#080">
        <Familia sobrenome="Assis"></Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatorio" color="#080">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#02 - Situação do Aluno">
        <ComParametro titulo="Situação do Aluno" aluno="Elvis" nota={10.0} />
      </Card>

      <Card titulo="#01 - Situação do Aluno">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
