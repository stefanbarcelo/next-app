import React from 'react'
import Apartment from '../images/apartment.png'

export default function ComplexList() {
  return (
    <section className="complexList">
      <div className="complexListCenter">
        <div className="apt">
          <div className="aptImage">
            <img src={Apartment} alt="" />
          </div>
          <div className="aptInfo">
            <div className="perksAndRating">
              <div className="aptPerk">Ciutat Vella</div>
              <div className="aptRating">
                <span className="rating">4.87</span> (204)
              </div>
            </div>
            <h3><span>MH Apartments</span> Central Barcelona</h3>
            <p className="aptDetails">4 Unit Types&ensp;|&ensp;30/18 Mbps WiFi&ensp;|&ensp;From 43 m²</p>

            <div className="aptPrice">
              <div className="price">from <span>$375</span>/Month</div>
              <div className="arrowContainer">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="apt">
          <div className="aptImage">
            <img src={Apartment} alt="" />
          </div>
          <div className="aptInfo">
            <div className="perksAndRating">
              <div className="aptPerk">Ciutat Vella</div>
              <div className="aptRating">
                <span className="rating">4.87</span> (204)
              </div>
            </div>
            <h3><span>MH Apartments</span> Central Barcelona</h3>
            <p className="aptDetails">4 Unit Types&ensp;|&ensp;30/18 Mbps WiFi&ensp;|&ensp;From 43 m²</p>

            <div className="aptPrice">
              <div className="price">from <span>$375</span>/Month</div>
              <div className="arrowContainer">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="apt">
          <div className="aptImage">
            <img src={Apartment} alt="" />
          </div>
          <div className="aptInfo">
            <div className="perksAndRating">
              <div className="aptPerk">Ciutat Vella</div>
              <div className="aptRating">
                <span className="rating">4.87</span> (204)
              </div>
            </div>
            <h3><span>MH Apartments</span> Central Barcelona</h3>
            <p className="aptDetails">4 Unit Types&ensp;|&ensp;30/18 Mbps WiFi&ensp;|&ensp;From 43 m²</p>

            <div className="aptPrice">
              <div className="price">from <span>$3275</span>/Month</div>
              <div className="arrowContainer">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="apt">
          <div className="aptImage">
            <img src={Apartment} alt="" />
          </div>
          <div className="aptInfo">
            <div className="perksAndRating">
              <div className="aptPerk">Ciutat Vella</div>
              <div className="aptRating">
                <span className="rating">4.87</span> (204)
              </div>
            </div>
            <h3><span>MH Apartments</span> Central Barcelona</h3>
            <p className="aptDetails">4 Unit Types&ensp;|&ensp;30/18 Mbps WiFi&ensp;|&ensp;From 43 m²</p>

            <div className="aptPrice">
              <div className="price">from <span>$375</span>/Month</div>
              <div className="arrowContainer">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
