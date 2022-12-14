import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Wordspace from "./components/Wordspace/Wordspace";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";

const App = () => {
 

  return (
    <div className="App">
       <BrowserRouter>
        <Header />
        <div className="container">
          <div className="row">
            {/* <div className="col-3">
              <Sidebar />
            </div> */}
            <div className="col-9">
              <Routes>
                <Route path={"/"} element={<Feed />}>
                  
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
