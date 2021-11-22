import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="form">
        <nav
          className="navbar"
          class="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <ul className="nav">
            <li>
              <a class="navbar-brand" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="/MyProjects/">
                MyProjects
              </a>
            </li>
            <li>
              <a class="navbar-brand" href="/About/">
                About
              </a>
            </li>
            <li>
              <a class="navbar-brand" href="/contact/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
