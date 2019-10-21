import React from 'react'

export default function CityAvg({ emoji, degrees, wifi, price }) {
  return (
    <>
      <section className="cityAverages">
        <div className="cityAvg">
          <div className="metricInside">
            <div className="metricEmoji">
              {emoji}
            </div>
            <div className="metric">
              <p className="metricValue">
                <span role="img" aria-label="weather">{degrees}</span>
              </p>
              <p className="metricName">temperature</p>
            </div>
          </div>
        </div>
        <div className="cityAvg">
          <div className="metricInside">
            <div className="metricEmoji">
              <span role="img" aria-label="computer">💻</span>
            </div>
            <div className="metric">
              <p className="metricValue">{wifi} Mbps</p>
              <p className="metricName">AVG. WIFI SPEED</p>
            </div>
          </div>
        </div>
        <div className="cityAvg">
          <div className="metricInside">
            <div className="metricEmoji">
              <span role="img" aria-label="house">🏠</span>
            </div>
            <div className="metric">
              <p className="metricValue">${price} per month</p>
              <p className="metricName">AVG. RENT COST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}