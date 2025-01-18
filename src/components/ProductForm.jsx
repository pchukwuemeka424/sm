"use client";
import React from "react";
import { useActionState } from "react";

export default function ProductForm({ handler, product }) {
  const [state, action, isPending] = useActionState(handler, undefined);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
      <form action={action} >
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name"
            defaultValue={product?.name || ""}
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
          {state?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
          )}
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            defaultValue={product?.description || ""}
            className="w-full px-4 py-2 border rounded-lg mt-2"
            rows="3"
          ></textarea>
          {state?.errors?.description && (
            <p className="text-red-500 text-sm mt-1">{state.errors.description}</p>
          )}
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter product price"
            defaultValue={product?.price || ""}
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
          {state?.errors?.price && (
            <p className="text-red-500 text-sm mt-1">{state.errors.price}</p>
          )}
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={product?.category || ""}
            className="w-full px-4 py-2 border rounded-lg mt-2"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="toys">Toys</option>
          </select>
          {state?.errors?.category && (
            <p className="text-red-500 text-sm mt-1">{state.errors.category}</p>
          )}
        </div>

        {/* Stock Quantity */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-semibold text-gray-700">
            Stock Quantity
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="Enter stock quantity"
            defaultValue={product?.stock || ""}
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
          {state?.errors?.stock && (
            <p className="text-red-500 text-sm mt-1">{state.errors.stock}</p>
          )}
        </div>

        {/* Product Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
          {state?.errors?.image && (
            <p className="text-red-500 text-sm mt-1">{state.errors.image}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg w-26 mt-4 ${
            isPending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={isPending}
        >
          {isPending ? "Processing..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
