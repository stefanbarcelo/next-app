import React from "react";
import { Link } from "react-router-dom";
export default function Location({ room }) {

  return (
    <Link to="/">
      <div className="location">
        <div className="locationInfo">
          <h2>Taipei</h2>
          <p>Taiwan <span className="flagEmoji">🇹🇼</span></p>
          <p className="avgPrice">From $1,899 per month</p>
          <div className="weather">
            <div className="weatherEmoji">☀️</div>
            <p>18˚C/60˚F</p>
          </div>
        </div>
      </div>
    </Link>
  )
}