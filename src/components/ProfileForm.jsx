"use client"; // This tells Next.js to treat this component as a client-side component

import React from "react";
import { useActionState } from "react";
import { FaStore, FaUser, FaAddressCard, FaPhone, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function ProfileForm({ handler, defaultValues }) {
  const [state, action, isPending] = useActionState(handler, undefined);

  return (
    <div>
      <form className="space-y-4 w-2/4" action={action}>
        {/* Store Name */}
        <div className="flex items-center">
          <FaStore className="mr-2 text-gray-500" />
          <input
            type="text"
            name="shopname"
            placeholder="Enter store name"
            aria-label="Store Name"
            className="w-full px-4 py-2 border rounded-lg"
            defaultValue={state?.shopname || defaultValues?.shopname}
          />
          {state?.errors?.shopname && (
            <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.shopname}</p>
          )}
        </div>

        {/* Username */}
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            aria-label="Username"
            className="w-full px-4 py-2 border rounded-lg"
            defaultValue={state?.username || defaultValues?.username}
          />
          {state?.errors?.username && (
            <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.username}</p>
          )}
        </div>

        {/* Address */}
        <div className="flex items-start">
          <FaAddressCard className="mr-2 text-gray-500 mt-2" />
          <textarea
            name="address"
            placeholder="Enter your address"
            aria-label="Address"
            className="w-full px-4 py-2 border rounded-lg"
            rows="3"
            defaultValue={state?.address || defaultValues?.address}
          ></textarea>
          {state?.errors?.address && (
            <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.address}</p>
          )}
        </div>

        {/* State and City */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center w-full">
            <input
              type="text"
              name="stat"
              placeholder="Enter state"
              aria-label="Stat"
              className="w-full px-4 py-2 border rounded-lg"
              defaultValue={state?.stat || defaultValues?.stat}
            />
            {state?.errors?.stat && (
              <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.stat}</p>
            )}
          </div>
          <div className="flex items-center w-full">
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              aria-label="City"
              className="w-full px-4 py-2 border rounded-lg"
              defaultValue={state?.city || defaultValues?.city}
            />
            {state?.errors?.city && (
              <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.city}</p>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center">
          <FaPhone className="mr-2 text-gray-500" />
          <input
            type="text"
            name="phone"
            placeholder="Enter mobile number"
            aria-label="Mobile Number"
            className="w-full px-4 py-2 border rounded-lg"
            defaultValue={state?.phone || defaultValues?.phone}
          />
          {state?.errors?.phone && (
            <p className="text-red-500 text-sm mt-1 ml-8">{state.errors.phone}</p>
          )}
        </div>

        {/* Social Media Links */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Social Media Links
          </label>
          {[
            { name: "facebook", placeholder: "Facebook URL", icon: <FaFacebook className="mr-2 text-gray-500" /> },
            { name: "instagram", placeholder: "Instagram URL", icon: <FaInstagram className="mr-2 text-gray-500" /> },
            { name: "tiktok", placeholder: "TikTok URL", icon: <FaTiktok className="mr-2 text-gray-500" /> },
            { name: "twitter", placeholder: "Twitter URL", icon: <FaTwitter className="mr-2 text-gray-500" /> },
          ].map((field, index) => (
            <div key={index} className="flex items-center mb-4">
              {field.icon}
              <input
                type="text"
                name={`socialLinks.${field.name}`}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border rounded-lg"
                defaultValue={state?.socialLinks?.[field.name] || defaultValues?.socialLinks?.[field.name]}
              />
              {state?.errors?.[`socialLinks.${field.name}`] && (
                <p className="text-red-500 text-sm mt-1 ml-8">
                  {state.errors[`socialLinks.${field.name}`]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}
