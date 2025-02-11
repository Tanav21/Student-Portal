import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaUsers, FaComments, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import PageLayout from "./PageLayout";

const Dashboard = () => {
  return (
    <PageLayout>
    <div className="flex h-screen">
      <div className="bg-gradient-to-b from-gray-900 to-blue-500 text-white w-64 h-screen p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="mr-2">☰</span> Dashboard
        </h2>
        <ul className="flex-1">
          <li className="mb-4 flex items-center">
            <FaHome className="mr-2" /> <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaUser className="mr-2" /> <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaFileAlt className="mr-2" /> <Link to="/articles" className="hover:underline">Article</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaUsers className="mr-2" /> <Link to="/users" className="hover:underline">Users</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaComments className="mr-2" /> <Link to="/comments" className="hover:underline">Comments</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <input 
            type="text" 
            placeholder="Search" 
            className="border px-4 py-2 rounded-lg w-1/3"
          />
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600" />
            <FaCog className="text-gray-600" />
            <Link to="/logout" className="text-gray-600 flex items-center">
              <FaSignOutAlt className="mr-1" /> Logout
            </Link>
          </div>
        </div>
        <div className="flex-1 p-8 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Welcome to my dashboard!</h1>
          <p>This is an example dashboard using Tailwind CSS.</p>
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default Dashboard;
