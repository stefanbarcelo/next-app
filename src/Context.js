import React, { Component } from 'react'
import taipei from './images/taipei.jpg'
import barcelona from './images/barcelona.jpg'

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
        flag: '🇹🇼',
        price: 1900,
        degrees: '18˚C/60˚F',
        symbol: '🌧️',
        image: taipei,
      },
      {
        id: 2,
        city: "barcelona",
        slug: "barcelona",
        country: "spain",
        flag: '🇪🇸',
        price: 2441,
        degrees: '24˚C/74˚F',
        symbol: '☀️',
        image: barcelona,
      }
    ]
  }
  render() {
    return (
      <LocationContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </LocationContext.Provider>
    )
  }
}


export { LocationProvider, LocationContext };