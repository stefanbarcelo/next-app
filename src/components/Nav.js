import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { LocationContext } from '../Context'

export default class Navbar extends Component {
  static contextType = LocationContext;

  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="navigation">
        <nav>
          <div className="navCenter">
            <div className="burgerCon" onClick={this.handleToggle}>
              <span className="burger"></span>
            </div>

            <div className="logoCon">
              <Link to="/" className="logo">
                Next<span>™</span>
              </Link>
            </div>

            <Link to="/" className="contact">
              Contact Us
            </Link>
          </div>
        </nav>

        <div className={this.state.isOpen ? "mobileMenu showMenu" : "mobileMenu"}>
          <div className="closeContainer" onClick={this.handleToggle}>
            <div className="close"></div>
          </div>
          <ul className="mobList">
            <li>
              <NavLink
                exact
                to="/"
                className="mobLink"
                activeClassName="activeLink"
                onClick={this.handleToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="mobLink"
                to="/"
                onClick={this.handleToggle}>
                Cities
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.121" height="9.182" viewBox="0 0 14.121 9.182">
                    <path id="Path_1" data-name="Path 1" d="M2660.531,1476.272l6-6,6,6" transform="translate(2673.592 1477.333) rotate(180)" fill="none" stroke="#3d3d3d" strokeWidth="3" />
                  </svg>
                </span>
              </NavLink>
              
            </li>
            <li>
              <NavLink className="mobLink" to="/" onClick={this.handleToggle}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
