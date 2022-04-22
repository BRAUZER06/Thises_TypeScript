import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
      </div>
      <Nav />
    </div>
  );
}

export default App;
