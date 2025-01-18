import React from 'react';
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import desired icons
import { get } from 'mongoose';
import getAuthUser from '@/utils/getAuthUser';
import { logout } from '@/actions/auth/logout';

export default async function Navbar() {
 const authUser =  await getAuthUser();

  return (
    <div className="mx-auto max-w-7xl absolute top-0 left-0 right-0 z-50">
      <nav className="w-full">
        <div className="flex items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <img src="https://via.placeholder.com/180x100" alt="Logo" className="w-25" />
          </div>

          {/* Spacer to push items to the right */}
          <div className="flex-grow"></div>

          {/* Navigation Links */}
          {
            authUser? 
            (<div>
              <div className="flex space-x-6">
              <Link href="/users/dashboard" className="text-white hover:text-gray-300 transition">
              Dashboard
            </Link>
            <Link href="/product" className="text-white hover:text-gray-300 transition">
              Stores
            </Link>
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Products
            </Link>
          
           {/* logout button */}
              <form action={logout}>
                <button type="submit" className="text-white hover:text-gray-300 transition">Logout  </button>
              </form>
          </div>
            </div>)
            :
            (   <div className="flex space-x-2 ml-6">
              {/* Login Button */}
              <Link href="/product" className="text-white hover:text-gray-300 transition">
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  <FaSignInAlt className="mr-2" /> Vendors
                </button>
              </Link>
              <Link href="/login" className="text-white hover:text-gray-300 transition">
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  <FaSignInAlt className="mr-2" /> Login
                </button>
              </Link>
              {/* Register Button */}
              <Link href="/register" className="text-white hover:text-gray-300 transition">
                <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                  <FaUserPlus className="mr-2" /> Register
                </button>
              </Link>
            </div>)
          }
          

          {/* Login and Register Buttons */}
       
        </div>
      </nav>
    </div>
  );
}
