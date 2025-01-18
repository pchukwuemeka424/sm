"use client";
import { useParams } from "next/navigation";
import { FaStore, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons
import CategoryList from '@/components/category';

export default function ProductPage() {
  // Accessing the dynamic 'id' parameter from the URL
  const params = useParams();
  const { id } = params;

  // Hardcoded product data with additional store and vendor info
  const products = {
    "1": {
      name: "Product 1",
      description: "This is a great product.",
      price: 19.99,
      image: "https://via.placeholder.com/500x300?text=Product+1", // Placeholder image URL
      storeName: "Store A",
      state: "California",
      city: "Los Angeles",
      amount: 100,
      contact: "+1 (555) 123-4567",
      vendor: "Vendor X",
      storeLink: "https://store-a.com",
      whatsapp: "+1 (555) 123-4567", // WhatsApp contact
    },
    "2": {
      name: "Product 2",
      description: "This is another awesome product.",
      price: 29.99,
      image: "https://via.placeholder.com/500x300?text=Product+2", // Placeholder image URL
      storeName: "Store B",
      state: "New York",
      city: "New York City",
      amount: 50,
      contact: "+1 (555) 987-6543",
      vendor: "Vendor Y",
      storeLink: "https://store-b.com",
      whatsapp: "+1 (555) 987-6543", // WhatsApp contact
    },
  };

  // Get the product based on the `id` from the URL
  const product = products[id];

  // If the product is not found, show a not found message
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <CategoryList />

      {/* Product Detail Section */}
      <div className="w-3/4 p-6">
        {/* Header Section */}
        <h1 className="text-2xl font-semibold text-center mb-4">{product.name}</h1>

        {/* Product Detail Section */}
        <div className="flex gap-10">
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-1/2">
            <p className="text-md text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-900 mb-6">
              Price: ${product.price}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <FaStore className="inline mr-2" />
              Store: {product.storeName}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Location: {product.city}, {product.state}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <FaPhone className="inline mr-2" />
              Contact: {product.contact}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Vendor: {product.vendor}
            </p>

            {/* Amount available */}
            <p className="text-sm text-gray-800 font-semibold mb-4">
              Available: {product.amount} in stock
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
            

              {/* Visit Store Button */}
              <a
                href={product.storeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white text-sm px-2 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <FaStore /> Visit Store
              </a>

              {/* Call Vendor Button */}
              <a
                href={`tel:${product.contact}`}
                className="bg-orange-600 text-white text-sm px-2 py-2 rounded-md flex items-center gap-2 hover:bg-orange-700 transition-colors"
              >
                <FaPhone /> Call
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${product.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white text-sm px-2 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp /> Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
