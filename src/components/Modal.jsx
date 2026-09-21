import React, { useState } from 'react';
import { X, CheckCircle, Send, Shield, FileText } from 'lucide-react';

export default function Modal({ isOpen, onClose, modalType, data, onOpenContact }) {
  const [applied, setApplied] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', exp: '' });

  if (!isOpen) return null;

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SERVICE MODAL */}
        {modalType === 'service' && data && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {data.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{data.description}</p>

            <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-white/5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Service Scope & Deliverables</h4>
              {data.features.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        )}

        {/* JOB APPLY MODAL */}
        {modalType === 'job' && data && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Apply for {data.title}</h3>
            <p className="text-xs text-cyan-400 font-semibold">{data.dept} • {data.location}</p>

            {applied ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Application Submitted!</h4>
                <p className="text-xs text-slate-300">Our HR team will review your application.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Experience (Years)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3 years in digital marketing"
                    value={applicant.exp}
                    onChange={(e) => setApplicant({ ...applicant, exp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg mt-2"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        )}

        {/* LEGAL MODAL */}
        {modalType === 'legal' && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white capitalize">{data} Policy</h3>
            <div className="text-xs text-slate-300 leading-relaxed space-y-3 max-h-96 overflow-y-auto pr-2">
              <p>
                Suntech Solution Organization is committed to respecting privacy, ensuring transparent data governance, and maintaining strict enterprise compliance.
              </p>
              <p>
                All information collected via inquiry forms is strictly used for business communication and service delivery. We do not sell or share personal data with unauthorized third parties.
              </p>
              <p>
                Security controls and SSL encryption are implemented across all communications. For legal inquiries, please contact legal@suntechorganization.com.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-right">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
