
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" className="w-full fixed top-0 z-50 bg-neutral-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-2xl animate__animated animate__fadeIn">
              Bhupesh's<span className="text-blue-500">Portfolio</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              {/* <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a> */}
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button id="menu-btn" className="text-gray-300 hover:text-white" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-neutral-900/95 backdrop-blur-sm animate__animated animate__fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Experience</a>
            {/* <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Testimonials</a> */}
            <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;