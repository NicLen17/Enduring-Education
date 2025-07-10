import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-1 text-gray-600 border-red-500 py-8 px-4 text-center shadow-inner">
      <div className="container mx-auto">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Enduring Education. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-black transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  ); 
};

export default Footer;
