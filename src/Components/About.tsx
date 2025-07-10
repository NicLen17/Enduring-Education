import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-12">
          About Enduring Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-3xl font-bold text-red-600 mb-6">
              The Challenge We Address
            </h3>
            <p className="text-lg leading-relaxed mb-2">
              University systems are struggling to equip educators with the
              skills needed to integrate emerging technologies, creating a
              significant pedagogical gap. This leads to outdated teaching
              methods, decreased student engagement, and alarmingly high dropout
              rates.
            </p>
            <br />
            <br />
            <p className="text-lg leading-relaxed font-semibold text-black">
              With an OECD average university dropout rate of approximately 32%,
              and even higher in some regions, it's clear that traditional
              approaches are no longer sufficient for 21st-century minds.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-3xl font-bold text-yellow-500 mb-6">
              Our Revolutionary Solution
            </h3>
            <p className="text-lg leading-relaxed mb-4 flex-grow">
              Enduring Education is the answer. Our intuitive app delivers the
              Enduring Education Learning Method, a revolutionary approach to
              professional development for university teachers.
            </p>
            <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">&bull;</span>
                Micro-learning: Digestible 5-10 minute segments for retention
                and busy schedules.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">&bull;</span>
                Action-oriented: "How-to" guides focused on immediate, practical
                classroom application.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">&bull;</span>
                Blended Content: Rich mix of text, visuals, videos, and
                customizable templates.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">&bull;</span>
                Self-paced: Learn on-demand, whenever and wherever it suits
                them.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">&bull;</span>
                Scaffolding: Content progressively structured from basic
                concepts to complex applications.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-black mb-10">
            Why Enduring Education Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-100 p-6 rounded-xl shadow-md border border-yellow-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-yellow-700 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-yellow-700 mb-3">
                Boost Student Engagement
              </h4>
              <p className="text-gray-700">
                Transform passive learning into interactive, captivating
                experiences.
              </p>
            </div>
            <div className="bg-red-100 p-6 rounded-xl shadow-md border border-red-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-red-700 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-red-700 mb-3">
                Reduce Dropout Rates
              </h4>
              <p className="text-gray-700">
                Keep students connected and motivated, leading to higher
                completion rates.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-black mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h4l2-2m3-6V7a4 4 0 10-4 4h.01M6 15h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-black mb-3">
                Empower Educators
              </h4>
              <p className="text-gray-700">
                Provide teachers with the confidence and tools for 21st-century
                teaching.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-6 shadow-xl mt-16 text-center">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed max-w-4xl mx-auto px-4">
              We are building a movement to upgrade the classroom experience for
              both teachers and students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
