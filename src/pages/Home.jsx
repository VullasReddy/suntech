import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { 
  TrendingUp, 
  Landmark, 
  ShoppingBag, 
  Headphones, 
  Users, 
  Briefcase, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Target,
  BarChart3,
  CheckCircle2,
  Globe2
} from 'lucide-react';

import Awards from '../components/Awards';

export default function Home() {
  const pageNavCards = [
    {
      title: 'Digital Marketing & Brand Growth',
      path: '/digital-marketing',
      icon: TrendingUp,
      badge: 'SEO & Ads',
      desc: 'Data-driven SEO audits, high-ROAS PPC ad funnels, social media scaling, and enterprise brand acquisition.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    },
    {
      title: 'Financial Services & Advisory',
      path: '/finance-sector',
      icon: Landmark,
      badge: 'Accounting & Risk',
      desc: 'Complete ledger bookkeeping, automated billing streams, tax compliance advisory, and cash flow modeling.',
      color: 'from-[#0056b3] to-[#007cc3]'
    },
    {
      title: 'Online Marketplace Scale',
      path: '/online-marketplace',
      icon: ShoppingBag,
      badge: 'E-Commerce Sync',
      desc: 'Multi-channel store onboarding across Amazon FBA & Shopify Plus, listing SEO, and inventory sync.',
      color: 'from-[#00a3e0] to-[#007cc3]'
    },
    {
      title: 'Backend Operations Desk',
      path: '/backend-support',
      icon: Headphones,
      badge: '24/7 Operations',
      desc: '24/7 customer care helpdesk, catalog processing, data cleansing, and virtual administrative support.',
      color: 'from-[#007cc3] to-[#0056b3]'
    },
    {
      title: 'Executive Leadership Team',
      path: '/leadership',
      icon: Users,
      badge: 'Governance',
      desc: 'Meet our Managing Director and General Manager guiding company vision and client success.',
      color: 'from-[#0056b3] to-[#00a3e0]'
    },
    {
      title: 'Careers & Opportunities',
      path: '/careers',
      icon: Briefcase,
      badge: 'Hiring',
      desc: 'Explore open roles, company culture perks, and apply directly to join our global specialist team.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    },
    {
      title: '24/7 Global Support Desk',
      path: '/support',
      icon: PhoneCall,
      badge: 'Client Portal',
      desc: 'Connect with our support specialists, request custom proposal packages, and verify SLA commitments.',
      color: 'from-[#00a3e0] to-[#0056b3]'
    }
  ];

  const valuePillars = [
    {
      icon: Zap,
      title: 'Rapid SLA Execution',
      desc: 'Guaranteed initial response in less than 2 hours with 24/7/365 operational desk coverage.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Governance',
      desc: 'Strict SSL security, data protection standards, and transparent bookkeeping practices.'
    },
    {
      icon: BarChart3,
      title: 'Performance Growth',
      desc: 'Proven multi-channel marketing strategies delivering measurable ROI and customer retention.'
    },
    {
      icon: Globe2,
      title: 'Global Delivery Desk',
      desc: 'Multilingual operational teams handling backend customer care and marketplace catalog operations.'
    }
  ];

  return (
    <div className="bg-[#030712] text-white selection:bg-[#007cc3] selection:text-white">
      
      {/* Hero Section - Infosys Corporate Dark Blue Theme */}
      <Hero />

      {/* Pillars of Excellence Section - TSI Tech Mesh & Dark Navy Theme */}
      <section className="py-24 bg-[#050C1E] border-t border-slate-800/80 relative z-10 overflow-hidden">
        
        {/* TSI Animated Background Mesh Orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-tr from-[#007cc3]/20 via-[#00a3e0]/10 to-transparent rounded-full blur-3xl animate-orb-1" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-bl from-[#0056b3]/25 via-[#38bdf8]/10 to-transparent rounded-full blur-3xl animate-orb-2" />
          <div className="absolute inset-0 bg-grid-mesh opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#007cc3]/20 text-xs font-extrabold text-[#00a3e0] uppercase border border-[#007cc3]/40 backdrop-blur-md shadow-lg">
              <Target className="w-4 h-4 text-[#00a3e0]" />
              <span>Why Choose Suntech</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Driven by <span className="bg-gradient-to-r from-[#00a3e0] via-[#38bdf8] to-[#007cc3] bg-clip-text text-transparent">Precision & Scale</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              We combine enterprise operational standards with agile execution to accelerate client growth worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valuePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#0B172E]/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#00a3e0] hover:bg-[#007cc3]/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#007cc3] to-[#00a3e0] text-white font-bold flex items-center justify-center mb-6 shadow-lg shadow-[#007cc3]/40 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#00a3e0] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center space-x-1.5 text-xs font-bold text-[#00a3e0]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Core Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Standalone Page Navigation Portal Grid - TSI Dark Portal Theme */}
      <section className="py-24 relative z-10 bg-[#030712] border-t border-slate-800 overflow-hidden">
        
        {/* TSI Floating Orb Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00a3e0]/15 via-[#007cc3]/10 to-transparent rounded-full blur-3xl animate-orb-1" />
          <div className="absolute inset-0 bg-grid-mesh opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#007cc3]/20 text-xs font-extrabold text-[#00a3e0] uppercase border border-[#007cc3]/40 backdrop-blur-md shadow-lg">
              <Layers className="w-4 h-4 text-[#00a3e0]" />
              <span>Dedicated Navigation Hub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Explore Our <span className="bg-gradient-to-r from-[#00a3e0] via-[#38bdf8] to-[#007cc3] bg-clip-text text-transparent">Dedicated Portals</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Click any portal card below to open its dedicated page and view full details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageNavCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link 
                  key={idx} 
                  to={card.path}
                  className="bg-[#0B172E]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#00a3e0] hover:bg-[#007cc3]/15 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#007cc3]/20 hover:-translate-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${card.color} text-white font-bold shadow-lg shadow-[#007cc3]/30 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#007cc3]/30 text-[#00a3e0] border border-[#007cc3]/50">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#00a3e0] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-extrabold text-[#00a3e0] group-hover:text-white pt-4 border-t border-slate-800">
                    <span>Open Dedicated Page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action Infosys Blue Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-5xl mx-auto shadow-2xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <Sparkles className="w-12 h-12 text-white mx-auto animate-bounce" />
            <h2 className="text-3xl sm:text-5xl font-black text-white">Have Custom Requirements?</h2>
            <p className="text-base text-sky-100 font-medium max-w-2xl mx-auto">
              Our business solutions architect team is available 24/7 to design custom SLA operational packages for your business.
            </p>
            <div className="pt-2">
              <Link
                to="/support"
                className="inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-2xl hover:scale-105 transition-all border border-white/10"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Request Custom Proposal Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Suntech Organization Awards Section */}
      <Awards />
    </div>
  );
}
