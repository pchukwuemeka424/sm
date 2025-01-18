import React, { useState } from 'react';

export default function ProductCategories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search Query:', searchQuery);
    console.log('City:', selectedCity);
    console.log('State:', selectedState);
  };

  return (
    <div className="hidden sm:block col-span-3 bg-white p-4 rounded shadow">


      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4 space-y-4">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Product
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City Dropdown */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Miami">Miami</option>
          </select>
        </div>

        {/* State Dropdown */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select State</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
            <option value="New York">New York</option>
            <option value="Illinois">Illinois</option>
          </select>
        </div>

        {/* Search Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Product Categories */}
      <h2 className="text-lg font-bold mb-4">Product Categories</h2>
      <ul className="space-y-2">
        <li className="hover:underline cursor-pointer">Electronics</li>
        <li className="hover:underline cursor-pointer">Clothing</li>
        <li className="hover:underline cursor-pointer">Home Appliances</li>
        <li className="hover:underline cursor-pointer">Books</li>
        <li className="hover:underline cursor-pointer">Sports</li>
      </ul>
    </div>
  );
}
