import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    console.log("working");
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
                Next™
              </Link>
            </div>

            <Link to="/" className="contact">
              Contact Us
            </Link>
          </div>
        </nav>
        <div className="mobileMenu">
          <div className="miniLogo">Next™</div>
          <div className="closeContainer">
            <div className="close"></div>
          </div>
          <ul>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
            <li>Hello World</li>
          </ul>
        </div>
      </div>
    );
  }
}
