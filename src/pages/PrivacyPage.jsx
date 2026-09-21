import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 relative z-10 bg-grid-mesh max-w-4xl mx-auto px-4">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Legal Document</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: September 18, 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
          <h2 className="text-lg font-bold text-white">1. Data Collection & Usage</h2>
          <p>
            Suntech Solution Organization respects your privacy. We collect client contact details, company information, and operational requirements solely to provide digital marketing, financial advisory, e-commerce marketplace, and backend support services.
          </p>

          <h2 className="text-lg font-bold text-white">2. Confidentiality & Security Controls</h2>
          <p>
            All data transmitted through our online portals is encrypted using industry-standard SSL protocols. We do not sell, rent, or distribute personal or corporate information to third parties.
          </p>

          <h2 className="text-lg font-bold text-white">3. Cookies & Analytics</h2>
          <p>
            Our website uses minimal operational cookies to enhance navigation and measure performance. You can adjust your browser settings to decline cookies at any time.
          </p>

          <h2 className="text-lg font-bold text-white">4. Contact Information</h2>
          <p>
            For privacy inquiries or data requests, please contact our legal desk at <a href="mailto:privacy@suntechorganization.com" className="text-cyan-400 underline">privacy@suntechorganization.com</a>.
          </p>
        </div>

        <div className="pt-6">
          <Link to="/" className="px-5 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
