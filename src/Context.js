import React, { Component } from 'react'
import items from "./data"
import allApartments from "./apartments"

// first we will make a new context
const LocationContext = React.createContext();

// create a provider class with the state
class LocationProvider extends Component {
  state = {
    cities: [],
    apartments: []
  };
  componentDidMount() {
    let cities = this.formatData(items);
    let apartments = this.formatData(allApartments);
    this.setState({
      cities,
      apartments,
    })
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.slug;
      let newItems = { ...item, id }
      return newItems;
    })
    return tempItems;
  }
  getCity = slug => {
    let tempCities = [...this.state.cities];
    const cities = tempCities.find(city => city.slug === slug);
    return cities;
  }
  getApartments = slug => {
    let tempApartments = [...this.state.apartments];
    let apartments = tempApartments.find(apartment => apartment.slug === slug);
    return apartments;
  }
  render() {
    return (
      <LocationContext.Provider
        value={{
          state: this.state,
          getCity: this.getCity,
          getApartments: this.getApartments,
        }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}

const LocationConsumer = LocationContext.Consumer;
export function withLocationConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <LocationConsumer>
        {value => <Component {...props} context={value} />}
      </LocationConsumer>
    )
  }
}

export { LocationProvider, LocationContext, LocationConsumer };