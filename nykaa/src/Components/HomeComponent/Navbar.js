// import React, { useState, useEffect } from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom"; // Import react-router-dom components
// import "./Navbar.css";
// import NYKAALOGO from "../HomeComponent/images/NYKAALOGO.jpg";
// import { useCart } from "../ProductComponent/CartContext";

// const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const { cart } = useCart();
//   const navigate = useNavigate(); // Use navigate for programmatic navigation

//   // Close mobile menu on larger screen resize
//   const handleResize = () => {
//     if (window.innerWidth > 768) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Toggle mobile menu
//   const toggleMenu = () => setMenuOpen((prevState) => !prevState);

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     setIsLoggedIn(false); // Update login state
//     navigate("/login"); // Redirect to login page
//   };

//   // Calculate total cart items
//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={NYKAALOGO} alt="Nykaa Logo" />
//           </Link>
//         </div>

//         {/* Hamburger Menu */}
//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         {/* Navigation Links */}
//         <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <Link to="/">Categories</Link>
//           </li>
//           <li>
//             <Link to="/BigDeal">Brands</Link>
//           </li>
//           <li>
//             <Link to="#">Luxe</Link>
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <Link to="#" aria-haspopup="true" aria-expanded={dropdownOpen}>
//               Nykaa Fashion
//             </Link>
//             <div
//               className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
//               role="menu"
//             >
//               <div className="dropdown-section">
//                 <h4>Women</h4>
//                 <ul>
//                   <li>
//                     <Link to="#">Indianwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Westernwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Footwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Bags</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Men</h4>
//                 <ul>
//                   <li>
//                     <Link to="#">Topwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Bottomwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Footwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Accessories</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Kids</h4>
//                 <ul>
//                   <li>
//                     <Link to="#">Ethnicwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Footwear</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Athleisure</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li>
//             <Link to="#">Beauty Advice</Link>
//           </li>
//           <li>
//           <Link to={isLoggedIn ? "/feedback" : "/login"}>Feedback</Link>
//           </li>
//         </ul>

//         {/* Search Bar */}
//         <div className="navbar-search">
//           <input
//             type="search"
//             placeholder="Search for products, brands, and more..."
//             aria-label="Search"

//           />
//         </div>

//         {/* Right Section */}
//         <div className="navbar-right">
//   {isLoggedIn ? (
//     <button className="sign-in-btn" onClick={handleLogout}>
//       Logout
//     </button>
//   ) : (
//     <>
//       <button className="sign-in-btn" onClick={() => navigate("/login")}>
//         Sign In
//       </button>
//       {/* <button
//         className="sign-up-btn"
//         onClick={() => navigate("/signup")}
//         style={{
//           marginLeft: "10px",
//           backgroundColor: "#007bff",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "50px",
//         }}
//       >
//         Sign Up
//       </button> */}
//       </>
//           )}
//           <div className="cart-icon-container">
//             <Link to="/CartPage" className="cart-link">
//               <FaShoppingBag className="bag-icon" />
//               {totalItems > 0 && (
//                 <span className="cart-badge">{totalItems}</span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import NYKAALOGO from "../HomeComponent/images/NYKAALOGO.jpg";
// import { useCart } from "../ProductComponent/CartContext";

