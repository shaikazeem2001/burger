import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with Fatburger!</h1>
      <p className="contact-subtitle">We'd love to hear from you! Fill out the form below or reach out on social media.</p>

      <div className="contact-form-section">
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Write your message here..." required></textarea>
          </label>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>📞 Phone: +1 (555) 123-4567</p>
        <p>📍 Address: 123 Burger Lane, Burger City, BK 54321</p>
      </div>

      <div className="social-media">
        <h3>Follow Us!</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
