// Welcome Section Component
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="bg-gradient-to-r from-red-700 to-yellow-500 text-white py-32 px-4 text-center shadow-inner min-h-[60vh] flex items-center justify-center"> 
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
          Enduring Education: Bridging the Pedagogical Gap
        </h1>
        <p className="text-xl mb-8 leading-relaxed animate-fade-in-up">
          Empowering university teachers with modern tools, digital strategies, and real-world methods
          to connect with today's students and reduce dropout rates.
        </p>
        <a
          href="#about"
          className="bg-white text-red-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out inline-block"
        >
          Get to know us!   
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;