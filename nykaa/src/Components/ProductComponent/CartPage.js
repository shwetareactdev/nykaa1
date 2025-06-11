import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

import './CartPage.css'; // Optional for styling

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Function to parse the price string to a number
  // const parsePrice = (price) => {
  //   return parseFloat(price.replace('₹', '').replace(',', ''));
  // };

  // Function to parse the price string or number to a float
  const parsePrice = (price) => {
    return parseFloat(String(price).replace('₹', '').replace(',', ''));
  };


  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + parsePrice(item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.src} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h5>{item.name}</h5>
                    <p>Price: {item.price}</p>
                    <p>
                      Quantity:
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                        disabled={item.quantity <= 1} // Prevent negative quantity
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              {/* <h3>Total: ₹{calculateTotal().toFixed(2)}</h3> */}
            </>
          )}
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Price Details</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Price ({cart.length} items)</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery Charges</span>
                <span className="text-success">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total Amount</strong>
                <strong>₹{calculateTotal().toFixed(2)}</strong>
              </div>
              <button className="btn pink btn-block mt-3" >Proceed</button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-primary btn-block mt-3"
                onClick={() => navigate('/BigDeal')}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
