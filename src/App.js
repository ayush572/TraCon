import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Planlist from "./components/planlist";
import UsersList from "./components/UsersList";
import "./GlobalStyle.scss";
import { db } from "./firebase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/users" element={<UsersList></UsersList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
