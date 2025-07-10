import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-20 px-4 text-center shadow-inner">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-down">
          Enduring Education: Bridging the Pedagogical Gap
        </h1>
        <p className="text-xl mb-8 leading-relaxed animate-fade-in-up">
          Empowering university teachers with modern tools, digital strategies, and real-world methods
          to connect with today's students and reduce dropout rates.
        </p>
        <a
          href="#get-started"
          className="bg-white text-red-400 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out inline-block"
        >
          Get Started Today!
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
