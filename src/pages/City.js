import React, { Component } from 'react'
import PerkTag from "../components/PerkTag";
import CityAvg from "../components/CityAvg";
import CityHero from "../components/CityHero";
import { Link } from 'react-router-dom'
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
    const selectedCity = getCity(this.state.slug);
    console.log(selectedCity);
    if (!selectedCity) {
      return (
        <div className="error">
          <h1>No such room was found</h1>
          <Link to='/' className="btn-primary">Back to home</Link>
        </div>
      )
    }
    const { city, country, flag, description, price, degrees, symbol, hero, perks } = selectedCity;
    
    return (
      <>
        <CityHero
        city={city}
        country={country}
        flag={flag}
        description={description}
        price={price}
        degrees={degrees}
        symbol={symbol}
        hero={hero}
        />
        <div className="divider">
          <div className="line"></div>
          <h1>Available Stays</h1>
        </div>
      </>
    )
  }
}