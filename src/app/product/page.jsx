'use client';
import Slider from '@/components/slider';
import React from 'react';
import CategoryList from '@/components/category';

export default function Page() {
  return (
    <div>
      <Slider />
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Sidebar for product categories */}
    
          <CategoryList />

      {/* Product list */}
      <div className="col-span-12 sm:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
              alt={`Product ${index + 1}`}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">Product {index + 1}</h3>
            <p className="text-sm text-gray-600">Store Name</p>
            <div className='flex justify-between items-center'>
            <p className="text-sm text-gray-600">City {index + 1}</p>
            <p className="text-sm font-semibold text-green-500">₦{(index + 1) * 10}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
