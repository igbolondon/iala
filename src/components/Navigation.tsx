import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/news", label: "News" },
    { path: "/gallery", label: "Gallery" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#007A33] fill-current" />
            <div className="flex flex-col">
              <span className="font-bold text-[#007A33] text-lg leading-tight">
                IALA
              </span>
              <span className="text-xs text-gray-600 leading-tight">
                London & Area
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? "text-[#007A33] bg-green-50 border-b-2 border-[#007A33]"
                    : "text-gray-700 hover:text-[#007A33] hover:bg-green-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-[#007A33] text-white px-4 py-2 rounded-md font-medium hover:bg-green-700"
            >
              Donate
            </Link>
            <Link
              to="/login"
              className="border border-[#007A33] text-[#007A33] px-4 py-2 rounded-md font-medium hover:bg-[#007A33] hover:text-white"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-[#007A33] hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(path)
                      ? "text-[#007A33] bg-green-50"
                      : "text-gray-700 hover:text-[#007A33] hover:bg-green-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-[#007A33] text-white px-3 py-2 rounded-md font-medium hover:bg-green-700 mt-4"
              >
                Donate
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block border border-[#007A33] text-[#007A33] px-3 py-2 rounded-md font-medium hover:bg-[#007A33] hover:text-white mt-2 text-center"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
