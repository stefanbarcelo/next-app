import React from 'react'
import ApartmentCard from "./ApartmentCard";
import { Link } from "react-router-dom";

export default function ApartmentList({ apartments }) {
  apartments = apartments.map(item => {
    return <ApartmentCard key={item.id} apartment={item} />
  })
  
  if (apartments.length === 0) {
    return (
      <div className="errText">
        <div className="line"></div>
        <h1>This is awkward <span role="img" aria-label="awkwardEmoji">😅 </span>
        It seems that there are <span>no rooms available</span> right now.</h1>
        <Link to="/" className="returnLink">Click me to return to the homepage.</Link>
      </div>
    )
  }
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


