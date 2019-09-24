import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Terms from "../components/Terms";
import NewTerm from "../components/NewTerm";




export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/terms" exact component={Terms} />
      <Route path="/term" exact component={NewTerm} />
    </Switch>
  </Router>
);
