import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust the path as needed

const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} /> {/* Pass the setSearchQuery function as a prop */}
      {/* You can now use the searchQuery state in this parent component */}
      <p>Search Query: {searchQuery}</p>
    </div>
  );
};

export default ParentComponent;
