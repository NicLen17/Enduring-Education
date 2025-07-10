// src/pages/LearningTopicsPage.tsx
import React, { useState } from 'react';

const LearningTopicsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const learningTopics = [
    {
      id: 'ai', // Unique ID for each card
      title: 'AI for Academic Enhancement',
      description: 'Discover how to leverage Artificial Intelligence tools to personalize learning, automate tasks, and enhance student engagement. Learn practical applications for your classroom today.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10V7m5 3V7m5 3V7m5 3V7M3 14V9m5 5V9m5 5V9m5 5V9m-9 9l-4-4m4 4l4-4m-4 4V7"></path>
        </svg>
      ),
    },
    {
      id: 'gamification',
      title: 'Gamification in the Classroom',
      description: 'Transform your lessons into interactive experiences using gamification techniques. Boost student motivation, participation, and retention through engaging challenges and rewards.',
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 001-1V9a1 1 0 00-1-1H7a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z"></path>
        </svg>
      ),
    },
    {
      id: 'collaboration',
      title: 'Digital Collaboration Tools',
      description: 'Master the latest digital tools for collaborative learning. Foster teamwork and communication among students with practical strategies for online group projects and discussions.',
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.134-.01-.265-.03-.393C16.92 15.655 15.823 15 14.5 15c-1.323 0-2.42.655-2.47 1.607C12.01 17.735 11.99 17.866 11.99 18v2m-9 0h5v-2a3 3 0 00-5.356-1.857M5 14c.245-.694 1.144-2 2-2 1.256 0 2.256.712 2.5 2m-.5 0h1m-7 0a6.002 6.002 0 005.972 5.972C13.856 20.974 14.92 21 16 21c1.08 0 2.144-.026 3.194-.078m-11 0c-.245-.694-1.144-2-2-2-1.256 0-2.256.712-2.5 2m-.5 0h1m7.5-6a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"></path>
        </svg>
      ),
    },
    {
      id: 'feedback',
      title: 'Effective Feedback Strategies',
      description: 'Learn how to provide timely, constructive, and impactful feedback using digital tools. Enhance student understanding and progress with modern feedback methodologies.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
      ),
    },
  ];

  const handleCardClick = (id: string) => {
    setSelectedCard(id);
    // Optionally, scroll to the explanation section after a card is clicked
    document.getElementById('user-flow-explanation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          What You'll Learn with Enduring Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {learningTopics.map((topic) => (
            <div
              key={topic.id}
              className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform duration-300 ease-in-out cursor-pointer
                ${selectedCard === topic.id ? 'scale-105 ring-4 ring-indigo-500' : 'hover:scale-105'}`}
              onClick={() => handleCardClick(topic.id)}
            >
              <div className="mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div id="user-flow-explanation" className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            What Happens When You Select a Topic?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            When a user selects a card, the Enduring Education app is designed to provide a seamless and interactive learning experience. The selection will initiate a journey into a specific module, such as "AI for Academic Enhancement."
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Here's a step-by-step breakdown of what the user will see and experience:
          </h3>

          <ol className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Module Overview</h4>
                <p className="text-gray-700">
                  Upon selection, the user is directed to a dedicated module page. This page provides a brief introduction to the chosen topic, outlining the learning objectives and what to expect from the module. It sets the stage for the learning journey ahead.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Micro-learning Segments</h4>
                <p className="text-gray-700">
                  The module content is broken down into digestible 5-10 minute segments. This "Micro-learning" approach ensures that teachers can fit learning into their busy schedules and optimize retention. Each segment focuses on a specific sub-topic or skill.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive "Try It Out" Prompts</h4>
                <p className="text-gray-700">
                  Within the lessons, users will encounter "Try It Out" prompts. These are practical exercises or simulations that encourage immediate application of the learned concepts. This action-oriented approach ensures practical application in the classroom.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Blended Content & Scaffolding</h4>
                <p className="text-gray-700">
                  Content is delivered through a rich mix of text, visuals, videos, and customizable templates to cater to diverse learning styles. The content is also progressively structured, moving from basic concepts to complex applications, ensuring a solid understanding (Scaffolding).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                5
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-time Application & Feedback</h4>
                <p className="text-gray-700">
                  Teachers can apply what they learn directly in their classroom and receive immediate feedback. The app is designed for self-paced learning, allowing teachers to learn on-demand, whenever and wherever it suits them.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                6
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Connection</h4>
                <p className="text-gray-700">
                  Beyond the lessons, users have the opportunity to connect with other teachers in the same situation. This fosters a supportive community for sharing insights, challenges, and successes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mr-4">
                7
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
                <p className="text-gray-700">
                  Our content is expertly curated, tool-focused, and continuously refined to stay ahead of the curve, based on user feedback. This ensures that the learning experience remains relevant and cutting-edge.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LearningTopicsPage;