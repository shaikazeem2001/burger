// src/components/Dashboard.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import './Dashboard.css';
import { Link } from "react-router-dom";
function Dashboard() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="dashboard">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-name">  {item.name}</span>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <span className="item-quan">Quantity:{item.quantity}</span>
              <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
         <Link to='/payment'> <button className="payment">Payment</button></Link>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
