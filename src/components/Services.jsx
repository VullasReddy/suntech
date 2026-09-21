import React, { useState } from 'react';
import { 
  TrendingUp, 
  Landmark, 
  ShoppingBag, 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe2
} from 'lucide-react';

export default function Services({ selectedService, onOpenContact, onOpenServiceModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const servicesData = [
    {
      id: 'digital-marketing',
      category: 'marketing',
      title: 'Digital Marketing & Growth',
      badge: 'Performance Vertical',
      stat: '+3.4x Average ROI Growth',
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-600',
      description: 'Data-driven SEO, performance PPC campaigns, social media management, brand positioning, and conversion rate optimization.',
      features: [
        'Search Engine Optimization (SEO & Local SEO)',
        'PPC & Ad Funnel Optimization (Google, Meta, LinkedIn)',
        'Social Media Content Strategy & Engagement',
        'Conversion Rate Optimization (CRO & Funnel Audit)',
        'Brand Identity & Growth Analytics Dashboard'
      ],
      highlights: ['SEO Audits', 'Paid Media', 'Growth Hacking']
    },
    {
      id: 'finance-services',
      category: 'finance',
      title: 'Financial Services & Advisory',
      badge: 'Compliance & Audit',
      stat: '100% Tax & SLA Compliance',
      icon: Landmark,
      color: 'from-blue-600 to-indigo-600',
      description: 'Strategic financial management, billing control, ledger bookkeeping, tax compliance advisory, and cash flow forecasting.',
      features: [
        'Full-Scope Bookkeeping & Ledger Maintenance',
        'Billing Operations & Accounts Receivable Control',
        'Tax Advisory, Filing & Statutory Reporting',
        'Cash Flow Forecasting & Budget Advisory',
        'Enterprise Risk Assessment & Audit Management'
      ],
      highlights: ['Bookkeeping', 'Tax Advisory', 'Billing Control']
    },
    {
      id: 'online-marketplace',
      category: 'ecommerce',
      title: 'Online Marketplace Integration',
      badge: 'Multichannel Scale',
      stat: '99.8% Catalog Sync Rate',
      icon: ShoppingBag,
      color: 'from-emerald-500 to-teal-600',
      description: 'End-to-end e-commerce store onboarding, product listing SEO, automated inventory sync, and multi-platform fulfillment.',
      features: [
        'Amazon, Flipkart, Shopify & Global Store Setup',
        'Product Cataloging, A+ Content & SEO Copywriting',
        'Real-time Inventory & Order Syncing',
        'Reputation & Review Management Systems',
        'Multichannel Sales Acceleration Strategy'
      ],
      highlights: ['Amazon/Shopify', 'Catalog SEO', 'Inventory Sync']
    },
    {
      id: 'backend-support',
      category: 'operations',
      title: 'Backend Operations & Desk',
      badge: '24/7 Operations Desk',
      stat: '< 5 min Response SLA',
      icon: Headphones,
      color: 'from-purple-500 to-pink-600',
      description: 'Round-the-clock backend operations, customer care desks (Voice/Chat/Email), data processing, and virtual assistance.',
      features: [
        'Inbound & Outbound Customer Desk (Omnichannel)',
        'High-Speed Data Entry, Cleansing & Catalog Processing',
        'Dedicated Virtual Administrative Assistance',
        'Helpdesk Ticketing & Level 1/2 Support',
        'Back-Office Workflow Automation'
      ],
      highlights: ['Customer Care', 'Data Cleansing', 'Virtual Assistants']
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel text-xs font-bold tracking-wider text-cyan-400 uppercase border border-cyan-500/30">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Enterprise Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Solutions for <span className="text-gradient-cyan">Global Scale</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Choose from specialized operational pillars built to optimize workflow efficiency, enhance market share, and maximize enterprise profitability.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { id: 'all', label: 'All Operations' },
            { id: 'marketing', label: 'Digital Marketing' },
            { id: 'finance', label: 'Financial Advisory' },
            { id: 'ecommerce', label: 'Online Marketplace' },
            { id: 'operations', label: 'Backend Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            const isHighlighted = selectedService === service.id;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between ${
                  isHighlighted 
                    ? 'glass-panel-glow scale-[1.02]' 
                    : 'glass-card hover:border-cyan-500/40'
                }`}
              >
                <div>
                  {/* Card Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <span className="block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {service.badge}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 mt-1 block">
                        {service.stat}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.highlights.map((h, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-semibold border border-white/5">
                        #{h}
                      </span>
                    ))}
                  </div>

                  {/* Key Scope List */}
                  <div className="space-y-3 mb-8 bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Deliverables & Scope
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenServiceModal(service)}
                    className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 space-x-1 group"
                  >
                    <span>Full Specification</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white text-xs font-bold transition-all border border-white/10 shadow-sm"
                  >
                    Get Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
