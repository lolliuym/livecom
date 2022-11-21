import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Wordspace from "./components/Wordspace/Wordspace";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import axios from "axios"

const App = () => {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-6">
              <Routes>
                <Route path={"/feed"} element={<Feed />}>
                  
                </Route>
                <Route path={"/profile"} element={<Profile />}>
                 </Route>
              </Routes>
            </div>
            <div className="col-3">
              <Wordspace />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
