import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Careers', path: '/careers' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 shadow-md ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Far Left: Circular Menu Icon + Official Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 flex items-center justify-center shadow-sm transition-transform hover:scale-105 border border-slate-200 focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>

            <Link to="/" className="flex items-center group">
              <img 
                src="/suntech_official_logo.jpg" 
                alt="Suntech Solutions Logo" 
                className="h-11 sm:h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Center Navigation Container (Clean White Line Style) */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-200 shadow-inner">
            {navLinks.map((link) => {
              const isServicesActive = link.path === '/services' 
                ? ['/services', '/digital-marketing', '/finance-sector', '/online-marketplace', '/backend-support'].includes(location.pathname)
                : location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                    isServicesActive
                      ? 'bg-[#007cc3] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#007cc3] hover:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Contact Us Action Button */}
          <div className="flex items-center space-x-3">
            <Link
              to="/support"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007cc3] text-white font-bold text-xs shadow-md transition-all hover:scale-105 group"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-200 text-slate-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-xs font-bold ${
                location.pathname === link.path 
                  ? 'bg-[#007cc3]/10 text-[#007cc3] border border-[#007cc3]/30' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name} Page
            </Link>
          ))}

          <div className="pt-3">
            <Link
              to="/support"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-[#007cc3] to-[#00a3e0] text-white font-extrabold text-xs shadow-lg"
            >
              <span>Contact Support Desk</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
