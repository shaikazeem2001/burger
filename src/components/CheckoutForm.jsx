// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Complete Your Payment</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="card-icon-container">
        </div>
        <div className="form-group">
          <label htmlFor="card-details" className="form-label">
            Card Details
          </label>
          <CardElement id="card-details" className="card-element" />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={!stripe || processing || succeeded} className="pay-button">
          {processing ? 'Processing…' : 'Pay Now'}
        </button>
        {succeeded && <div className="success-message">Payment succeeded! Thank you for your order.</div>}
      </form>
    </div>
  );
}

export default CheckoutForm;
