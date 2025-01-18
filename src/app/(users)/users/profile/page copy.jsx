import React from 'react';
import Userdashboard from '@/components/userdashboard';
import Topbar from '@/components/topbar';

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      {/* Sidebar */}
        <Userdashboard />

      {/* Main Content Area */}
      <div className="col-span-4 p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full">
          {/* Stat Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Sales</h3>
            <p className="text-2xl text-gray-800">$12,450</p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Orders</h3>
            <p className="text-2xl text-gray-800">350</p>
          </div>

          {/* Stat Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Products Sold</h3>
            <p className="text-2xl text-gray-800">150</p>
          </div>

          {/* Stat Box 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Vendors Active</h3>
            <p className="text-2xl text-gray-800">8</p>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
          <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-64 bg-gray-200 rounded-lg"></div> {/* Placeholder for a chart */}
          <p className="mt-4 text-center text-gray-500">Sales data will appear here (e.g., using a charting library).</p>
        </div>

        {/* Vendor Management */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
          <h2 className="text-2xl font-semibold mb-4">Vendor Management</h2>
          <ul>
            <li className="mb-4">
              <span className="font-semibold">Vendor A</span>: Active, 50 products listed.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Vendor B</span>: Active, 120 products listed.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Vendor C</span>: Inactive, 30 products listed.
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View All Vendors</button>
        </div>

        {/* Product Listings */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
          <h2 className="text-2xl font-semibold mb-4">Product Listings</h2>
          <ul>
            <li className="mb-4">
              <span className="font-semibold">Product A</span>: $20.00, In Stock: 100 units
            </li>
            <li className="mb-4">
              <span className="font-semibold">Product B</span>: $15.00, In Stock: 200 units
            </li>
            <li className="mb-4">
              <span className="font-semibold">Product C</span>: $25.00, In Stock: 50 units
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View All Products</button>
        </div>

        {/* Task List */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
          <h2 className="text-2xl font-semibold mb-4">Task List</h2>
          <ul>
            <li className="mb-4">
              <input type="checkbox" className="mr-2" /> <span className="font-semibold">Complete Order #125</span>
            </li>
            <li className="mb-4">
              <input type="checkbox" className="mr-2" /> <span className="font-semibold">Approve Vendor B</span>
            </li>
            <li className="mb-4">
              <input type="checkbox" className="mr-2" /> <span className="font-semibold">Add New Product</span>
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View All Tasks</button>
        </div>
      </div>
    </div>
  );
}
