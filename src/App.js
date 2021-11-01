import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import Profile from "./profile/Profile"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
