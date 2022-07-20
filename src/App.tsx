import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AuthRegContainer from "./components/Modal/Login/AuthRegContainer";
import SectionAllPosts from "./pages/SectionAllPosts/SectionAllPosts";
import SectionInfo from "./pages/SectionMyInfo/SectionMyInfo";
import SectionCreatePost from "./pages/SectionCreatePost/SectionCreatePost";
import SectionCechkPost from "./pages/SectionCechkPost/SectionCechkPost";
import SectionMyProfile from "./pages/SectionMyProfile/SectionMyProfile";

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
                <SectionInfo />
                <SectionAllPosts />
              </>
            }
          />

          <Route
            path="/createPost"
            element={
              <>
                <SectionCreatePost />
                <SectionAllPosts />
              </>
            }
          />

          <Route
            path="/checkPost/:id"
            element={
              <>
                <SectionCechkPost />
                <SectionAllPosts />
              </>
            }
          />
          <Route
            path="/MyProfile"
            element={
              <>
                <SectionMyProfile />
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
