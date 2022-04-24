import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AuthRegContainer from "./components/Modal/Login/AuthRegContainer";
import SectionAllPosts from "./pages/SectionAllPosts/SectionAllPosts";
import SectionInfo from "./pages/SectionInfo/SectionInfo";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionInfo /><SectionAllPosts />
              </>
            }
          />
        </Routes>
      </div>
      <Nav />

      <AuthRegContainer />
    </div>
  );
}

export default App;
