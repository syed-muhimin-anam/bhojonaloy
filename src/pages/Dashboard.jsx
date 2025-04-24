import React, { useState } from 'react';
import { FaUserCircle, FaClipboardList, FaComments, FaSignOutAlt, FaEdit, FaBars, FaUser, FaUtensils, FaListAlt } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    `flex items-center p-2 rounded text-gray-700 ${isActive ? 'bg-purple-100 font-semibold' : 'hover:bg-gray-200'}`;

  return (
    <div className="flex h-[calc(100vh-0rem)] mt-16 bg-gray-100 relative">
      {/* Sidebar Toggle Button - Only visible on mobile */}
      <button
        className="md:hidden fixed top-20 left-4 z-30 bg-white p-2 rounded shadow"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-16 h-full w-64 bg-white shadow-lg p-4 transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:top-0`}>


        <nav className="mt-6 space-y-2">
          <ul>
            <li><NavLink to="profile" className={activeClass}><FaUser className="mr-2" /> Profile</NavLink></li>
            <li><NavLink to="update-profile" className={activeClass}><FaEdit className="mr-2" /> Update Profile</NavLink></li>
            <li><NavLink to="feedback" className={activeClass}><FaComments className="mr-2" /> Feedback</NavLink></li>
            <li><NavLink to="addFood" className={activeClass}><FaUtensils className="mr-2" /> Add Food</NavLink></li>
            <li><NavLink to="myFoods" className={activeClass}><FaListAlt className="mr-2" /> My Food</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
