import React, { Component } from 'react'
import barcelonaHero from "../images/barcelonaHero.png";
import PerkTag from "../components/PerkTag";
import CityAvg from "../components/CityAvg";
import { LocationContext } from '../Context'


export default class City extends Component {
  constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
		}
  }
  static contextType = LocationContext;
  render() {
    const { getCity } = this.context;
    const city = getCity(this.state.slug);
    console.log(city);
    return (
      <>
        <div className="cityHero">
          <div className="cityImage">
            <img src={barcelonaHero} alt="" />
          </div>
          <div className="cityInfoCon">
            <div className="cityInfo">
              <h3>Live in a Mediterranean Styled Apartment.</h3>
              <p className="nameAndEmoji">
                Barcelona, Spain <span role="img" aria-label="flag">🇪🇸</span>
              </p>
              <div>
                <PerkTag perk="Warm Climate" />
                <PerkTag perk="Fully Furnished" />
                <PerkTag perk="No Long Leases" />
              </div>
              <p className="cityDescription">
                Barcelona, the unbelievable city at the Balearic Sea, highly
                favored, and a place most digital nomad or world traveler would like
                to visit for an extended period of time. While serviced apartments
                are still a relatively uncommon sight in the City, numerous are in
                the planning along with co-working spaces and 24-hour coffee shops.
          </p>
              <CityAvg emoji="☀️" degrees="24˚C/74˚F" wifi="37/17" price="2649" />
            </div>
          </div>
        </div>
      </>
    )
  }
}