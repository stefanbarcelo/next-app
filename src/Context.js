import React, { Component } from 'react'
import items from "./data"

// first we will make a new context
const LocationContext = React.createContext();

// create a provider class with the state
class LocationProvider extends Component {
  state = {
    cities: []
  };
  componentDidMount() {
    let cities = this.formatData(items);
    this.setState({
      cities
    })
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.id;
      let images = item.images;
      let city = { ...item, images, id }
      return city;
    })
    return tempItems;
  }
  getCity = slug => {
    // using a spread operator to grab this instances state but not affect it
    let tempCities = [...this.state.cities];
    const cities = tempCities.find(city => city.slug === slug);
    return cities;
  }

  render() {
    return (
      <LocationContext.Provider
        value={{
          state: this.state,
          getCity: this.getCity
        }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}


export { LocationProvider, LocationContext };