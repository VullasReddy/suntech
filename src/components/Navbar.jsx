import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Search, Sparkles } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a1224]/95 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-2xl' 
        : 'bg-gradient-to-b from-[#060c1a]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Far Left: Infosys Style Circular Menu Icon + Official Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 border border-white/20 focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>

            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-white px-3.5 py-1.5 rounded-2xl shadow-md flex items-center space-x-2.5 border border-slate-200 group-hover:scale-105 transition-transform">
                <img 
                  src="/suntech_official_logo.jpg" 
                  alt="Suntech Solutions Logo" 
                  className="h-8 sm:h-9 w-auto object-contain rounded-lg"
                />
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Suntech
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Floating Pill Container (Infosys Glass Capsule) */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#1c2942]/75 backdrop-blur-lg px-6 py-2 rounded-full border border-white/15 shadow-2xl">
            {navLinks.map((link) => {
              const isServicesActive = link.path === '/services' 
                ? ['/services', '/digital-marketing', '/finance-sector', '/online-marketplace', '/backend-support'].includes(location.pathname)
                : location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isServicesActive
                      ? 'bg-white/20 text-white font-extrabold shadow-sm border border-white/30 backdrop-blur-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
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
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007cc3] text-white font-bold text-xs shadow-xl backdrop-blur-md transition-all hover:scale-105 group"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A192F] border-t border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-xs font-bold ${
                location.pathname === link.path 
                  ? 'bg-[#007cc3]/30 text-[#00a3e0] border border-[#007cc3]/50' 
                  : 'text-slate-200 hover:bg-slate-800/80'
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
