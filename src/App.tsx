import React from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import ListEvents from "./components/ListEvents";
import ListStories from "./components/ListStories";
import Sidebar from "./components/Sidebar";
import Wordspace from "./components/Wordspace";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6">
          <CreatePost />
          <ListStories />
          <ListEvents />
          </div>
          <div className="col-3">
          <Wordspace />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default App;