// const Navbar = ({ isLoggedIn, setIsLoggedIn, onSearch }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search input
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleResize = () => {
//     if (window.innerWidth > 768) {
//       setMenuOpen(false);
//     }
//   };

//   const toggleMenu = () => setMenuOpen((prevState) => !prevState);

//   const handleLogout = () => {
//     localStorage.removeItem("username");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value); // Pass search term to parent component
//   };

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={NYKAALOGO} alt="Nykaa Logo" />
//           </Link>
//         </div>

//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//           <li><Link to="/">Categories</Link></li>
//           <li><Link to="/BigDeal">Brands</Link></li>
//           <li><Link to="#">Luxe</Link></li>
//           <li className="dropdown"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <Link to="#" aria-haspopup="true" aria-expanded={dropdownOpen}>Nykaa Fashion</Link>
//             <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} role="menu">
//               <div className="dropdown-section">
//                 <h4>Women</h4>
//                 <ul>
//                   <li><Link to="#">Indianwear</Link></li>
//                   <li><Link to="#">Westernwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Bags</Link></li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Men</h4>
//                 <ul>
//                   <li><Link to="#">Topwear</Link></li>
//                   <li><Link to="#">Bottomwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Accessories</Link></li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Kids</h4>
//                 <ul>
//                   <li><Link to="#">Ethnicwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Athleisure</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li><Link to="#">Beauty Advice</Link></li>
//           <li><Link to={isLoggedIn ? "/feedback" : "/login"}>Feedback</Link></li>
//         </ul>

//         {/* Search Bar */}
//         <div className="navbar-search">
//           <input
//             type="search"
//             placeholder="Search for products, brands, and more..."
//             value={searchTerm}
//             onChange={handleSearchChange} // Call handleSearchChange on input change
//           />
//         </div>

//         <div className="navbar-right">
//           {isLoggedIn ? (
//             <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
//           ) : (
//             <>
//               <button className="sign-in-btn" onClick={() => navigate("/login")}>Sign In</button>
//             </>
//           )}
//           <div className="cart-icon-container">
//             <Link to="/CartPage" className="cart-link">
//               <FaShoppingBag className="bag-icon" />
//               {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

/////////////////////////////

// import React, { useState, useEffect, useContext } from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import NYKAALOGO from "../HomeComponent/images/NYKAALOGO.jpg";
// import { useCart } from "../ProductComponent/CartContext";
// import AuthContext from "../../context/AuthContext";

// const Navbar = ({ onSearch }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { cart } = useCart();
//   const navigate = useNavigate();
//   const { user, logout } = useContext(AuthContext);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleResize = () => {
//     if (window.innerWidth > 768) {
//       setMenuOpen(false);
//     }
//   };

//   const toggleMenu = () => setMenuOpen((prevState) => !prevState);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={NYKAALOGO} alt="Nykaa Logo" />
//           </Link>
//         </div>

//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//           <li><Link to="/">Categories</Link></li>
//           <li><Link to="/BigDeal">Brands</Link></li>
//           <li><Link to="#">Luxe</Link></li>
//           <li className="dropdown"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <Link to="#" aria-haspopup="true" aria-expanded={dropdownOpen}>Nykaa Fashion</Link>
//             <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} role="menu">
//               <div className="dropdown-section">
//                 <h4>Women</h4>
//                 <ul>
//                   <li><Link to="#">Indianwear</Link></li>
//                   <li><Link to="#">Westernwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Bags</Link></li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Men</h4>
//                 <ul>
//                   <li><Link to="#">Topwear</Link></li>
//                   <li><Link to="#">Bottomwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Accessories</Link></li>
//                 </ul>
//               </div>
//               <div className="dropdown-section">
//                 <h4>Kids</h4>
//                 <ul>
//                   <li><Link to="#">Ethnicwear</Link></li>
//                   <li><Link to="#">Footwear</Link></li>
//                   <li><Link to="#">Athleisure</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li><Link to="beautyadvice">Beauty Advice</Link></li>
//           <li><Link to="/feedback">Feedback</Link></li>
//           {user ? (
//             <>
//               {/* <li><Link to="/feedback">Feedback</Link></li> */}
//               {user.isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
             
//             </>
//           ) : null}

//         </ul>

//         {/* Search Bar */}
//         {/* <div className="navbar-search">
//           <input
//             type="search"
//             placeholder="Search for products, brands, and more..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div> */}

//         <div className="navbar-right">
//           {user ? (
//             <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
//           ) : (
//             <button className="sign-in-btn" onClick={() => navigate("/login")}>Sign In</button>
//           )}
//           <div className="cart-icon-container">
//             <Link to="/CartPage" className="cart-link">
//               <FaShoppingBag className="bag-icon" />
//               {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import NYKAALOGO from "../HomeComponent/images/NYKAALOGO.jpg";
import { useCart } from "../ProductComponent/CartContext";
import AuthContext from "../../context/AuthContext";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCart();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={NYKAALOGO} alt="Nykaa Logo" />
          </Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Categories</Link></li>
          <li><Link to="/BigDeal">Brands</Link></li>
          <li><Link to="#">Luxe</Link></li>
          <li className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="#" aria-haspopup="true" aria-expanded={dropdownOpen}>Nykaa Fashion</Link>
            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} role="menu">
              <div className="dropdown-section">
                <h4>Women</h4>
                <ul>
                  <li><Link to="#">Indianwear</Link></li>
                  <li><Link to="#">Westernwear</Link></li>
                  <li><Link to="#">Footwear</Link></li>
                  <li><Link to="#">Bags</Link></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>Men</h4>
                <ul>
                  <li><Link to="#">Topwear</Link></li>
                  <li><Link to="#">Bottomwear</Link></li>
                  <li><Link to="#">Footwear</Link></li>
                  <li><Link to="#">Accessories</Link></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>Kids</h4>
                <ul>
                  <li><Link to="#">Ethnicwear</Link></li>
                  <li><Link to="#">Footwear</Link></li>
                  <li><Link to="#">Athleisure</Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li><Link to="beautyadvice">Beauty Advice</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          {user ? (
            <>
              {user.isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
            </>
          ) : null}
      

        <div className="navbar-right">
          {user ? (
            <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="sign-in-btn" onClick={() => navigate("/login")}>Sign In</button>
          )}
          <div className="cart-icon-container">
            <Link to="/CartPage" className="cart-link">
              <FaShoppingBag className="bag-icon" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>

            
          </div>
        </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

