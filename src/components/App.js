import React, { Component } from 'react';
import Nav from './Nav';
import Board from './Board';

var ReactRouter = require('react-router-dom');

let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path="/" Component={Board} />
              <Route render={function() {
                return <p>NOT FOUND</p>
              }}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
