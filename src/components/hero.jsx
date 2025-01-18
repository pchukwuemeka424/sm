import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center bg-cover bg-center md:bg-[url('https://scholarmedia.africa/wp-content/uploads/2023/03/A-woman-trader-e1680190679909.jpg')]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

      {/* Content Container */}
      <div className="relative container mx-auto text-center px-4">
        {/* Hero Content */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Find What You're Looking For
        </h1>
        <p className="text-gray-200 mb-8">
          Search for products, services, or information across our platform.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full max-w-md px-4 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-6 py-4 rounded-r-md hover:bg-blue-600 transition flex items-center"
          >
            <AiOutlineSearch className="w-6 h-6 mr-2" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
