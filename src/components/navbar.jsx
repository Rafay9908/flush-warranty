import React, { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import footer_icon from "../assets/footer_icon.png";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-blue-100 py-4 rounded">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img src={footer_icon} alt="Flush Logo" className="w-25 h-25" />
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="bg-white rounded-full px-4 py-2 shadow-md flex gap-8 items-center">
            <nav className="flex gap-6 text-gray-800 font-semibold">
              <RouterLink to="/" smooth={true} duration={500} className="hover:text-blue-700 border-blue-700">Home</RouterLink>
              <RouterLink to="/about-us" className="hover:text-blue-700">About Us</RouterLink>
              <Link to="how-it-works" smooth={true} duration={500} className="hover:text-blue-700">How It Works</Link>
              <Link to="faq" smooth={true} duration={500} className="hover:text-blue-700">FAQ's</Link>
              <RouterLink to="/contact-us" className="hover:text-blue-700">Contact Us</RouterLink>
            </nav>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray-600 flex items-center gap-1">
              <Phone size={18} className="text-gray-600" /> (203)-707-8370
            </span>
            <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-blue-700">
              <User size={18} className="text-gray-600" /> My Account
            </a>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col gap-2 text-gray-800">
            <Link to="home" smooth={true} duration={500} className="hover:text-blue-700">Home</Link>
            <RouterLink to="/about-us" className="hover:text-blue-700">About Us</RouterLink>
            <Link to="how-it-works" smooth={true} duration={500} className="hover:text-blue-700">How It Works</Link>
            <Link to="faq" smooth={true} duration={500} className="hover:text-blue-700">FAQ's</Link>
            <RouterLink to="/contact-us" className="hover:text-blue-700">Contact Us</RouterLink>
            <div className="mt-2">
              <span className="block text-gray-600"><Phone size={18} /> (203)-707-8370</span>
              <a href="#" className="text-gray-600 hover:text-blue-700"><User size={18} /> My Account</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
