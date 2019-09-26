import React from "react";
import Hero from "../components/Hero"
import Stat from "../components/Stat"

export default function Home() {
  return (
    <>
      <Hero>
        <div className="headerBox">
          <Stat amount={20} statName='Cities' />
          <Stat amount={159} statName='Listings' />
          <Stat amount={332} statName='Bookings Completed' />
          <h1>Lets Find Your <span className="highlight">Next</span> Stay.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tortor,
          scelerisque quis tempus ut, porttitor non diam. Sed semper congue dui posuere
          pretium. Nam facilisis pulvinar leo eu volutpat. Aenean fermentum bibendum
            quam, ut vehicula lectus scelerisque efficitur.</p>
        </div>
      </Hero>
    </>
  );
}
