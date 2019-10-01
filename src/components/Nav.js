import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                Next™
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
          <div className="mobList">
            <Link className="mobLinks" to="/">Cities</Link>
            <Link className="mobLinks" to="/">Your Bookings</Link>
            <Link className="mobLinks" to="/">Contact Us</Link>
            <Link className="mobLinks" to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    );
  }
}
