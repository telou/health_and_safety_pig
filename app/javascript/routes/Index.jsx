import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Terms from "../components/Terms";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/terms" exact component={Terms} />
    </Switch>
  </Router>
);
