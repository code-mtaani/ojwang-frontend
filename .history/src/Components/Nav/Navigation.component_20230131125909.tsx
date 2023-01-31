import React from "react";
import {Link} from "re"
import './nav.css'

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>BRAND</h1>
      </div>

      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-justify"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </label>

        <ul className="list">
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Sign In</a></li>
          <li> <a href="#">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
