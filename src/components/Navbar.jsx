import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'card-gradient  shadow-lg shadow-blue-500/10' : ''}`}>
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="material-icons text-4xl text-blue-400 transition-all duration-300 group-hover:scale-110">
                code
              </span>
              <div className="absolute inset-0 w-9 h-9 bg-blue-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient">
              DevPortfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'active bg-linear-to-r from-blue-500/20 to-purple-500/20' 
                    : 'hover:bg-linear-to-r hover:from-blue-500/10 hover:to-purple-500/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-4"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="material-icons">light_mode</span>
              ) : (
                <span className="material-icons">dark_mode</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="material-icons">light_mode</span>
              ) : (
                <span className="material-icons">dark_mode</span>
              )}
            </button>
            <button
              className="p-2 text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <span className="material-icons">close</span>
              ) : (
                <span className="material-icons">menu</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="card-gradient p-4 mt-2 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-navlink flex items-center gap-3 rounded-xl transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500/20 hover:to-purple-500/20 ${
                  location.pathname === link.path 
                    ? 'bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                    : 'text-gray-300'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

