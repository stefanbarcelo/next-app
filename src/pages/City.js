import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LocationContext } from '../Context'
import CityHero from '../components/CityHero'

export default class City extends Component {
  render() {
    return (
      <>
        <CityHero/>
      </>
    )
  }
}