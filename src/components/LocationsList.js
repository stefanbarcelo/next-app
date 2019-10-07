import React, { Component } from 'react'
import Location from './Location'
import { LocationContext } from '../Context'

export default class FeaturedRooms extends Component {
  static contextType = LocationContext;
  render() {
    let cities = this.context.state.cities;
    cities = cities.map(city => {
      return <Location key={city.id} location={city} />
    })
    return (
      <section className="locationsContainer">
        <div className="locationsCenter">
          {cities}
        </div>
      </section>
    )
  }
}