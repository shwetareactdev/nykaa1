import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      const filteredData = data.filter(item =>
        item.toLowerCase().includes(value)
      );
      setResults(filteredData);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
