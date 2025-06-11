import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import images
import Home1 from '../HomeComponent/images/Home1.gif';
import Home2 from '../HomeComponent/images/Home2.avif';
import Home3 from '../HomeComponent/images/Home3.gif';

const MyCarousel = () => {
  // Array of carousel images
  const carouselImages = [
    { src: Home2, alt: 'Home2 Image' },
    { src: Home3, alt: 'Home3 Image' },
  ];

  return (
    <div className="my-carousel-wrapper">
      {/* Display Home1 Image */}
      <div className="home1-container">
        <img className="home1-img" src={Home1} alt="Nykaa Pink Friday" />
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <Carousel>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block carousel-img"
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
