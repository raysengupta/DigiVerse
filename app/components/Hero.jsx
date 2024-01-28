// Import necessary modules
'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';

// Define the Hero component
const Hero = () => {
  const handleButtonClick = () => {
    // Redirect to the specified link
    window.location.href = "https://calendly.com/chandreyeesengupta";
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Spline component as a fixed background */}
      <Spline
        className="absolute top-1/5 w-full z-0"
        scene="https://prod.spline.design/YD210Z849NSqbr5q/scene.splinecode"
      />

      {/* Content on top of the spline */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
        <h2 className="text-5xl font-semibold">The last digital agency you'll ever need</h2>
      </div>

      <div className="absolute bottom-3 lg:bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
        {/* Update the button to call the handleButtonClick function */}
        <a href="https://calendly.com/chandreyeesengupta" target="_blank" rel="noopener noreferrer">
          <button onClick={handleButtonClick} className="bg-white rounded-full px-6 py-3 text-black">Book a Call</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
