import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/app.scss";

import Terminal from "./Terminal";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Terminal} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
