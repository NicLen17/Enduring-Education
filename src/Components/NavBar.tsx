import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b-1 border-b-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold rounded-md px-3 py-2 transform hover:scale-115 transition-transform duration-300 ease-in-out">
          <img src="./src/assets/Enduring Education - Logo.jpeg" width={60} alt="" />
        </a>
        <div className="flex space-x-4">
          <a href="#welcome" className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Welcome
          </a>
          <a href="#pricing" className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Pricing
          </a>
          <a href="#get-started" className="text-black hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
