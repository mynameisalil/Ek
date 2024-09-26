import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../public/EK-Gaming-Logo-1.png';

const Navbar = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-rgb">
        <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="EK Gaming Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex items-center space-x-8 text-white text-lg">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-purple-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pc" className="hover:text-purple-400 transition duration-300">
                  PC
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="hover:text-purple-400 transition duration-300">
                  Accessories
                </Link>
              </li>
            </ul>

            <div>
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Masuk / Daftar
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
