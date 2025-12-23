import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      {/* Pill-shaped floating navbar */}
      <nav
        className={`max-w-4xl mx-auto bg-brutal-white border-3 border-brutal-black rounded-full shadow-brutal transition-all duration-300 ${isScrolled ? 'shadow-brutal-sm' : 'shadow-brutal'
          }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="font-black text-2xl tracking-tight text-brutal-black hover:text-brutal-pink transition-colors"
            aria-label="CROFT Home"
          >
            CROFT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-bold text-sm transition-all rounded-full ${isActive(link.path)
                    ? 'bg-brutal-yellow text-brutal-black'
                    : 'text-brutal-black hover:bg-brutal-pink'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2 font-bold text-sm bg-brutal-black text-white border-3 border-brutal-black rounded-full hover:bg-neutral-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-brutal-yellow transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-1 bg-brutal-black transition-all duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-1 bg-brutal-black transition-all duration-300 rounded-full ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-1 bg-brutal-black transition-all duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-3 border-brutal-black bg-brutal-white rounded-b-3xl">
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 font-bold text-lg rounded-xl transition-colors ${isActive(link.path)
                      ? 'bg-brutal-yellow text-brutal-black'
                      : 'text-brutal-black hover:bg-brutal-pink'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-brutal-black text-white px-6 py-4 font-bold text-lg rounded-xl hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
