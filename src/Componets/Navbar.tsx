import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center cursor-pointer">
          <img src={logo} alt="Dev Stack Logo" className="w-28" />
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href="" className="text-pink-500 font-medium">
            Home
          </a>

          <a href="" className="text-gray-500 hover:text-pink-500">
            Technologies
          </a>

          <a href="" className="text-gray-500 hover:text-pink-500">
            Projects
          </a>

          <a href="" className="text-gray-500 hover:text-pink-500">
            About
          </a>

          <a href="" className="text-gray-500 hover:text-pink-500">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-600 cursor-pointer">
            Sign In
          </button>

          <button className="text-sm text-white px-5 py-2 rounded-full brand-gradient cursor-pointer">
            Sign Up
          </button>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            <img src={hamburger} alt="Menu" className="w-6 h-6" />
          </button>

          <img src={logo} alt="Dev Stack" className="w-24" />

          <div className="flex items-center gap-2">
            <button className="text-xs text-gray-600 cursor-pointer">
              Sign In
            </button>

            <button className="text-xs text-white px-3 py-1.5 rounded-full brand-gradient cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col px-4 py-4 gap-4 text-sm">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-pink-500 font-medium"
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-pink-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
