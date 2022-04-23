import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AuthRegContainer from "./components/Modal/Login/AuthRegContainer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>
      </div>
      <Nav />
      
      <AuthRegContainer />
    </div>
  );
}

export default App;
