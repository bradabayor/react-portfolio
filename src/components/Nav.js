import React, { Component } from 'react';
import '../index.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <object className="nav__logo" data={require('../images/simple_logo.svg')} width="60" height="60" type="image/svg+xml"></object>
        <ul className="nav__links list--typenone">
          <li className="nav__link">WORK</li>
          <li className="nav__link">CONTACT</li>
        </ul>
      </div>
    );
  }
}

export default Nav;