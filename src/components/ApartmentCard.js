import React from 'react'

export default function ApartmentCard({ apartment }) {
  const { photo, district, reviews, complex, city, units, downloadSpeed, uploadSpeed, minMeters, minPrice } = apartment;
  return (
    <div className="apt">
      <div className="aptImage">
        <img src={photo} alt="" />
      </div>
      <div className="aptInfo">
        <div className="perksAndRating">
          <div className="aptPerk">{district}</div>
          <div className="aptRating">
            <span className="rating">{reviews}</span>
          </div>
        </div>
        <h3><span>{complex}</span> {city}</h3>
        <p className="aptDetails">{units} Unit Types&ensp;|&ensp;{downloadSpeed}/{uploadSpeed} Mbps WiFi&ensp;|&ensp;From {minMeters} m²</p>

        <div className="aptPrice">
          <div className="price">from <span>${minPrice}</span>/Month</div>
          <div className="arrowContainer">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}