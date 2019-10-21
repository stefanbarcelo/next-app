import React from 'react'
import PerkTag from "../components/PerkTag";
import CityAvg from "../components/CityAvg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function CityHero({ selectedCity }) {
  let { city, country, flag, description, price, degrees, symbol, hero, perks, wifiSpeed } = selectedCity;
  return (
    <div className="cityHero">
      <div className="cityImage">
        <div className="marqueeText">
          <h1>
          {city}, {country} 
          </h1>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="cityInfoCon">
        <div className="cityInfo">
          <h2>Stays in <span>{city}</span> for monthly rental</h2>
          <p className="nameAndEmoji">
            {city}, {country} <span role="img" aria-label="flag">{flag}</span>
          </p>
          {/* <div>
            {perks = perks.map(perk => {
              return <PerkTag key={perk} perk={perk} />
            })}
          </div> */}
          <p className="cityDescription">
            {description}
          </p>
          
          <CityAvg emoji={symbol} degrees={degrees} price={price} wifi={wifiSpeed}></CityAvg>
          <AnchorLink href="#apartmentList">
            <div className="coverArrowContainer">
              <div className="coverArrow"></div>
            </div>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

