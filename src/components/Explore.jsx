// src/components/Explore.jsx
import React from "react";
import MenuItem from "./MenuItem";
import CartSidebar from "./CartSidebar";
import chickbur from "../assets/chicken-bur.jpg";
import bur from "../assets/about-burger.jpg";
import cheesebur from "../assets/cheese-bur.jpg";
import vegbur from "../assets/veg-bur.jpg";
import coke from "../assets/coke.jpg";
import Sprite from "../assets/sprite.jpg";
import fries from "../assets/fries-menu.jpg";
import milkshake from "../assets/milkshake.jpg";

import './Explore.css';

function Explore() {
  const menuData = [
    { id: 1, name: "Classic Burger", price: 5.99, image: bur },
    { id: 2, name: "Cheese Burger", price: 6.99, image: cheesebur },
    { id: 3, name: "Veggie Burger", price: 5.49, image: vegbur },
    { id: 4, name: "Chicken Burger", price: 7.99, image: chickbur },
    { id: 5, name: "Fries",          price: 2.99, image: fries },
    { id: 6, name: "Coke",           price: 1.99, image: coke },
    { id: 7, name: "Sprite", price: 1.99, image: Sprite },
    { id: 8, name: "Chocolate Milkshake", price: 3.99, image: milkshake }
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuData.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <CartSidebar /> {/* Sidebar will be visible here */}
    </div>
  );
}

export default Explore;
