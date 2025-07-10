import React from 'react';

const PriceChartSection: React.FC = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      period: "for 30 days",
      description: "Experience the basics of Enduring Education.",
      features: [
        "Access to basic micro-learning modules",
        "Limited action-oriented guides",
        "Self-paced learning",
        "Basic community access",
      ],
      buttonText: "Start Free Trial",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
      isFree: true,
    },
    {
      name: "Standard Plan",
      price: "$9.99", // Moved price here for easier display below period
      period: "Starting from /month", // Combined text for clarity
      description: "Empower individual teachers with essential tools.",
      features: [
        "Full access to micro-learning modules",
        "Comprehensive 'How-to' guides",
        "Blended content (text, visuals, videos)",
        "Self-paced learning & scaffolding",
        "Basic community access",
      ],
      userPricing: [
        { users: "1 user", price: "$9.99" },
        { users: "10 users", price: "$89.99" },
        { users: "50 users", price: "$449.99" },
        { users: "100 users", price: "$849.99" },
        { users: "More than 100 users", price: "Custom Price" },
      ],
      buttonText: "Choose Standard",
      buttonColor: "bg-red-600 text-black hover:bg-red-700",
    },
    {
      name: "Premium Plan",
      price: "$12.99", // Moved price here for easier display below period
      period: "Starting from /month", // Combined text for clarity
      description: "Advanced features for comprehensive institutional needs.",
      features: [
        "All Standard Plan features",
        "Dedicated support",
        "Customizable content modules",
        "Advanced analytics & reporting",
        "Full community access & collaboration tools",
      ],
      userPricing: [
        { users: "1 user", price: "$12.99" },
        { users: "10 users", price: "$115.99" },
        { users: "50 users", price: "$584.99" },
        { users: "100 users", price: "$1099.99" },
        { users: "More than 100 users", price: "Custom Price" },
      ],
      buttonText: "Choose Premium",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          We have Flexible Prices for Every Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 wrap-anywhere">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">{plan.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{plan.description}</p>

                <p className="text-xl text-gray-500 mb-2">{plan.period}</p> 
                <p className="text-5xl font-bold text-red-600 mb-6"> 
                  {plan.price}
                </p>

                <ul className="text-lg text-gray-800 mb-8 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.userPricing && (
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <h4 className="text-xl font-bold text-black mb-4">Pricing by Users:</h4>
                    <ul className="text-base text-gray-700 space-y-2 text-left">
                      {plan.userPricing.map((tier, i) => (
                        <li key={i} className="flex justify-between items-center">
                          <span className="font-semibold">{tier.users}:</span>
                          <span className="text-red-600 font-bold">{tier.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                className={`w-full ${plan.buttonColor} text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out mt-8`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceChartSection;
