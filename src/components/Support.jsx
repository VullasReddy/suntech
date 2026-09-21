import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Headphones, Mail, Phone, Clock, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Support() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'digital-marketing',
    message: ''
  });

  useEffect(() => {
    if (location.state?.jobTitle) {
      setFormData((prev) => ({
        ...prev,
        service: 'career-application',
        message: `Applying for Position: ${location.state.jobTitle}${location.state.dept ? ` (${location.state.dept} Department)` : ''}`
      }));
    }
  }, [location.state]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'digital-marketing',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="support" className="py-20 sm:py-28 relative z-10 bg-gradient-to-br from-[#007cc3] via-[#00a3e0] to-[#0056b3] text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-extrabold text-white uppercase tracking-wider border border-white/20 shadow-sm">
            <Headphones className="w-4 h-4 text-sky-200" />
            <span>24/7 Global Support Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our <span className="text-sky-200 underline decoration-sky-300 decoration-wavy decoration-2">Support Team</span>
          </h1>
          <p className="text-sky-50/90 text-base leading-relaxed">
            Have a project in mind or need dedicated backend assistance? Send us your requirements and our representative will reach out within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Info Side Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operational Contact Points */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-sky-200 shadow-xl text-slate-900">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-900">Operational Contacts</h3>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-sky-50 text-[#007cc3] border border-sky-200">
                  Active Now
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-sky-50 text-[#007cc3] border border-sky-200 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Consultation</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">info@suntechorganization.com</p>
                  <p className="text-xs text-slate-600 font-medium">support@suntechorganization.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-blue-50 text-[#0056b3] border border-blue-200 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Client Desk</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">+1 (800) 555-SUNTECH</p>
                  <p className="text-xs text-slate-600 font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-sky-50 text-[#007cc3] border border-sky-200 shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Support SLA</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">24/7 Operations Coverage</p>
                  <p className="text-xs text-[#007cc3] font-extrabold mt-1 inline-block px-2.5 py-0.5 bg-sky-50 rounded-md border border-sky-200">
                    Guaranteed &lt; 2hr Initial Response
                  </p>
                </div>
              </div>
            </div>

            {/* Discovery CTA Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#007cc3]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-xl bg-[#007cc3]/20 text-[#00a3e0] border border-[#007cc3]/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-white">Ready for Rapid Scaling?</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Schedule a one-on-one discovery call with our solutions architect to discuss custom SLA packages.
              </p>
              <div className="flex items-center space-x-2 text-[11px] text-[#00a3e0] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise SLA Guarantee</span>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-200 shadow-2xl text-slate-900 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Suntech Solution. Our business development specialist will contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Request a Custom Proposal</h3>
                    <p className="text-xs text-slate-500 mt-1">Fill in the details below to receive a response from our team.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">Primary Interest *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium"
                      >
                        <option value="digital-marketing">Digital Marketing Services</option>
                        <option value="finance-services">Financial Advisory & Billing</option>
                        <option value="online-marketplace">Online Marketplace Scaling</option>
                        <option value="backend-support">Backend Operational Support</option>
                        <option value="career-application">Career Job Application</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">Message / Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your organization and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all resize-none font-medium placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007cc3] text-white font-extrabold text-sm shadow-xl shadow-[#007cc3]/30 hover:shadow-[#007cc3]/50 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
