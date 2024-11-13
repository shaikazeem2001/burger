// src/components/MenuItem.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import './MenuItem.css'
function MenuItem({ item }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      <p className="item-price">${item.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button className="dec-btn" onClick={handleDecrement} disabled={quantity <= 1}>-</button>
        <span className="quan">{quantity}</span>
        <button className="inc-btn" onClick={handleIncrement}>+</button>
      </div> <br />
      <button onClick={handleAddToCart} className="add-cart">Add to Cart</button>
    </div>
  );
}

export default MenuItem;
