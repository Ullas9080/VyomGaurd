import React from "react";
import Card from "../Card/Card";
import { FaRocket, FaRobot, FaSatellite, FaShieldAlt } from "react-icons/fa";

const Capabilities = () => {
  const capabilityCards = [
    {
      title: "Autonomous UAVs",
      text: "High-precision drones capable of autonomous missions in extreme conditions.",
      icon: <FaRocket />,
    },
    {
      title: "AI Navigation",
      text: "Futuristic AI-driven navigation systems for optimized performance.",
      icon: <FaRobot />,
    },
    {
      title: "Surveillance Systems",
      text: "Military-grade surveillance and reconnaissance platforms.",
      icon: <FaSatellite />,
    },
    {
      title: "Security Solutions",
      text: "Advanced defense solutions with real-time situational awareness.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="bg-[#1a1a1a] px-6 sm:px-16 py-24 flex flex-col items-center gap-12 min-h-screen">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-12 text-center">
        Capabilities / <span className="text-[#ff7b00]">Products</span>
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
  {capabilityCards.map((item, index) => (
    <div
      key={index}
      className="bg-gradient-to-tl from-[#1f2937] to-[#111827] border border-gray-600 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex flex-col items-start transition duration-300"
    >
      <div className="text-[#ff7b00] text-4xl mb-3">{item.icon}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-300 text-base">{item.text}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Capabilities;

