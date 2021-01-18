import React from "react";
import { Navbar as Nav } from "./components/Navbar";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { NewPage } from "./components/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <NewPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
