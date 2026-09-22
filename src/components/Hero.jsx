import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap,
  Bot
} from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax movement for cityscape backdrop
  const bgTranslateY = Math.min(scrollY * 0.15, 80);

  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-36 overflow-hidden bg-[#030712] text-white min-h-[92vh] flex items-center">
      
      {/* Cityscape Background UI with Parallax Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/assets/tsi_cityscape_banner.jpg" 
          alt="Suntech Cityscape Network Backdrop"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-125 scale-105 animate-hero-pan-rotate transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${bgTranslateY}px, 0)`,
            willChange: 'transform'
          }}
        />
        
        {/* TSI Background Light Ring Loops */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[620px] h-[620px] border border-cyan-400/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/3 right-[5%] w-[480px] h-[480px] border border-purple-500/20 rounded-full animate-pulse-glow" />
        <div className="absolute top-1/4 right-[18%] w-[380px] h-[380px] border border-blue-400/15 rounded-full rotate-45" />

        {/* Floating Gradient Mesh Orbs */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00a3e0]/20 via-[#007cc3]/10 to-transparent rounded-full blur-3xl animate-orb-1" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#8b5cf6]/20 via-[#00a3e0]/10 to-transparent rounded-full blur-3xl animate-orb-2" />

        {/* Tech Grid Mesh Overlay & Vignette Shading */}
        <div className="absolute inset-0 bg-grid-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/75 via-[#060e26]/50 to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/85 via-transparent to-[#030712]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Subtitle Badge */}
        <div className="mb-4 inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-black uppercase text-cyan-300 tracking-widest">
            Multi-Award Winning Technology & Operations
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Category Pills & Glassmorphism Card */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Giant Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans drop-shadow-2xl">
              Suntech enables growth in the Enterprise Channel through innovation.
            </h1>

            {/* 3 TSI-Style Category Pill Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 pt-1">
              <Link
                to="/digital-marketing"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#22b8cf] hover:bg-[#15aabf] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#22b8cf]/30 hover:scale-105 transition-all text-center"
              >
                UNIFIED MARKETING & GROWTH
              </Link>
              
              <Link
                to="/finance-sector"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#9d4edd] hover:bg-[#8338ec] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#9d4edd]/30 hover:scale-105 transition-all text-center"
              >
                FINANCIAL ADVISORY
              </Link>

              <Link
                to="/online-marketplace"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#4880b8] hover:bg-[#366899] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#4880b8]/30 hover:scale-105 transition-all text-center"
              >
                MARKETPLACE INFRASTRUCTURE
              </Link>
            </div>

            {/* Left Glassmorphism Overlay Card ("Cross Connect" Card) */}
            <div className="bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-3 mt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00a3e0] via-[#007cc3] to-[#8b5cf6] p-0.5 shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <span className="font-extrabold text-lg text-white tracking-tight block">Cross Connect</span>
                  <span className="text-[10px] font-black uppercase text-cyan-400 tracking-widest">Enterprise Unified SLA</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Introducing the future of Enterprise Operations
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Unifying marketing acquisition, financial risk advisory, multi-channel marketplace integration, and 24/7 backend support under a single SLA framework.
              </p>

              <div className="pt-1">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Discover Cross Connect Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Floating Animated Circular Photo Orbs */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] flex items-center justify-center">
            
            {/* Orb 1 (Top Left) - Digital Marketing */}
            <Link
              to="/digital-marketing"
              className="absolute top-0 left-4 sm:left-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/40 group hover:scale-110 transition-transform duration-500 animate-float z-20"
            >
              <img 
                src="/assets/digital_marketing_main.jpg" 
                alt="Digital Marketing Vertical"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-center justify-center p-3 text-center">
                <span className="font-extrabold text-xs text-white drop-shadow-md">
                  Digital Marketing
                </span>
              </div>
            </Link>

            {/* Orb 2 (Middle Right) - Financial Advisory */}
            <Link
              to="/finance-sector"
              className="absolute top-12 right-0 sm:right-2 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-2xl shadow-purple-500/40 group hover:scale-110 transition-transform duration-500 animate-float z-30"
              style={{ animationDelay: '1.5s' }}
            >
              <img 
                src="/assets/finance_sector_main.jpg" 
                alt="Financial Advisory Vertical"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-center justify-center p-3 text-center">
                <span className="font-extrabold text-xs text-white drop-shadow-md">
                  Financial Advisory
                </span>
              </div>
            </Link>

            {/* Orb 3 (Bottom Center Large) - 24/7 Operations Desk */}
            <Link
              to="/backend-support"
              className="absolute bottom-0 left-10 sm:left-16 w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-sky-400/70 shadow-2xl shadow-sky-500/50 group hover:scale-110 transition-transform duration-500 animate-pulse-glow z-10"
            >
              <img 
                src="/assets/backend_support_main.jpg" 
                alt="24/7 Operations Desk Vertical"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent flex flex-col items-center justify-center p-4 text-center">
                <span className="font-black text-sm text-white drop-shadow-md">
                  24/7 Operations Desk
                </span>
                <span className="text-[10px] text-cyan-300 font-bold mt-1">
                  Sub-2hr SLA Support
                </span>
              </div>
            </Link>

          </div>

        </div>

        {/* Bottom Right Floating Action Button ("Ask Suntech AI") */}
        <div className="pt-8 flex justify-end">
          <Link
            to="/support"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs shadow-2xl shadow-sky-600/50 hover:scale-105 transition-all border border-cyan-400/30 backdrop-blur-md"
          >
            <Bot className="w-4 h-4 text-cyan-200" />
            <span>Ask Suntech AI</span>
          </Link>
        </div>

      </div>

      {/* ONE Large Continuous Shallow White Arc Overlapping Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-12 sm:h-20 md:h-28 lg:h-32 text-white"
          preserveAspectRatio="none"
        >
          <path 
            d="M 0,95 C 480,18 960,18 1440,95 L 1440,120 L 0,120 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}



