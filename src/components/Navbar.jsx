import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import burger from "../assets/logo.png";
import AuthButtons from "./AuthButtons";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the 'active' class for mobile/desktop menu visibility
  };

  return (
    <div className="nav-bar">
      <Link to="/">
        <img className="img-burger" src={burger} alt="Logo" />
      </Link>
      <div className={`nav-content ${menuActive ? "active" : ""}`}>
        <ul>
          <li><Link to="/">MENU</Link></li>
          <li><Link to="/location">LOCATION</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/about-us">ABOUT-US</Link></li>
          <li><Link to="/dashboard">Checkout</Link></li>
          <AuthButtons />
        </ul>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </div>
  );
}

export default Navbar;
