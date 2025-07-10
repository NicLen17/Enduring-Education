import React, { useState } from "react";
import Logo from "../assets/Enduring Education - Logo.jpeg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-1 border-b-red-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-white text-2xl font-bold rounded-md px-3 py-2 transform hover:scale-115 transition-transform duration-300 ease-in-out"
        >
          <img
            src={Logo}
            width={60}
            alt="Enduring Education Logo"
            className="rounded-md"
          />
        </a>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#welcome"
            className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            Welcome
          </a>
          {/* Corrected href to #about-us */}
          <a
            href="#about"
            className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            About us
          </a>
          <a
            href="#pricing"
            className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#get-started"
            className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-md shadow-inner">
            <a
              href="#welcome"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Welcome
            </a>
            <a
              href="#about-us" // Corrected href to #about-us
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              About us
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#get-started"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
