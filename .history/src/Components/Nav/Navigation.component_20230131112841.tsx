import React from "react";
import './nav.css'

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>BRAND</h1>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor=""></label>
      </div>
    </div>
  );
};

export default Navigation;