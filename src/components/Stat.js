import React from 'react'

export default function Stat({amount, statName}) {
    return (
      <div className="stat">{amount} {statName}</div>
    );
}

