import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Add more icons as needed
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-column">
            <h2 className="footer-title">SHOP</h2>
            <nav className="footer-nav">
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Skincare</a></li>
              <li><a href="#">Haircare</a></li>
              <li><a href="#">Fragrance</a></li>
              <li><a href="#">Makeup</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">CUSTOMER SERVICE</h2>
            <nav className="footer-nav">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Return & Exchange</a></li>
              <li><a href="#">Shipping Info</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">COMPANY</h2>
            <nav className="footer-nav">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">CONNECT</h2>
            <nav className="footer-nav">
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Social Media</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">FOLLOW US</h2>
            <div className="footer-nav">
              <a href="#" className="footer-icon"><FaFacebookF /></a>
              <a href="#" className="footer-icon"><FaTwitter /></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider">
        <div className="container footer-bottom">
          <div className="footer-input-group">
            <div className="footer-input-container">
              <label htmlFor="newsletter">Sign up for Newsletter</label>
              <input type="email" id="newsletter" name="newsletter" placeholder="Enter your email" />
            </div>
            <button className="footer-button">Subscribe</button>
          </div>
          <p className="footer-description">
            Receive the latest updates, special offers, and beauty tips directly in your inbox.
          </p>
        </div>
      </div>

      <div className="footer-info">
        <div className="container footer-info-container">
        <p>{process.env.REACT_APP_FOOTER_TEXT}</p>
        <p>© 2025 Nykaa. Shweta Vishnu Kadam 9561094572.</p>
          <span>Beauty and Wellness at Your Fingertips</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
