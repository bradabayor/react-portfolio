import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <object
          className="nav__logo"
          data={require("../../images/simple_logo.svg")}
          width="60"
          height="60"
          type="image/svg+xml"
        />
        <ul className="nav__links list--typenone">
          <li>
            <NavLink className="nav__link" activeClassName="active" to="/work">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="active"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
