import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 relative z-10 bg-grid-mesh max-w-4xl mx-auto px-4">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase">
          <FileText className="w-4 h-4" />
          <span>Legal Document</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: September 18, 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
          <h2 className="text-lg font-bold text-white">1. Service Agreement</h2>
          <p>
            By accessing Suntech Solution Organization's services, you agree to comply with our enterprise terms, service SLAs, and operational guidelines.
          </p>

          <h2 className="text-lg font-bold text-white">2. Scope of Operational Services</h2>
          <p>
            Suntech provides digital marketing, financial billing advisory, e-commerce marketplace scaling, and 24/7 backend support as defined in individual client master service agreements (MSA).
          </p>

          <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
          <p>
            All custom deliverables created for clients remain the property of the respective client upon complete payment processing.
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
