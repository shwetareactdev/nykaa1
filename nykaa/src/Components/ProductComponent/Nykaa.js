import React, { useState, useEffect } from 'react';
import './Nykaa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// Importing images
import loreal1 from '../ProductComponent/Images/loreal1.avif';
import loreal2 from '../ProductComponent/Images/loreal2.avif';
import loreal3 from '../ProductComponent/Images/loreal3.avif';
import loreal4 from '../ProductComponent/Images/loreal4.avif';
import nykaa from '../ProductComponent/Images/lakmegif1_files/nykaa.jpg';
import nykaacosmetics from '../ProductComponent/Images/lakmegif1_files/nykacosmatic.png';
import nykaatitle2 from '../ProductComponent/Images/lakmegif1_files/nykaatitle2.png';
import nykaatitle3 from '../ProductComponent/Images/lakmegif1_files/nykaatitle3.jpg';

const Nykaa = () => {
  const products = [
    {
      id: 1, src: loreal1,
      name: 'L\'Oreal Paris Glycolic Bright Serum',
      price: '₹359', mrp: '₹399', discount: '10% Off',
      description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      rating: 4,
      ratingCount: 50,
    },
    {
      id: 2, src: loreal2, name: 'L\'Oreal Smooth Fresh Hair Conditioner', price: '₹550', mrp: '₹599', discount: '8% Off',
      description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      rating: 4,
      ratingCount: 50,
    },
    {
      id: 3, src: loreal3, name: 'L\'Oreal Fragrance Fruit Hair Mask', price: '₹700', mrp: '₹750', discount: '7% Off',
      description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      rating: 4,
      ratingCount: 50,
    },
    {
      id: 4, src: loreal4, name: 'L\'Oreal Natural Vitamin C Pure Serum', price: '₹800', mrp: '₹850', discount: '6% Off',
      description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      rating: 4,
      ratingCount: 50,
    },
    // Add other products here...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    price: '',
    discount: '',
    search: ''
  });

  const itemsPerPage = 8;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    let filtered = products;

    if (filters.price) {
      filtered = filtered.filter(product => parseInt(product.price.replace('₹', '')) <= parseInt(filters.price));
    }

    if (filters.discount) {
      filtered = filtered.filter(product => product.discount === filters.discount);
    }

    if (filters.search) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(filters.search.toLowerCase()));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters are applied
  }, [filters]);

  return (
    <div className="nykaa-container">
      {/* Title Section */}
      <div className="title-section">
        <table>
          <tr>
            <td><img src={nykaa} alt="nykaa Title" className="nykaatitle1-image" /></td>
            <td><img src={nykaacosmetics} alt="nykaa Title" className="nykaatitle2-image" /></td>
            <td><img src={nykaatitle2} alt="nykaa Title" className="nykaatitle2-image" /></td>
          </tr>
        </table>
      </div>
      {/* Page Heading */}
      <h2 className="text-center mb-4">Buy Nykaa Products Online</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search Products"
          className="filter-input"
        />
        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Price</option>
          <option value="500">Below ₹500</option>
          <option value="700">Below ₹700</option>
          <option value="900">Below ₹900</option>
        </select>
        <select
          name="discount"
          value={filters.discount}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Discount</option>
          <option value="10% Off">10% Off</option>
          <option value="8% Off">8% Off</option>
          <option value="7% Off">7% Off</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <Card key={product.id} className="product-card">
            <CardMedia
              component="img"
              image={product.src}
              alt={product.name}
              className="product-image"
            />
            <CardContent>
              <Typography className="product-name">{product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</Typography>
              <Typography className="price-details">
                <span className="mrp">{product.mrp}</span>
                <span className="price">{product.price}</span>
                <span className="discount">{product.discount}</span>
              </Typography>

              <div className="action-buttons">
                <button
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                  className="view-details-btn"
                >
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nykaa;
