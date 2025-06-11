import React from 'react'
import { Routes, Route } from 'react-router-dom'; // Import Router components
import Home from './Components/Home';
import Header from './Components/HomeComponent/Header';
import Navbar from './Components/HomeComponent/Navbar';
import LorealParis from './Components/ProductComponent/LorealParis'; // Import LorealParis component
import BigDeal from './Components/HomeComponent/BigDeal';
import Lakme from './Components/ProductComponent/Lakme';
import Nykaa from './Components/ProductComponent/Nykaa';
import Maybellen from './Components/ProductComponent/Mybellen';
import ProductDetails from './Components/ProductComponent/ProductDetails';
import CartPage from './Components/ProductComponent/CartPage';
import Footer from './Components/HomeComponent/Footer';


function Layout() {
  return (
    <div>
     <Header />
    <Navbar />
    <br/><br/>
    {/* Set up Routes */}
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page route */}
      <Route path="BigDeal" element={<BigDeal />} /> {/* BigDeal route */}
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/lorealparis" element={<LorealParis />} /> {/* LorealParis component route */}
      <Route path='/lakme' element={<Lakme/>} />
      <Route path='/Nykaa' element={<Nykaa/>}></Route>
      <Route path='/Mybellen' element={<Maybellen/>}></Route>
      <Route path='/CartPage' element={<CartPage/>}></Route>
      {/* Add other routes as needed */}
    </Routes>
  
    <Footer/>
    </div>
  )
}

export default Layout