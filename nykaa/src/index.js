import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './Components/ProductComponent/ScrollToTop';
import { CartProvider } from './Components/ProductComponent/CartContext';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app within the CartProvider and Router
root.render(
  <Router>
    <ScrollToTop />
    <CartProvider>
      <App />
      </CartProvider>
  </Router>
);
