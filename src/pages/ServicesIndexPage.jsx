import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Landmark, 
  ShoppingBag, 
  Headphones, 
  ArrowRight, 
  Layers, 
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

export default function ServicesIndexPage() {
  const serviceCards = [
    {
      title: 'Digital Marketing & Brand Growth',
      path: '/digital-marketing',
      image: '/assets/digital_marketing_main.jpg',
      icon: TrendingUp,
      badge: 'SEO & Paid Ads',
      desc: 'Data-driven SEO audits, high-ROAS PPC ad funnels, social media management, and enterprise brand acquisition.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    },
    {
      title: 'Financial Services & Advisory',
      path: '/finance-sector',
      image: '/assets/finance_sector_main.jpg',
      icon: Landmark,
      badge: 'Accounting & Risk',
      desc: 'Complete bookkeeping, invoice automation, corporate tax advisory, statutory reporting, and audit risk assessment.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    },
    {
      title: 'Online Marketplace Integration',
      path: '/online-marketplace',
      image: '/assets/online_marketplace_main.jpg',
      icon: ShoppingBag,
      badge: 'E-Commerce Scale',
      desc: 'Multi-platform store onboarding (Amazon FBA / Shopify Plus), listing SEO copywriting, and real-time inventory sync.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    },
    {
      title: 'Backend Operations Desk',
      path: '/backend-support',
      image: '/assets/backend_support_main.jpg',
      icon: Headphones,
      badge: '24/7 Operations',
      desc: 'Round-the-clock customer care, high-speed data processing, catalog entry, and virtual administrative support.',
      color: 'from-[#007cc3] to-[#00a3e0]'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* Infosys Exact Subpage Hero Banner (from User Screenshot) */}
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
            <span className="text-white">Services</span>
          </div>

          {/* Center Category Pill Badge (Exact "Event" Badge from Screenshot) */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-md bg-[#0c1529] text-white text-xs font-extrabold uppercase tracking-widest shadow-lg border border-white/10">
              <span>Suntech Enterprise Verticals</span>
            </div>
          </div>

          {/* Main Title (Exact Large Thin Centered Title from Screenshot) */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight">
              Suntech Service Capabilities & Solutions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Explore dedicated operational verticals engineered to streamline processes, enhance market reach, and maximize profitability.
            </p>

            {/* Read More / Explore Action Button (Exact "Read More ↗" Button from Screenshot) */}
            <div className="pt-2 flex justify-center">
              <a 
                href="#services-grid"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#121927] hover:bg-[#007cc3] text-white font-bold text-sm shadow-2xl transition-all hover:scale-105 group"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom Segmented Carousel Indicator Bars (Exact 3 Bars from Screenshot) */}
          <div className="mt-16 flex items-center justify-center space-x-4 max-w-md mx-auto">
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
            <div className="w-36 h-2 rounded-full bg-[#007cc3] shadow-md shadow-[#007cc3]/40" />
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
          </div>

        </div>
      </section>

      {/* Services Cards Grid with Rich Images & Detailed Verticals */}
      <section id="services-grid" className="py-20 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#007cc3] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image Banner */}
                    <div className="relative h-48 sm:h-56 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
                        {card.badge}
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center space-x-3 pr-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${card.color} text-white font-bold shadow-lg shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-extrabold text-white drop-shadow-md">
                          {card.title}
                        </h2>
                      </div>
                    </div>

                    {/* Card Body Description */}
                    <div className="p-6 sm:p-8">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Button */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <Link 
                      to={card.path}
                      className="w-full py-3.5 px-5 rounded-full bg-slate-950 hover:bg-gradient-to-r hover:from-[#007cc3] hover:to-[#00a3e0] hover:text-white text-white font-extrabold text-xs transition-all flex items-center justify-between shadow-md group-hover:shadow-xl"
                    >
                      <span>Open Dedicated {card.title} Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
