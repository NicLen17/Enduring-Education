// Main App Component
import React from "react";
import WelcomeSection from "./Components/WelcomeSection";
import PriceChartSection from "./Components/PriceChart";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import AboutUsSection from "./Components/About";

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-gray-100">
      <Navbar />
      <main>
        <WelcomeSection />
        <AboutUsSection/>
        <PriceChartSection />
        <section
          id="get-started"
          className="relative py-24 px-4 bg-red-800 text-white text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10 z-0"></div>

          <div className="container mx-auto relative z-10">
            <h2 className="text-5xl font-extrabold mb-8 leading-tight drop-shadow-lg">
              Unlock the Future of Education!
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join Enduring Education today and empower yourself with
              cutting-edge tools and strategies designed to inspire the next
              generation of engaged learners.
            </p>
            <button className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:bg-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out flex items-center justify-center mx-auto group">
              <svg
                className="w-7 h-7 mr-3 text-red-600 group-hover:text-black transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
