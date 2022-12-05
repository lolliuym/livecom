import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Wordspace from "./components/Wordspace/Wordspace";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";

import express from "express";
import passport from "passport";
import util from "util";
import VkStrategy from "passport";
 
const App = () => {
  
  // var VK_APP_ID = "51482065";
  // var VK_APP_SECRET = "68DO4DOVVT0U75NYYlNJ";

  // if (!VK_APP_ID || !VK_APP_SECRET) {
  //   throw new Error(
  //     "Set VK_APP_ID and VK_APP_SECRET env vars to run the example"
  //   );
  // }

  // passport.serializeUser(function (user, done) {
  //   done(null, user);
  // });

  // passport.deserializeUser(function (obj, done) {
  //   done(null, obj);
  // });

  // passport.use(
  //   new VkStrategy(
  //     {
  //       clientID: VK_APP_ID,
  //       clientSecret: VK_APP_SECRET,
  //       callbackURL: "http://localhost:3000/auth/vk/callback",
  //       scope: ["email", "friends", "photos"],
  //       profileFields: ["email", "friends", "photos"],
  //       apiVersion: "5.131",
  //     },
  //     function verify(accessToken, refreshToken, params, profile, done) {
  //       process.nextTick(function () {
  //         const arr = [profile, params];
  //         console.log(arr);
  //         return done(null, arr);
  //       });
  //     }
  //   )
  // );

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
                 <Route path={"/"} element={<Feed />}></Route>
                <Route path={"/profile"} element={<Profile />}></Route>
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
