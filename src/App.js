import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

import UsersList from "./components/UsersList";
import PlanLevel from "./components/planlvl";
import "./GlobalStyle.scss";
import { db } from "./firebase";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/users" element={<UsersList></UsersList>}></Route>
          
          <Route path="/planlvl" element={<PlanLevel></PlanLevel>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
