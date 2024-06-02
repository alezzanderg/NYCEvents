"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border border-gray-300 rounded-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold text-black">
          NYC Events Solution
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-black hover:text-primary">Home</a>
          </Link>
          <Link href="/#services" legacyBehavior>
            <a className="text-black hover:text-primary">Services</a>
          </Link>
          <Link href="/#about" legacyBehavior>
            <a className="text-black hover:text-primary">About</a>
          </Link>
          <Link href="/#contact" legacyBehavior>
            <a className="text-black hover:text-primary">Contact</a>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-3">
            <Link href="/" legacyBehavior>
              <a className="text-black hover:text-primary" onClick={toggleMenu}>Home</a>
            </Link>
            <Link href="/#services" legacyBehavior>
              <a className="text-black hover:text-primary" onClick={toggleMenu}>Services</a>
            </Link>
            <Link href="/#about" legacyBehavior>
              <a className="text-black hover:text-primary" onClick={toggleMenu}>About</a>
            </Link>
            <Link href="/#contact" legacyBehavior>
              <a className="text-black hover:text-primary" onClick={toggleMenu}>Contact</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
