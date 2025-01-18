import React from 'react';
import Userdashboard from '@/components/userdashboard';
import Topbar from '@/components/topbar';
import ProductForm from '@/components/ProductForm';
import addProduct from '@/actions/auth/productsAdd';

export default function Product() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      <Userdashboard />
      
      {/* Main Content Area */}
      <div className="col-span-4 p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* Topbar */}
        <Topbar />
        
        {/* Add Product Form */}
        <ProductForm handler={addProduct} />
      </div>
    </div>
  );
}
