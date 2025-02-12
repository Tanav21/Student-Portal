import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Footer from "../Components/Footer";
import SideBar from "./SideBar";
import DashBoardHeader from "../Components/DashBoardHeader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            visible ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <SideBar />
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${visible ? "ml-0" : "ml-0"}`}>
          {/* Top Bar */}
          <DashBoardHeader visible={visible} setVisible={setVisible} />
          {/* Main Dashboard Content */}
          <div className="flex-1 p-8 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to my dashboard!
            </h1>
            <p>This is an example dashboard using Tailwind CSS.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
