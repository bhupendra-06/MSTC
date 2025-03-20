import React from "react";
import "./Icons.css";
const Hamburger = () => {
  return (
    <div className="hamburger2 p-1">
      <label htmlFor="hamburger2-input">
        <input type="checkbox" id="hamburger2-input" />
        <svg viewBox="0 0 60 40">
          <g
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className="line1" d="M10,10 L50,10 Z"></path>
            <path className="line2" d="M10,20 L50,20 Z"></path>
            <path className="line3" d="M10,30 L50,30 Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Hamburger;