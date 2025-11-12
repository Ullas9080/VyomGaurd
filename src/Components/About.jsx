import React from "react";
import { FaRocket, FaShieldAlt, FaRobot } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaRocket />,
      text: "VyomGarud is redefining aerial defense and surveillance with next-generation UAV systems built for precision, reliability, and intelligence. We specialize in developing autonomous drone platforms capable of executing complex missions in the most challenging environments.",
    },
    {
      icon: <FaShieldAlt />,
      text: "With advanced AI-driven navigation and military-grade engineering, our solutions empower defense and industrial sectors to achieve unmatched situational awareness and operational efficiency.",
    },
    {
      icon: <FaRobot />,
      text: "Our systems integrate futuristic AI capabilities, real-time data analysis, and autonomous decision-making to stay ahead in the defense and industrial sectors.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#1a1a1a] px-6 sm:px-16 py-24 flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-16 text-center">
        About <span className="text-[#ff7b00]">VyomGarud</span>
      </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
  {cards.map((card, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-br from-[#2c2c2c] to-[#1f1f1f] border border-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 flex flex-col items-start"
    >
      <div className="text-[#ff7b00] text-5xl mb-4">{card.icon}</div>
      <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">{card.text}</p>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#ff7b00] rounded-full opacity-80"></div>
    </div>
  ))}
</div>

    </section>
  );
};

export default About;
