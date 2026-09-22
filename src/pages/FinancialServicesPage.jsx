import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  FileText, 
  ShieldCheck, 
  Receipt, 
  Calculator, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

export default function FinancialServicesPage() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    const element = document.getElementById('capabilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      title: 'Full-Scope Bookkeeping & Ledger',
      icon: Calculator,
      desc: 'Accurate record keeping, bank reconciliation, expense categorizing, and real-time trial balance reporting.',
      deliverables: ['Daily Ledger Posting', 'Bank Reconciliation', 'Monthly Profit & Loss', 'Trial Balance Sync']
    },
    {
      title: 'Billing & Invoice Automation',
      icon: Receipt,
      desc: 'Accounts receivable/payable management, automated recurring invoicing, and collection tracking.',
      deliverables: ['Automated Invoicing', 'Accounts Receivable Control', 'Vendor Payment Processing', 'Dispute Resolution']
    },
    {
      title: 'Tax Advisory & Compliance',
      icon: FileText,
      desc: 'Statutory tax filings, corporate tax optimization, annual audits, and regulatory compliance.',
      deliverables: ['Quarterly Tax Filings', 'Statutory Audit Prep', 'Corporate Tax Advisory', 'Regulatory Compliance']
    },
    {
      title: 'Enterprise Risk Management',
      icon: ShieldCheck,
      desc: 'Financial risk audits, internal controls implementation, and fraud prevention frameworks.',
      deliverables: ['Risk Exposure Audits', 'Internal Controls Setup', 'Cash Flow Forecasting', 'Fraud Protection']
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* Infosys Subpage Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#18253c] via-[#e2ebf7] to-[#f8fafc]">
        
        {/* Abstract 3D Glass Light Rings Background Effect */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] border-[30px] border-white/40 rounded-full blur-xl scale-125" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[250px] border-[20px] border-sky-200/50 rounded-full blur-lg rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white">Financial Services</span>
          </div>

          {/* Center Category Pill Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-md bg-[#0c1529] text-white text-xs font-extrabold uppercase tracking-widest shadow-lg border border-white/10">
              <Landmark className="w-3.5 h-3.5 text-[#00a3e0]" />
              <span>Financial Advisory Vertical</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight">
              Financial Advisory & Billing Control
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Ensure uncompromised accounting accuracy, streamlined accounts receivable, and complete statutory tax compliance for your enterprise.
            </p>

            {/* Read More / Explore Action Button */}
            <div className="pt-2 flex justify-center">
              <button 
                onClick={toggleReadMore}
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#121927] hover:bg-[#007cc3] text-white font-bold text-sm shadow-2xl transition-all hover:scale-105 group cursor-pointer"
              >
                <span>{isExpanded ? 'Hide Detailed Overview' : 'Read More'}</span>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
              </button>
            </div>
          </div>

          {/* Bottom Segmented Carousel Indicator Bars */}
          <div className="mt-16 flex items-center justify-center space-x-4 max-w-md mx-auto">
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
            <div className="w-36 h-2 rounded-full bg-[#007cc3] shadow-md shadow-[#007cc3]/40" />
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
          </div>

        </div>
      </section>

      {/* Expanded Detailed Overview Section when Read More is Clicked */}
      {isExpanded && (
        <section className="py-12 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-[#0b1730] to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-8 border border-cyan-500/30">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs font-black uppercase text-cyan-400 tracking-widest block mb-1">
                    Operational Specifications & SLA Framework
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Financial Governance & Accounting Delivery Roadmap
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-xs font-extrabold text-cyan-300 shrink-0">
                  SLA Guaranteed: 100% Tax Accuracy
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#007cc3]/20 text-cyan-400 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-extrabold text-base text-white">Daily Ledger & Reconciliation</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated bank statement feeds, daily transaction categorizing, vendor payment matching, and real-time trial balance sync.
                  </p>
                </div>

                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#007cc3]/20 text-cyan-400 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-extrabold text-base text-white">Invoice Automation & Collections</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recurring invoice generation, multi-currency receivables tracking, automated payment reminders, and dispute resolution.
                  </p>
                </div>

                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#007cc3]/20 text-cyan-400 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-extrabold text-base text-white">Statutory Tax & Audit Support</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Quarterly GST/VAT filings, corporate tax planning, statutory audit documentation, and financial risk mitigation frameworks.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Software Compatible (QuickBooks, SAP, Xero, Tally)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Dedicated Accounting Manager Support</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      <div id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Professional Hero Image Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-200 group">
          <img 
            src="/assets/finance_sector_main.jpg" 
            alt="Suntech Financial Advisory & Audit Team"
            className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl text-white">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-[#00a3e0]">100%</div>
                <div className="text-[11px] text-slate-200 font-medium">Audit Compliance Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-emerald-400">$100M+</div>
                <div className="text-[11px] text-slate-200 font-medium">Invoices Reconciled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-white">0%</div>
                <div className="text-[11px] text-slate-200 font-medium">Filing Error Margin</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-[#00a3e0]">24/7</div>
                <div className="text-[11px] text-slate-200 font-medium">Financial Desk Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#007cc3] transition-all space-y-5 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007cc3] to-[#00a3e0] text-white flex items-center justify-center font-bold shadow-md shadow-[#007cc3]/20 group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#007cc3] transition-colors">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-extrabold text-[#007cc3] uppercase tracking-wider block">Key Deliverables:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#007cc3] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#007cc3] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl text-white">
          <Sparkles className="w-10 h-10 text-white mx-auto animate-bounce" />
          <h2 className="text-2xl sm:text-4xl font-black text-white">Optimize Your Financial Workflows</h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium max-w-xl mx-auto">
            Schedule a confidential consultation with our principal accounting specialist.
          </p>
          <div className="pt-2">
            <Link
              to="/support"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-xl hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#00a3e0]" />
              <span>Contact Financial Desk</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
