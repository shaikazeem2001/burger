// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import History from "./components/History";
import Order from "./components/Order";
import Location from "./components/Location";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Payment from "./components/Payment";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext"; // Correct path to CartContext

function App() {
  return (
  <AuthProvider>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Main /><History /><Menu /></>} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
