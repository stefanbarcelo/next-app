import React, { Component } from 'react'
import taipei from './images/taipei.jpg'
import barcelona from './images/barcelona.jpg'
import kosamui from "./images/kosamui.jpg";
import prague from "./images/prague.jpg";
import rio from "./images/rio.jpg";
import canggu from "./images/canggu.jpg";

// first we will make a new context
const LocationContext = React.createContext();

// create a provider class with the state
class LocationProvider extends Component {
  state = {
    cities: [
      {
        id: 1,
        city: "taipei",
        slug: "taipei",
        country: "taiwan",
        flag: "🇹🇼",
        price: 1940,
        degrees: "18˚C/60˚F",
        symbol: "🌧️",
        image: taipei
      },
      {
        id: 2,
        city: "barcelona",
        slug: "barcelona",
        country: "spain",
        flag: "🇪🇸",
        price: 2441,
        degrees: "24˚C/74˚F",
        symbol: "☀️",
        image: barcelona
      },
      {
        id: 3,
        city: "ko samui",
        slug: "ko-samui",
        country: "thailand",
        flag: "🇹🇭",
        price: 786,
        degrees: "24˚C/76˚F",
        symbol: "☀️",
        image: kosamui
      },
      {
        id: 4,
        city: "prague",
        slug: "prague",
        country: "czech republic",
        flag: "🇨🇿",
        price: 1242,
        degrees: "12˚C/54˚F",
        symbol: "⛅",
        image: prague
      },
      {
        id: 5,
        city: "rio de janeiro",
        slug: "rio-de-janeiro",
        country: "brazil",
        flag: "🇧🇷",
        price: 800,
        degrees: "22˚C/71˚F",
        symbol: "⛅",
        image: rio
      },
      {
        id: 6,
        city: "canggu",
        slug: "canggu",
        country: "bali",
        flag: "🇮🇩",
        price: 594,
        degrees: "24˚C/75˚F",
        symbol: "☀️",
        image: canggu
      }
    ]
  };
  render() {
    return (
      <LocationContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}


export { LocationProvider, LocationContext };