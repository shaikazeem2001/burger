// src/components/Payment.jsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // Custom component we'll create below

// Load your publishable key
const stripePromise = loadStripe('your-publishable-key');

function Payment() {
  return (
    <div>
      <h1>Payment Page</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
