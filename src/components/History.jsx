import React from 'react';
import "./History.css";
import storyburger from '../assets/burger-story.jpg';

function History() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <h3>___Since 2024</h3>
          <h5>Whether it’s our hand-pressed, never frozen beef patties, scratch-made onion rings or our homemade chili, if it’s on a Fatburger, you know it’s the best. It’s good to be cheesy.</h5>
          <button>OUR STORY</button>
        </div>
        <img id='story-burger' src={storyburger} alt="Story Burger" />
      </div>
    </div>
  );
}

export default History;
