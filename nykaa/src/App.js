// import './App.css';
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import Header from './Components/HomeComponent/Header';
// import Navbar from './Components/HomeComponent/Navbar';
// import LorealParis from './Components/ProductComponent/LorealParis';
// import BigDeal from './Components/HomeComponent/BigDeal';
// import Lakme from './Components/ProductComponent/Lakme';
// import Nykaa from './Components/ProductComponent/Nykaa';
// import Maybellen from './Components/ProductComponent/Mybellen';
// import ProductDetails from './Components/ProductComponent/ProductDetails';
// import CartPage from './Components/ProductComponent/CartPage';
// import Footer from './Components/HomeComponent/Footer';


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Navbar  />
//       <br />
//       <br />
//       {/* Set up Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="BigDeal" element={<BigDeal />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/lorealparis" element={<LorealParis />} />
//         <Route path="/lakme" element={<Lakme />} />
//         <Route path="/Nykaa" element={<Nykaa />} />
//         <Route path="/Mybellen" element={<Maybellen />} />
//         <Route path="/CartPage" element={<CartPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;




import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './Components/Home';
import Header from './Components/HomeComponent/Header';
import Navbar from './Components/HomeComponent/Navbar';
import LorealParis from './Components/ProductComponent/LorealParis';
import BigDeal from './Components/HomeComponent/BigDeal';
import Lakme from './Components/ProductComponent/Lakme';
import Nykaa from './Components/ProductComponent/Nykaa';
import Maybellen from './Components/ProductComponent/Mybellen';
import ProductDetails from './Components/ProductComponent/ProductDetails';
import CartPage from './Components/ProductComponent/CartPage';
import Footer from './Components/HomeComponent/Footer';
import Login from './Form/Login';
import Register from './Form/Register';
import Feedback from './Form/Feedback';
import AdminPanel from './Form/AdminPanel';
import BeautyAdvice from './Components/HomeComponent/BeautyAdvice';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Navbar />
        <br />
        <br />
        {/* Set up Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BigDeal" element={<BigDeal />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/lorealparis" element={<LorealParis />} />
          <Route path="/lakme" element={<Lakme />} />
          <Route path="/Nykaa" element={<Nykaa />} />
          <Route path="/Mybellen" element={<Maybellen />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Register/>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/beautyadvice" element={<BeautyAdvice/>}></Route>
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
