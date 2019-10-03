import React from 'react'
import PerkTag from "../components/PerkTag";
import CityAvg from "../components/CityAvg";

export default function CityHero({ hero, city, country, flag, description, symbol, degrees, price }) {
  return (
    <div className="cityHero">
      <div className="cityImage">
        <img src={hero} alt="" />
      </div>
      <div className="cityInfoCon">
        <div className="cityInfo">
          <h1>Stays in <span>{city}</span> for monthly rental</h1>
          <p className="nameAndEmoji">
            {city}, {country} <span role="img" aria-label="flag">{flag}</span>
          </p>
          <div>
            <PerkTag perk="Warm Climate" />
            <PerkTag perk="Fully Furnished" />
            <PerkTag perk="No Long Leases" />
          </div>
          <p className="cityDescription">
            {description}
          </p>
          <CityAvg emoji={symbol} degrees={degrees} wifi="37/17" price={price} />
        </div>
      </div>
    </div>
  )
}

