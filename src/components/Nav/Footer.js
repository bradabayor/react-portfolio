import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Brad Swan, 2019</p>
        <ul className="nav__links list--typenone">
          <li>
            <NavLink className="nav__link" activeClassName="active" to="/work">
              Github
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="active"
              to="/contact"
            >
              Stack Overflow
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
