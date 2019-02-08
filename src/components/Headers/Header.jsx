import React, { Component } from "react";

import { NavLink, withRouter } from "react-router-dom";

import logo from "../../images/bjs_logo.svg";

class Header extends Component {
  render() {
    return (
      <span className="header">
        <img src={logo} alt="logo" />
        <div className="header__nav">
          <p style={{ fontWeight: "bold" }}>{`bradjSwan`}</p>
          <p style={{ marginRight: "6px" }}>{`.developer(() => `}</p>
          <br />
          <p style={{ marginLeft: "30px" }}>{`return`}</p>
          <div
            className="dropdown-span"
            style={{
              background: "#1f2428",
              color: "white",
              marginLeft: "10px"
            }}
          >
            {`{ ${this.props.location.pathname.slice(1)} }`}
            <ul>
              <li>
                <NavLink className="link" to="/home">{`{ home }`}</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/work">{`{ work }`}</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/skills">{`{ skills }`}</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/about">{`{ about }`}</NavLink>
              </li>
              <li>
                <NavLink
                  className="link"
                  to="/contact"
                >{`{ contact }`}</NavLink>
              </li>
            </ul>
          </div>
          <br />
          <p>{`);`}</p>
        </div>
      </span>
    );
  }
}

export default withRouter(Header);
