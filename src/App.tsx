// Main App Component
import React from 'react';
import WelcomeSection from './Components/WelcomeSection';
import PriceChartSection from './Components/PriceChart';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-gray-100">
      <Navbar  />
      <main>
        <WelcomeSection />
        <PriceChartSection />
        {/* Placeholder for Get Started section - can be expanded later */}
        <section id="get-started" className="py-20 px-4 bg-white text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Ready to Transform Your Classroom?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join Enduring Education today and empower yourself with the tools to inspire the next generation.
            </p>
            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300 ease-in-out">
              Sign Up Now!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
