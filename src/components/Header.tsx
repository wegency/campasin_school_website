'use client'; // Add this to indicate that the file uses client-side logic

import React, { useState } from 'react';
import { FaSearch, FaLock } from 'react-icons/fa';
import { RiMenuLine } from 'react-icons/ri'; 
import Link from 'next/link';  // Import Next.js Link component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#001233] text-white py-4 px-6 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="School Logo" className="h-8" />
          <span className="text-xl font-semibold">School Name</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          <Link href="/academics" className="hover:text-gray-400 transition">Academics</Link>
          <Link href="/admissions" className="hover:text-gray-400 transition">Admissions</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>

        {/* Search and Menu Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-xl cursor-pointer hover:text-gray-400 transition" />
          <FaLock className="text-xl cursor-pointer hover:text-gray-400 transition" />
          
          {/* Mobile Menu Icon */}
          <RiMenuLine 
            className="md:hidden text-2xl cursor-pointer hover:text-gray-400" 
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" className="py-2 px-4 hover:bg-[#003366]">Home</Link>
          <Link href="/about" className="py-2 px-4 hover:bg-[#003366]">About</Link>
          <Link href="/academics" className="py-2 px-4 hover:bg-[#003366]">Academics</Link>
          <Link href="/admissions" className="py-2 px-4 hover:bg-[#003366]">Admissions</Link>
          <Link href="/contact" className="py-2 px-4 hover:bg-[#003366]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
