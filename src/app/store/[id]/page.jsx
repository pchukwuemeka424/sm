'use client';
import Slider from '@/components/slider';
import React from 'react';
import CategoryList from '@/components/category';
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    const { id } = params;
  
  return (
    <div>
          <main className=" border-b-8 border-blue-950 shadow-md">
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl text-capitalize font-extrabold text-gray-900 sm:text-4xl">
     {id}
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Your one-stop destination for premium cosmetics. Elevate your beauty routine with our top-notch products!
      </p>
    
    </div>
  </div>
</main>

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
