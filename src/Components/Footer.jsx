import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 px-6 sm:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
     
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-white">
            Vyom<span className="text-[#ff7b00]">Garud</span>
          </h2>
          <p className="text-gray-400 max-w-sm">
            Redefining aerial defense and surveillance with next-gen UAV systems.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="text-[#ff7b00] hover:text-white cursor-pointer transition" />
            <FaTwitter className="text-[#ff7b00] hover:text-white cursor-pointer transition" />
            <FaLinkedinIn className="text-[#ff7b00] hover:text-white cursor-pointer transition" />
          </div>
        </div>

 
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <a href="#about" className="hover:text-[#ff7b00] transition">About</a>
          <a href="#capabilities" className="hover:text-[#ff7b00] transition">Capabilities</a>
          <a href="#highlights" className="hover:text-[#ff7b00] transition">Highlights</a>
        </div>

 
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:border-[#ff7b00] text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#ff7b00] text-black font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VyomGarud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
