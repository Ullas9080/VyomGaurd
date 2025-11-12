import React from "react";

const Card = ({ title, text, icon }) => (
  <div className="relative bg-[#2a2a2a] border border-gray-700 rounded-2xl p-6 flex flex-col items-start shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 w-full sm:w-80">
    {icon && <div className="text-[#ff7b00] text-4xl mb-4">{icon}</div>}
    {title && <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>}
    <p className="text-gray-300 text-base leading-relaxed">{text}</p>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#ff7b00] rounded-full opacity-70"></div>
  </div>
);

export default Card;
