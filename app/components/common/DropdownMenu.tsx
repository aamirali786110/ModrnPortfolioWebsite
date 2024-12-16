"use client";

import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#0300145e] rounded-md shadow-lg py-1">
          <a href="#about-me" className="block px-4 py-2 text-gray-200 hover:bg-[#7042f861]">
            About me
          </a>
          <a href="#skills" className="block px-4 py-2 text-gray-200 hover:bg-[#7042f861]">
            Skills
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-200 hover:bg-[#7042f861]">
            Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
