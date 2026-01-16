import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  // Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-green-600 fill-current" />
              <div className="flex flex-col">
                <span className="font-bold text-green-600 text-lg leading-tight">
                  IALA
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  London & Area
                </span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Building bridges, preserving culture, and strengthening the Igbo
              community in London, Ontario and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#007A33]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-[#007A33]">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[#007A33]">
                  News
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-[#007A33]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-[#007A33]">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>president@igbolondon.ca</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(226) 456-1607 or (226) 504-1598</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span><a href="https://maps.app.goo.gl/9fjNzsCTVV1sk7xR8" target="_blank">1476 Evans Blvd, London Ontario</a></span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/880616603488150" target="_blank" className="text-gray-300 hover:text-[#007A33]">
                <Facebook className="h-6 w-6" />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-300 hover:text-[#007A33]">
                <Instagram className="h-6 w-6" />
              </a> */}
              <a href="https://www.youtube.com/@igboiala2069" target="_blank" className="text-gray-300 hover:text-[#007A33]">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/newslettersoon"
                className="inline-block bg-[#007A33] text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 hover:scale-105"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Igbo Association of London and Area. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
