import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="hidden md:flex items-center">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-28"
          />
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            About
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-600">
            Sign In
          </button>

          <button className="text-sm text-white px-5 py-2 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500">
            Sign Up
          </button>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <button className="text-gray-700 text-lg">
            <FaBars />
          </button>

          <img
            src={logo}
            alt="Dev Stack"
            className="w-24"
          />

          <div className="flex items-center gap-2">
            <button className="text-xs text-gray-600">
              Sign In
            </button>

            <button className="text-xs text-white px-3 py-1.5 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;