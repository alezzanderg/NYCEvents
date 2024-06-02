import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner border-t border-gray-300 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/nyc.eventsolutions/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@tu_tiktok" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary">
            <FaTiktok size={24} />
          </a>
        </div>
        <p className="text-gray-700">&copy; 2024 NYC Events Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
