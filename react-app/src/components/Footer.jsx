import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-primary-400 mb-4">Cod Sprint</h3>
          <p className="text-gray-400 leading-relaxed">
            Professional Front-End Design & Shopify Store Specialists. Creating beautiful, responsive websites and stunning Shopify stores.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-primary-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/frontend" className="text-gray-400 hover:text-primary-400 transition">
                Front-End Development
              </Link>
            </li>
            <li>
              <Link to="/shopify" className="text-gray-400 hover:text-primary-400 transition">
                Shopify Design
              </Link>
            </li>
            <li>
              <Link to="/logo" className="text-gray-400 hover:text-primary-400 transition">
                Logo Design
              </Link>
            </li>
            <li>
              <Link to="/video" className="text-gray-400 hover:text-primary-400 transition">
                Video Editing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-primary-400 mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div>
              <p className="text-gray-400">Email:</p>
              <a href="mailto:mahmoud.m.fci@gmail.com" className="text-primary-400 hover:text-primary-300 transition">
                mahmoud.m.fci@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-400">Phone:</p>
              <a href="tel:+2001017298143" className="text-primary-400 hover:text-primary-300 transition">
                +20 01017298143
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition">
                GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; 2024 Cod Sprint. All rights reserved.</p>
      </div>
    </footer>
  );
}
