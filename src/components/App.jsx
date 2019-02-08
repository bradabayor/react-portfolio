import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../styles/app.scss";
import "normalize.css";

import Terminal from "./Terminal";
import Header from "./Headers/Header";
import Nano from "./Nano";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/home"
                      component={withRouter(Terminal)}
                    />
                    <Route exact path="/work" component={Terminal} />
                    <Route path="/skills" component={Nano} />
                    <Route path="/about" component={Terminal} />
                    <Route path="/contact" component={Terminal} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
