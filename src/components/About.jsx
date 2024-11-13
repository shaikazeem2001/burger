import React from "react";
import "./About.css";
import aboutburger from '../assets/about-burger.jpg'
function About() {
  return (
    <div className="about-container">
      {/* First Block */}
      <div className="story-block">
        <div className="story-text">
          <h2>After 70 years, it’s still good to be Fat.</h2>
          <p>
            Back in 1947, the incomparable Lovie Yancey started the business
            with her husband: a three-stool hamburger stand called Mr.
            Fatburger. But in 1952, they split. Ever persistent, she dropped
            “Mr.” from the namesake, and Fatburger became her own. She worked
            18-hour days and made Fatburger into an icon; with celebrities
            frequenting The Last Great Hamburger Stand, we started our journey
            to becoming a household name.
          </p>
        </div>
        <div className="story-video">
          <iframe
            src="https://www.youtube.com/embed/I4OJr52epEM?autoplay=1&loop=1&mute=1&playlist=I4OJr52epEM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Story Video"
          ></iframe>
        </div>
      </div>

      {/* Second Block */}
      <div className="story-block reverse">
        <div className="story-image">
          <img
            src={aboutburger}
            alt="Fatburger Stand"
          />
        </div>
        <div className="story-text">
          <h2>The Last Great Hamburger Stand</h2>
          <p>
            A lot has changed since the ’50s, but Fatburger remained the same.
            It’s the place where customers of all creeds come together to enjoy
            that same great-tasting burger, made with love from Lovie Yancey’s
            timeless recipe: a big fat patty that, when doubled, tripled, or
            quadrupled, makes for a Fatburger. Plus, our stores are clean and
            bright with a distinctly nostalgic vibe, and we’re always playing
            great music. It’s what Lovie Yancey would’ve wanted.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
