import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Location({ location }) {
  const { city, slug, country, flag, price, degrees, symbol } = location;
  return (
    <Link to={`/rooms/${slug}`}>
      <div className="location">
        <div className="locationInfo">
          <h2>{city}</h2>
          <p>{country} <span className="flagEmoji">{flag}</span></p>
          <p className="avgPrice">From ${price} per month</p>
          <div className="weather">
            <div className="weatherEmoji">{symbol}</div>
            <p>{degrees}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

