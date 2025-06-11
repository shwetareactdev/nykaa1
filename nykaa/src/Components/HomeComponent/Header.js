import React from 'react';
import { FaGift, FaQuestionCircle, FaStore } from 'react-icons/fa';
import './Header.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="blinking-text">Nykaa's Pink Friday Sale Is Now Live!</div>
      <div className="right-section">
        <a href="https://www.nykaa.com/installApp" target="_blank" rel="noopener noreferrer" className="title-with-icon">
          <FaStore className="icon" /> Get App
        </a>
        <span className="divider">|</span>
        <a href="https://www.nykaa.com/giftcard/list" target="_blank" rel="noopener noreferrer" className="title-with-icon">
          <FaGift className="icon" /> Gift Card
        </a>
        <span className="divider">|</span>
        <a href="https://www.nykaa.com/help-center?dl_type=help_center" target="_blank" rel="noopener noreferrer" className="title-with-icon">
          <FaQuestionCircle className="icon" /> Help
        </a>
        <span className="divider">|</span>
        <a href="https://www.nykaa.com/stores-n-events-desktop" target="_blank" rel="noopener noreferrer" className="title-with-icon">
          Stores & Events
        </a>
      </div>
    </div>
    
  );
};

export default Header;
