import React from 'react'

export default function Perk({ perk }) {
  return (
    <div className="perkTag">
      <div className="perkTagContent">
        <span className="checkMark">
          <svg xmlns="http://www.w3.org/2000/svg" width="12.604" height="9.377" viewBox="0 0 12.604 9.377">
            <path id="check" d="M2549.034,267.34l3.935,3.935,7.256-7.256" transform="translate(-2548.327 -263.312)" fill="none" stroke="#16b722" stroke-width="2" />
          </svg>
        </span>
        <div className="perkTagText">Hello!</div>
      </div>
    </div>
  )
}
