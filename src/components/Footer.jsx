import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
    
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Menu</h3>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/food">Food</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/allergens">Allergens</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Locations</h3>
          <ul>
            <li><a href="/locations">Locations</a></li>
            <li><a href="/catering">Catering & Events</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/our-company">Our Company</a></li>
            <li><a href="/franchise">Franchise</a></li>
            <li><a href="/join-our-team">Join Our Team</a></li>
            <li><a href="/join-the-fat-club">Join The Fat Club</a></li>
            <li><a href="/fundraising">Fundraising</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/merchandise">Merchandise</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
