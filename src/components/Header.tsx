import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Events', path: '/events' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Prime Production</h1>
              <p className="text-sm text-gray-600">Creative Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600 ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-red-50 hover:text-red-600 ${
                  location.pathname === item.path ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;