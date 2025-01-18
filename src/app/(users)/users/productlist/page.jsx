
import React, { useState } from 'react';
import Userdashboard from '@/components/userdashboard';
import Topbar from '@/components/topbar';
import Link from 'next/link';

export default function productlist() {
  // Sample product data


  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Userdashboard />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50 space-y-6 overflow-y-auto">
        {/* Topbar */}
        <Topbar />

        {/* Search Bar */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 w-full max-w-xs border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
         <Link href="/users/addproduct">
         <button className="ml-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add New Product
          </button>
         </Link>
        </div>

        {/* Product List Table */}
        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full table-auto border-separate border-spacing-0 border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Image</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Product Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="py-4 px-6 text-center">
                    <img src={product.imageUrl} alt={product.name} className="h-16 w-16 object-cover rounded-md mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">{product.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{product.price}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{product.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-lg font-medium text-gray-700">Page {currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * productsPerPage >= filteredProducts.length}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
