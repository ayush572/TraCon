import React from "react";
import HomePage from "./components/HomePage";
import Planlist from "./components/planlist";
import './GlobalStyle.scss'

function App() {
  return (
    <div className="App">
     <HomePage/>
     <Planlist level="1"/>
     <Planlist level="2"/>
     <Planlist level="3"/>
     <Planlist level="4"/>
    </div>
  );
}

export default App;
