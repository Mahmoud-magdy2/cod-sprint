import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary-500">Cod Sprint</div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-primary-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/frontend" className="text-gray-700 hover:text-primary-500 transition">
              Front-End
            </Link>
          </li>
          <li>
            <Link to="/shopify" className="text-gray-700 hover:text-primary-500 transition">
              Shopify
            </Link>
          </li>
          <li>
            <Link to="/logo" className="text-gray-700 hover:text-primary-500 transition">
              Logo Design
            </Link>
          </li>
          <li>
            <Link to="/video" className="text-gray-700 hover:text-primary-500 transition">
              Video Editing
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800 block"></span>
          <span className="w-6 h-0.5 bg-gray-800 block"></span>
          <span className="w-6 h-0.5 bg-gray-800 block"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link to="/" className="text-gray-700 hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/frontend" className="text-gray-700 hover:text-primary-500">
                  Front-End
                </Link>
              </li>
              <li>
                <Link to="/shopify" className="text-gray-700 hover:text-primary-500">
                  Shopify
                </Link>
              </li>
              <li>
                <Link to="/logo" className="text-gray-700 hover:text-primary-500">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link to="/video" className="text-gray-700 hover:text-primary-500">
                  Video Editing
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-primary-500 font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
