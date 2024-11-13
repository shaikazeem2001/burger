import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location-container">
      <h1 className="location-title">Visit Us!</h1>
      <p className="location-description">
        We're located in the heart of the city, serving the best burgers in town! Drop by to enjoy a warm meal and a friendly atmosphere.
      </p>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257485632455!2d144.95605431570734!3d-37.8166645797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e7a99a5fd%3A0xff084745da6aefc!2sBurgers%20House!5e0!3m2!1sen!2sus!4v1638973732222!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>📞 Phone: (123) 456-7890</p>
        <p>📍 Address: 123 Burger Lane, Food City</p>
        <p>🕒 Hours: Mon - Sun: 10:00 AM - 11:00 PM</p>
      </div>
    </div>
  );
}

export default Location;
