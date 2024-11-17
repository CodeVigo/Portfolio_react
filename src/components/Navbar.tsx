import { Menu, X, Home, User, Code, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About', icon: User },
    { path: '/projects', name: 'Projects', icon: Code },
    { path: '/contact', name: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-indigo-600">Portfolio</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 transition-colors duration-200 hover:text-indigo-600 ${
                  isActive(path) ? 'text-indigo-600' : 'text-gray-600'
                }`}
              >
                <Icon size={18} />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm">
            {links.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive(path) ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}