import React, { Component } from 'react';
import ApartmentCard from "./ApartmentCard";
import { LocationContext } from '../Context';
import { Link } from "react-router-dom";

export default class ApartmentList extends Component {
  static contextType = LocationContext;
  render() {
    let apartments = this.context.state.apartments;
    if (apartments.length === 0) {
      return (
        <div className="errText">
          <div className="line"></div>
          <h1>This is awkward <span role="img" aria-label="awkwardEmoji">😅</span> It seems that there are <span>no rooms available</span> right now.</h1>
          <Link to="/">Click me to return to the homepage.</Link>
        </div>
      )
    }
    console.log(apartments.length)
    apartments = apartments.map(item => {
      return <ApartmentCard key={item.id} apartment={item} />
    })
    return (
      <>
        <div className="divider">
          <div className="line"></div>
          <h2>Find the Right Apartment For You</h2>
          <p>Over 200 listings to choose from.</p>
        </div>
        <section className="apartmentList">
          <div className="apartmentListCenter">
            {apartments}
          </div>
        </section>
      </>
    )
  }
}

