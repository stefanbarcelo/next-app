import React from 'react'
import barcelonaHero from '../images/barcelonaHero@2x.png'
import Perk from "../components/Perk"

export default function CityHero() {
  return (
    <div className="cityHero">
      <div className="cityImage">
        <img src={barcelonaHero} alt="" />
      </div>
      <div className="cityInfoCon">
        <div className="cityInfo">
          <h3>Live in a Mediterranean Styled Apartment.</h3>
          <p className="nameAndEmoji">Barcelona, Spain <span>🇪🇸</span></p>
          <div>
            <Perk />
          </div>
          <p>Barcelona, the unbelievable city at the Balearic Sea, highly favored, and a place most digital nomad or world traveler would like to visit for an extended period of time. While serviced apartments are still a relatively uncommon sight in the City, numerous are in the planning along with co-working spaces and 24-hour coffee shops.</p>
        </div>
      </div>
    </div>
  )
}
