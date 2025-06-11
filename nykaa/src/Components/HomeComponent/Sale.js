import React, { useState, useEffect } from 'react';
import './Sale.css';

// Import sale images
import saletitle from '../HomeComponent/images/saletitle.avif';
import sale1 from '../HomeComponent/images/sale1.gif';
import sale2 from '../HomeComponent/images/sale2.gif';
import sale3 from '../HomeComponent/images/sale3.gif';

const Sale = () => {
  // State for countdown timers
  const [timer1, setTimer1] = useState(24 * 60 * 60); // 24 hours in seconds
  const [timer2, setTimer2] = useState(24 * 60 * 60); // 24 hours in seconds
  const [timer3, setTimer3] = useState(24 * 60 * 60); // 24 hours in seconds


  // Countdown logic
  useEffect(() => {
    const interval1 = setInterval(() => {
      setTimer1((prev) => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);

    const interval2 = setInterval(() => {
      setTimer2((prev) => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);

    const interval3 = setInterval(() => {
      setTimer3((prev) => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  // Format time in HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="sale-container">
       <img className="sale-img" src={saletitle} alt="saletitle" />
      
      <div className="sale-images">
        {/* Sale 1 Image */}
        <div className="sale-item">
          <img className="sale-img" src={sale1} alt="Sale 1" />
          <div className="timer-overlay">{`Sale ends in: ${formatTime(timer1)}`}</div>
        </div>

        {/* Sale 2 Image */}
        <div className="sale-item">
          <img className="sale-img" src={sale2} alt="Sale 2" />
          <div className="timer-overlay">{`Sale ends in: ${formatTime(timer2)}`}</div>
        </div>

         {/* Sale 3 Image */}
         <div className="sale-item">
          <img className="sale-img" src={sale3} alt="Sale 2" />
          <div className="timer-overlay">{`Sale ends in: ${formatTime(timer3)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Sale;


// Hooks and Logic Explanation:
// useState:

// Maintains the timer state for each image.
// Initialized with 24 * 60 * 60 (24 hours in seconds).
// useEffect:

// Sets up two intervals, one for each timer, to decrease the timer every second.
// Clears the intervals when the component unmounts to prevent memory leaks.
// Logic to Reset Timer:

// If the timer reaches 0, it resets back to 24 * 60 * 60.
// Formatting the Time:

// Converts the timer (in seconds) to HH:MM:SS format for display.
// Responsive Features:
// Used flex-wrap: wrap for the .sale-images container to ensure images stack vertically on smaller screens.
// Each image container uses flex: 1 1 calc(50% - 20px) to occupy 50% of the width on larger screens.

// Result:
// A dynamic countdown timer overlaid on each sale image.
// Images are side by side on larger screens and stack vertically on smaller screens.
// Countdown refreshes whenever the page is loaded or refreshed.