import React, { Component } from 'react'
import ApartmentList from "../components/ApartmentList";
import CityHero from "../components/CityHero";
import { Link } from 'react-router-dom'
import { LocationContext } from '../Context'


export default class City extends Component {
  static contextType = LocationContext;
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    }
  }
  render() {
    const { getCity, getApartments } = this.context;
    const selectedCity = getCity(this.state.slug);
    let selectedApartments = getApartments(this.state.slug);
    if (!selectedCity) {
      return (
        <div className="error">
          <h2>No such room was found</h2>
          <Link to='/' className="btn-primary">Back to home</Link>
        </div>
      )
    }
    selectedApartments = [...selectedApartments.apartments];
    return (
      <>
        <CityHero selectedCity={selectedCity} />
        <ApartmentList apartments={selectedApartments} />
      </>
    )
  }
}