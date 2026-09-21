import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Landmark, 
  ShoppingBag, 
  Headphones, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  ChevronRight,
  Sun,
  ShieldCheck,
  Star,
  Mic,
  Send,
  Search,
  Shield
} from 'lucide-react';

export default function Hero() {
  const [activeNode, setActiveNode] = useState('digital-marketing');
  const [promptText, setPromptText] = useState('');

  const treeNodes = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      subtitle: 'SEO & Multi-Channel Acquisition',
      desc: 'Data-driven SEO audits, high-ROAS PPC ad funnels, social media acquisition, and brand scaling.',
      metrics: '+240% Reach',
      icon: TrendingUp,
      path: '/digital-marketing',
      color: 'from-[#007cc3] via-[#00a3e0] to-[#0056b3]',
      tag: 'SEO & Ads'
    },
    {
      title: 'Financial Advisory & Billing',
      id: 'finance-services',
      subtitle: 'Ledger Audit & Tax Advisory',
      desc: 'Complete ledger bookkeeping, automated invoice billing, risk analysis, and tax compliance.',
      metrics: '100% Tax Audit',
      icon: Landmark,
      path: '/finance-sector',
      color: 'from-[#0056b3] via-[#007cc3] to-[#00a3e0]',
      tag: 'Finance Desk'
    },
    {
      id: 'online-marketplace',
      title: 'Online Marketplace Scale',
      subtitle: 'Amazon & Shopify Integration',
      desc: 'Storefront onboarding, catalog listing SEO, Amazon FBA sync, and real-time inventory management.',
      metrics: 'Multi-Channel Sync',
      icon: ShoppingBag,
      path: '/online-marketplace',
      color: 'from-[#00a3e0] via-[#007cc3] to-[#0056b3]',
      tag: 'E-Commerce'
    },
    {
      id: 'backend-support',
      title: 'Backend Operations Desk',
      subtitle: '24/7 SLA Customer Desk',
      desc: 'Round-the-clock customer support agents, data entry processing, catalog QA, and admin assistance.',
      metrics: '< 2 hr Response SLA',
      icon: Headphones,
      path: '/backend-support',
      color: 'from-[#007cc3] via-[#0056b3] to-[#00a3e0]',
      tag: '24/7 Coverage'
    }
  ];

  const quickPrompts = [
    { label: 'Navigate Enterprise AI with Suntech', path: '/services' },
    { label: 'Discover the power of Suntech Solutions', path: '/leadership' },
    { label: 'Insights from Suntech Operations Index', path: '/support' }
  ];

  const currentNode = treeNodes.find(n => n.id === activeNode) || treeNodes[0];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0a1224] text-white">
      
      {/* Infosys Panoramic Cinematic Mountain Peak Wallpaper Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/infosys_mountain_hero.jpg" 
          alt="Infosys Style Mountain Horizon Hero"
          className="w-full h-full object-cover object-center animate-hero-pan-rotate filter brightness-90 contrast-110"
        />
        {/* Dusky Twilight Atmosphere Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091124]/70 via-[#071022]/40 to-[#050c1c]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Fold - Infosys Exact "Navigate your next" Centered Headline */}
        <div className="text-center max-w-5xl mx-auto pt-8 pb-16 space-y-6">
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] font-sans drop-shadow-2xl">
            Branching Out to Grow Your <span className="font-semibold text-white drop-shadow-lg">Business</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md">
            Suntech Solutions Organization equips enterprises worldwide with strategic digital marketing, rigorous financial advisory, scalable marketplace operations, and 24/7 dedicated backend support.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#00a3e0] hover:to-[#007cc3] text-white font-black text-sm shadow-xl shadow-[#007cc3]/50 hover:shadow-[#00a3e0]/70 transition-all hover:-translate-y-1 group"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 backdrop-blur-md shadow-md transition-all"
            >
              <Headphones className="w-4 h-4 text-[#00a3e0]" />
              <span>Contact Support Desk</span>
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 flex items-center justify-center space-x-6 text-xs font-bold text-slate-300">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00a3e0]" />
              <span>Enterprise SLA Compliance</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Star className="w-4 h-4 text-[#00a3e0] fill-[#00a3e0]" />
              <span>24/7 Global Desk</span>
            </div>
          </div>

        </div>

        {/* Interactive Ecosystem Hub Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold tracking-widest text-[#007cc3] uppercase px-5 py-2 rounded-full bg-white/40 border border-white/60 shadow-lg backdrop-blur-xl">
              Interactive Operational Ecosystem (Select a node below)
            </span>
          </div>

          <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden text-slate-900">
            
            {/* Ambient Glass Reflective Light Sheen Overlay */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-white/70 via-sky-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none" />

            {/* SVG Connector Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
              viewBox="0 0 800 450"
              fill="none"
            >
              <path d="M 400 225 L 200 120" stroke="#007cc3" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
              <path d="M 400 225 L 600 120" stroke="#00a3e0" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
              <path d="M 400 225 L 200 330" stroke="#007cc3" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
              <path d="M 400 225 L 600 330" stroke="#00a3e0" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
            </svg>

            {/* Central Core Hub Logo Badge (Translucent Glass Reflection Logo Box) */}
            <div className="relative z-20 flex flex-col items-center justify-center my-6">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#007cc3] via-[#00a3e0] to-[#0056b3] p-1 flex items-center justify-center shadow-2xl shadow-[#007cc3]/40 group animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 border border-white/80 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-[#007cc3]/15 text-[#007cc3] flex items-center justify-center mb-1 border border-[#007cc3]/30 shadow-inner">
                    <Zap className="w-6 h-6 animate-bounce text-[#007cc3]" />
                  </div>
                  <span className="block font-black text-xs text-slate-900 tracking-widest uppercase">SUNTECH</span>
                  <span className="block text-[9px] text-[#007cc3] font-extrabold tracking-widest">SOLUTIONS</span>
                </div>
              </div>
            </div>

            {/* Interactive Tree Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-20">
              {treeNodes.map((node) => {
                const IconComponent = node.icon;
                const isSelected = activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                      isSelected
                        ? 'bg-white/95 backdrop-blur-xl border-[#007cc3] shadow-2xl shadow-[#007cc3]/30 scale-[1.02] ring-2 ring-[#007cc3]/50'
                        : 'bg-white/65 backdrop-blur-md hover:bg-white/85 border-white/70 hover:border-[#007cc3] hover:-translate-y-1 shadow-lg'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${node.color} text-white font-bold shadow-md shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-extrabold text-base text-slate-900 truncate">{node.title}</h3>
                          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#007cc3]/15 text-[#007cc3] border border-[#007cc3]/30">
                            {node.metrics}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                          {node.subtitle}
                        </p>
                        <Link 
                          to={node.path}
                          className="mt-3 inline-flex items-center space-x-1 text-xs font-extrabold text-[#007cc3] hover:text-[#0056b3]"
                        >
                          <span>Explore Dedicated Page</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Live Preview Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20 border border-white/20">
              <div className="flex items-center space-x-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 backdrop-blur-md border border-white/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Active Focus: {currentNode.title}</h4>
                  <p className="text-xs text-sky-100 font-medium">{currentNode.desc}</p>
                </div>
              </div>
              <Link
                to={currentNode.path}
                className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs shrink-0 shadow-xl transition-colors flex items-center space-x-1 border border-white/20"
              >
                <span>Open Dedicated Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/45 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/60 shadow-xl hover:bg-white/65 hover:border-[#007cc3] transition-all">
              <div className="text-3xl font-black text-[#007cc3]">99.99%</div>
              <div className="text-xs text-slate-800 mt-1 font-extrabold">Uptime SLA Guarantee</div>
            </div>
            <div className="bg-white/45 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/60 shadow-xl hover:bg-white/65 hover:border-[#007cc3] transition-all">
              <div className="text-3xl font-black text-slate-900">&lt; 2 Hrs</div>
              <div className="text-xs text-slate-800 mt-1 font-extrabold">Support Initial SLA</div>
            </div>
            <div className="bg-white/45 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/60 shadow-xl hover:bg-white/65 hover:border-[#007cc3] transition-all">
              <div className="text-3xl font-black text-[#007cc3]">500+</div>
              <div className="text-xs text-slate-800 mt-1 font-extrabold">Global Enterprise Clients</div>
            </div>
            <div className="bg-white/45 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/60 shadow-xl hover:bg-white/65 hover:border-[#007cc3] transition-all">
              <div className="text-3xl font-black text-slate-900">24/7</div>
              <div className="text-xs text-slate-800 mt-1 font-extrabold">Operations Desk Active</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
