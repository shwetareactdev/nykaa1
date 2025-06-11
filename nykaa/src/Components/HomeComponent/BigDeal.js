import React, { useState } from 'react';
import './BigDeal.css'; // Add your custom styles here
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import catagorytitle from '../HomeComponent/images/catagorytitle.avif';
import deal1 from '../HomeComponent/images/deal1.avif';
import deal2 from '../HomeComponent/images/deal2.avif';
import deal3 from '../HomeComponent/images/deal3.avif';
import deal4 from '../HomeComponent/images/deal4.avif';

const BigDeal = () => {
  // List of deal images and links
  const deals = [
    { id: 1, src: deal1, alt: 'Deal 1', link: '/LorealParis' },  // Corrected link
    { id: 2, src: deal2, alt: 'Deal 2', link: '/lakme' },     // Example link
    { id: 3, src: deal3, alt: 'Deal 3', link: '/Nykaa' },     // Example link
    { id: 4, src: deal4, alt: 'Deal 4', link: '/Mybellen' },     // Example link
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of images
  const handleNext = () => {
    if (currentIndex < deals.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous set of images
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="big-deal-container" style={{ backgroundColor: '#f8e8ea', padding: '20px' }}>
      {/* Title Section */}
      <div className="title-section mb-4 text-center">
        <img className="sale-img" src={catagorytitle} alt="Sale Title" />
      </div>

      {/* Deals Section */}
      <div className="d-flex justify-content-center align-items-center position-relative">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            &#8592;
          </button>
        )}

        {/* Image Container */}
        <div className="deals-row d-flex justify-content-center">
          {/* Display only 3 images at a time */}
          {deals.slice(currentIndex, currentIndex + 3).map((deal) => (
            <div key={deal.id} className="deal-card mx-2">
              <Link to={deal.link}> {/* Use Link for routing in React Router */}
                <img src={deal.src} alt={deal.alt} className="deal-image" />
              </Link>
            </div>
          ))}
        </div>

        {/* Next Button */}
        {currentIndex < deals.length - 3 && (
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
};

export default BigDeal;
