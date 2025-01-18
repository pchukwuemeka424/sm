import React from 'react';
import Link from 'next/link';
import { FaHome, FaPlus, FaCog, FaLock, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function UserDashboard() {
  return (
    <div className="col-span-1 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4 flex items-center">
          <FaHome className="h-5 w-5 mr-2" />
          <Link href="/users/dashboard" className="text-white">Dashboard</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaPlus className="h-5 w-5 mr-2" />
          <Link href="/users/addproduct" className="hover:bg-gray-700 p-2 rounded">Add Products</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaCog className="h-5 w-5 mr-2" />
          <Link href="/users/productlist" className="hover:bg-gray-700 p-2 rounded">Manage Products</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaCog className="h-5 w-5 mr-2" />
          <Link href="#" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaLock className="h-5 w-5 mr-2" />
          <Link href="#" className="hover:bg-gray-700 p-2 rounded">Security</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaUserCircle className="h-5 w-5 mr-2" />
          <Link href="#" className="hover:bg-gray-700 p-2 rounded">Kyc</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaSignOutAlt className="h-5 w-5 mr-2" />
          <Link href="#" className="hover:bg-gray-700 p-2 rounded">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
