import React from 'react'
import PerkTag from "../components/PerkTag";
import CityAvg from "../components/CityAvg";

export default function CityHero({ selectedCity }) {
  let { city, country, flag, description, price, degrees, symbol, hero, perks } = selectedCity;
  return (
    <div className="cityHero">
      <div className="cityImage">
        <img src={hero} alt="" />
      </div>
      <div className="cityInfoCon">
        <div className="cityInfo">
          <h2>Stays in <span>{city}</span> for monthly rental</h2>
          <p className="nameAndEmoji">
            {city}, {country} <span role="img" aria-label="flag">{flag}</span>
          </p>
          <div>
            {perks = perks.map(perk => {
              return <PerkTag key={perk} perk={perk} />
            })}
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

