import React, { useState, useEffect } from 'react';
import verLogo from "../assets/verLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#057E47]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with white box */}
          <div className="flex-shrink-0 cursor-pointer bg-white  p-0.3 rounded-2xl shadow-lg">
            <img
              className="h-12"
              src={verLogo} // Placeholder for your logo
              alt="Logo"
            />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-white hover:scale-110 transition-transform duration-300 hover:text-gray-300 px-3 py-2 text-sm font-medium">ABOUT US</a>
              <a href="#products" className="text-white hover:scale-110 transition-transform duration-300 hover:text-gray-300 px-3 py-2 text-sm font-medium">PRODUCTS</a>
              <a href="#customization" className="text-white hover:scale-110 transition-transform duration-300 hover:text-gray-300 px-3 py-2 text-sm font-medium">CUSTOMIZATION</a>
              <a href="#news" className="text-white hover:scale-110 transition-transform duration-300 hover:text-gray-300 px-3 py-2 text-sm font-medium">NEWS</a>
              <a href="#contact" className="text-white hover:scale-110 transition-transform duration-300 hover:text-gray-300 px-3 py-2 text-sm font-medium">CONTACT US</a>
            </div>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (visible when open) */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4">
              <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">ABOUT US</a>
              <a href="#products" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">PRODUCTS</a>
              <a href="#customization" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">CUSTOMIZATION</a>
              <a href="#news" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">NEWS</a>
              <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">CONTACT US</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
