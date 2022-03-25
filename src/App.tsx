import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Header />} />
     
      </Routes>
    </div>
  );
}

export default App;
