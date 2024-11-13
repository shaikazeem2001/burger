import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Main.css";
import realburger from "../assets/real-burger.jpg";

function Main() {
  return (
    <div>
      <div className="positioning-container">
        <h1 className="bur-h1">Burgerrrrrrrrrrrrrrrrrrrrrrrrrrr...</h1>
        <img className="realburger" src={realburger} alt="Real Burger" />
      </div>

     
      <Link to="/order" className="order">
        Order Now
      </Link>


      <h1 className="h1-tag">Grab a Cheesy Burger..🍔</h1>
    </div>
  );
}

export default Main;
