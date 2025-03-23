import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/20 border-b border-white/30 shadow-md">
      <div className="sm:px-20 flex items-center justify-between">
        <Link
          to="/"
          className="m-4 text-2xl font-bold text-orange-600 font-dynapuff tracking-wide"
        >
          Logo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li>
            <a
              href="#"
              className="p-4 text-gray-600 font-semibold hover:text-orange-600 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="p-4 text-gray-600 font-semibold hover:text-orange-600 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="p-4 text-gray-600 font-semibold hover:text-orange-600 transition duration-300"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#location"
              className="p-4 text-gray-600 font-semibold hover:text-orange-600 transition duration-300"
            >
              Location
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="p-4 text-gray-600 font-semibold hover:text-orange-600 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden m-2 p-2 text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden transition-all bg-white text-center duration-1000 backdrop-blur-0 overflow-hidden ${
            isOpen ? "h-fit" : "h-0"
          }`}
        >
          <li>
            <a
              href="#"
              className="block py-2 text-lg font-medium hover:bg-orange-100 hover:text-orange-600 transition duration-300 border-b"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-lg font-medium hover:bg-orange-100 hover:text-orange-600 transition duration-300 border-b"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="block py-2 text-lg font-medium hover:bg-orange-100 hover:text-orange-600 transition duration-300 border-b"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#location"
              className="block py-2 text-lg font-medium hover:bg-orange-100 hover:text-orange-600 transition duration-300 border-b"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
