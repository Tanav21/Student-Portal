import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
              <img src="./images/logo-removebg-preview.png" alt="Logo" className="h-8 w-8 mr-2 inline-block" />
              Abdul Basit Memon
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600">About</a>
            <a href="#projects" className="text-gray-800 hover:text-indigo-600">Projects</a>
            <a href="#services" className="text-gray-800 hover:text-indigo-600">Services</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600">Contact</a>
            <a
              href="https://nas.io/prologware-solutions-3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Join Us
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              {isOpen ? (
                <svg className="w-6 h-6 text-gray-500 hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-500 hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3">
            <a href="#home" className="block py-2 px-4 text-sm hover:bg-indigo-600 hover:text-white rounded transition duration-200">
              Home
            </a>
            <a href="#about" className="block py-2 px-4 text-sm hover:bg-indigo-600 hover:text-white rounded transition duration-200">
              About
            </a>
            <a href="#projects" className="block py-2 px-4 text-sm hover:bg-indigo-600 hover:text-white rounded transition duration-200">
              Projects
            </a>
            <a href="#services" className="block py-2 px-4 text-sm hover:bg-indigo-600 hover:text-white rounded transition duration-200">
              Services
            </a>
            <a href="#contact" className="block py-2 px-4 text-sm hover:bg-indigo-600 hover:text-white rounded transition duration-200">
              Contact
            </a>
            <a
              href="https://nas.io/prologware-solutions-3"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 text-sm bg-indigo-600 text-white rounded mt-2"
            >
              Join Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
