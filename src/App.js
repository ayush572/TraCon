import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersList from "./components/UsersList";
import PlanLevel from "./components/PlanLevel";
import "./GlobalStyle.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/users" element={<UsersList></UsersList>}></Route>
          <Route path="/planlist" element={<PlanLevel></PlanLevel>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
