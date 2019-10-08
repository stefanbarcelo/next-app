import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function Location({ location }) {
  const { city, slug, country, flag, price, degrees, symbol, image } = location;
  return (
    <Link to={`/cities/${slug}`}>
      <div className="location">
        <img src={image} alt="" />
        <div className="locationInfo">
          <h2>{city}</h2>
          <p>
            {country} <span className="flagEmoji">{flag}</span>
          </p>
          <p className="avgPrice">From ${price} per month</p>
          <div className="weather">
            <div className="weatherEmoji">{symbol}</div>
            <p>{degrees}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

Location.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
     slug: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     flag: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     degrees: PropTypes.string.isRequired,
     symbol: PropTypes.string.isRequired
  })
}