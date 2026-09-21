import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Shield, Lock, FileText, Globe, MessageSquare, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 relative z-10 shadow-2xl border-t-2 border-[#007cc3]/40 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info & Official Logo */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="block">
              <img 
                src="/suntech_official_logo.jpg" 
                alt="Suntech Solutions Official Logo" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs leading-relaxed max-w-sm font-normal text-slate-600">
              Suntech Solutions Organization delivers end-to-end digital marketing, financial advisory, e-commerce marketplace scaling, and 24/7 backend operations.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <Link to="/support" className="p-2.5 rounded-xl hover:text-[#007cc3] hover:border-[#007cc3]/40 border border-slate-200 bg-slate-50 text-slate-600 transition-colors" title="Global Portal">
                <Globe className="w-4 h-4" />
              </Link>
              <Link to="/support" className="p-2.5 rounded-xl hover:text-[#007cc3] hover:border-[#007cc3]/40 border border-slate-200 bg-slate-50 text-slate-600 transition-colors" title="Contact Us">
                <Mail className="w-4 h-4" />
              </Link>
              <Link to="/support" className="p-2.5 rounded-xl hover:text-[#007cc3] hover:border-[#007cc3]/40 border border-slate-200 bg-slate-50 text-slate-600 transition-colors" title="Support Desk">
                <MessageSquare className="w-4 h-4" />
              </Link>
              <Link to="/support" className="p-2.5 rounded-xl hover:text-[#007cc3] hover:border-[#007cc3]/40 border border-slate-200 bg-slate-50 text-slate-600 transition-colors" title="Direct Phone">
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation Pages */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest border-b border-slate-200 pb-2 text-slate-900">
              Navigation Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/" className="hover:text-[#007cc3] transition-colors text-slate-700">Home Page</Link></li>
              <li><Link to="/services" className="hover:text-[#007cc3] transition-colors text-slate-700">Services Overview</Link></li>
              <li><Link to="/leadership" className="hover:text-[#007cc3] transition-colors text-slate-700">Leadership Team</Link></li>
              <li><Link to="/careers" className="hover:text-[#007cc3] transition-colors text-slate-700">Careers Portal</Link></li>
              <li><Link to="/support" className="hover:text-[#007cc3] transition-colors text-slate-700">24/7 Support Desk</Link></li>
            </ul>
          </div>

          {/* Dedicated Service Pages */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest border-b border-slate-200 pb-2 text-slate-900">
              Dedicated Verticals
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/digital-marketing" className="hover:text-[#007cc3] transition-colors text-slate-700">Digital Marketing Page</Link></li>
              <li><Link to="/finance-sector" className="hover:text-[#007cc3] transition-colors text-slate-700">Financial Advisory Page</Link></li>
              <li><Link to="/online-marketplace" className="hover:text-[#007cc3] transition-colors text-slate-700">Online Marketplace Page</Link></li>
              <li><Link to="/backend-support" className="hover:text-[#007cc3] transition-colors text-slate-700">Backend Support Page</Link></li>
            </ul>
          </div>

          {/* Legal / Policy Pages */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest border-b border-slate-200 pb-2 text-slate-900">
              Legal Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/privacy" className="hover:text-[#007cc3] transition-colors flex items-center space-x-1.5 text-slate-700">
                  <Shield className="w-3.5 h-3.5 text-[#007cc3]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#007cc3] transition-colors flex items-center space-x-1.5 text-slate-700">
                  <FileText className="w-3.5 h-3.5 text-[#007cc3]" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-[#007cc3] transition-colors flex items-center space-x-1.5 text-slate-700">
                  <Lock className="w-3.5 h-3.5 text-[#007cc3]" />
                  <span>Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Suntech Solutions Organization. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#0f172a] hover:bg-[#007cc3] text-white transition-all shadow-lg"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
