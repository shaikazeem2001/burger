// src/components/CartSidebar.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import "./CartSidebar.css";
import { Link } from "react-router-dom";
function CartSidebar() {
  const { cart, removeFromCart, isSidebarOpen, toggleSidebar } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={`cart-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <span>Qty: {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
          <Link to='/payment'> <button className="payment">Payment</button></Link>
          </div>
      )}
    </div>
  );
}

export default CartSidebar;
