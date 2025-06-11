// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useCart } from './CartContext';

// import './ProductDetails.css';

// const ProductDetails = () => {
//   const location = useLocation();
//   const { product } = location.state;
//   const { addToCart } = useCart();

//   return (
//     <div className="product-card">
//       {/* Image Section */}
//       <div className="product-image-container">
//         <img src={product.src} alt={product.name} className="product-image" />
//       </div>

//       {/* Details Section */}
//       <div className="product-details-container">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>
//           <strong>Price:</strong> ₹{product.price}
//         </p>
//         <p>
//           <strong>MRP:</strong> ₹{product.mrp}
//         </p>
//         <p>
//           <strong>Discount:</strong> {product.discount}%
//         </p>
//         <button
//           onClick={() => addToCart(product)}
//           className="add-to-cart-btn"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaStar, FaFacebookF, FaTwitter, FaInstagram, FaHeart, FaShoppingCart } from "react-icons/fa";

import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { addToCart } = useCart();



  return (
    <section className="product-detail-unique">
      <div className="product-container-unique">
        <div className="product-wrapper-unique">
          {/* Image Section */}
          <img
            alt={product.name}
            className="product-image-unique"
            src={product.src}
          />

          {/* Product Info Section */}
          <div className="product-info-unique">
            <h2 className="brand-name-unique">PODUCT</h2>
            <h4 className="product-title-unique">{product.name}</h4>

            {/* Ratings and Social Icons */}
            <div className="reviews-unique">
              <div className="stars-unique">
              
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < product.rating ? "star-filled-unique" : "star-unique"}
                  />
                ))}
              </div>
              <span className="review-count-unique">{product.ratingCount} Reviews</span>
              <div className="social-icons-unique">
                <FaFacebookF className="icon-unique" />
                <FaTwitter className="icon-unique" />
                <FaInstagram className="icon-unique" />
              </div>
            </div>

            <p className="description-unique">{product.description}</p>

            {/* Color and Size Options */}
            <div className="options-unique">
              <div className="colors-unique">
                <span>Color</span>
                <button className="color-button-unique"></button>
                <button className="color-button-dark-unique"></button>
                <button className="color-button-indigo-unique"></button>
              </div>
              <div className="sizes-unique">
                <span>Size</span>
                <select className="size-select-unique">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            {/* Actions Section */}
            <div className="actions-unique">
              <span className="product-price-unique">{product.price}</span>
              <span className="product-mrp-unique"> <del>{product.mrp}</del></span>
              <span className="product-discount-unique"> ({product.discount})</span>
              <hr />
             
              <button
                className="add-to-cart-unique"
                // onClick={() => addToCart(product) 
                // }
                onClick={() => {
                  addToCart(product); // Add product to cart
                  alert(`${product.name} has been added to your cart!`); // Trigger alert
                }}
              >
                <FaShoppingCart className="cart-icon-unique" /> Add to Cart
              </button>
              <button className="wishlist-unique">
                <FaHeart className="wishlist-icon-unique" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;




