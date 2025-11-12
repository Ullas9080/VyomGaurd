import React from "react";
import { FaCheck } from "react-icons/fa";

const Highlights = () => {
  const features = [
    "Precision targeting and autonomous mission execution",
    "AI-powered navigation for extreme conditions",
    "Military-grade engineering and surveillance",
  ];

  return (
    <section
      id="highlights"
      className="bg-[#0d0d0d] text-white py-24 px-6 sm:px-16 flex flex-col items-center gap-12"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 text-center">
        Highlights
      </h2>

      <div className="flex flex-col sm:flex-row gap-8 max-w-5xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex-1"
          >
            <FaCheck className="text-[#ff7b00] mt-1 text-2xl sm:text-3xl" />
            <span className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
