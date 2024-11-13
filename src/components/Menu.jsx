
//src/components/Main.jsx
import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div id='menu' className="menu-container">
      <h1 className="menu-title">Fatburger Menu</h1>

      <div className="menu-section">
        <h2 className="section-title">Burgers</h2>
        <div className="menu-item">
          <h3 className="item-name">Original Fatburger</h3>
          <p className="item-description">A classic burger with all the fixings.</p>
          <span className="item-price">$8.99</span>
        </div>
        <div className="menu-item">
          <h3 className="item-name">Cheese Fatburger</h3>
          <p className="item-description">Classic burger with melted cheddar cheese.</p>
          <span className="item-price">$9.49</span>
        </div>
        <div className="menu-item">
          <h3 className="item-name">Bacon Fatburger</h3>
          <p className="item-description">Burger topped with crispy bacon strips.</p>
          <span className="item-price">$10.49</span>
        </div>
      </div>

      <div className="menu-section">
        <h2 className="section-title">Sides</h2>
        <div className="menu-item">
          <h3 className="item-name">Fat Fries</h3>
          <p className="item-description">Crispy, golden fries made to perfection.</p>
          <span className="item-price">$3.49</span>
        </div>
        <div className="menu-item">
          <h3 className="item-name">Onion Rings</h3>
          <p className="item-description">Crispy, golden onion rings.</p>
          <span className="item-price">$3.99</span>
        </div>
      </div>

      <div className="menu-section">
        <h2 className="section-title">Drinks</h2>
        <div className="menu-item">
          <h3 className="item-name">Soda</h3>
          <p className="item-description">Refreshing soda, available in a variety of flavors.</p>
          <span className="item-price">$2.49</span>
        </div>
        <div className="menu-item">
          <h3 className="item-name">Milkshake</h3>
          <p className="item-description">Creamy milkshake available in chocolate, vanilla, or strawberry.</p>
          <span className="item-price">$5.99</span>
        </div>
      </div>
    
   
      <Link to='/explore' className="explore-btn">
        <button>Explore Menu</button>
      </Link>
    </div>
  );
};

export default Menu;
