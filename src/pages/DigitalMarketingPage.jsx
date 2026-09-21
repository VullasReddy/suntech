import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Search, 
  Target, 
  Share2, 
  BarChart3, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

export default function DigitalMarketingPage() {
  const capabilities = [
    {
      title: 'Search Engine Optimization (SEO)',
      icon: Search,
      desc: 'Technical site audits, keyword optimization, high-authority link building, and local SEO to secure top organic ranks.',
      deliverables: ['Technical SEO Audits', 'Keyword Matrix Strategy', 'Organic Link Acquisition', 'Local Pack Ranking']
    },
    {
      title: 'Performance PPC Advertising',
      icon: Target,
      desc: 'Precision ad campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn Ads, and automated retargeting funnels.',
      deliverables: ['Google Ads Search & Shopping', 'Meta Paid Social Scaling', 'LinkedIn B2B Lead Gen', 'Multi-Channel Retargeting']
    },
    {
      title: 'Social Media & Brand Scaling',
      icon: Share2,
      desc: 'Engaging content creation, community management, brand voice scaling, and viral audience growth campaigns.',
      deliverables: ['Content Calendar Strategy', 'Brand Voice Development', 'Community Engagement', 'Influencer Partner Funnels']
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      icon: BarChart3,
      desc: 'Landing page A/B testing, heatmap user journey analysis, checkout optimization, and lead capture funnels.',
      deliverables: ['Landing Page A/B Audits', 'User Behavior Heatmaps', 'Frictionless Checkout Setup', 'Lead Magnet Funnels']
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
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white">Digital Marketing</span>
          </div>

          {/* Center Category Pill Badge (Exact "Event" Badge from Screenshot) */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-md bg-[#0c1529] text-white text-xs font-extrabold uppercase tracking-widest shadow-lg border border-white/10">
              <TrendingUp className="w-3.5 h-3.5 text-[#00a3e0]" />
              <span>Digital Marketing Vertical</span>
            </div>
          </div>

          {/* Main Title (Exact Large Thin Centered Title from Screenshot) */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight">
              Digital Marketing & Brand Growth
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Accelerate market penetration with data-backed SEO, targeted PPC ad funnels, and conversion-optimized brand strategies designed to scale measurable ROI.
            </p>

            {/* Read More / Explore Action Button (Exact "Read More ↗" Button from Screenshot) */}
            <div className="pt-2 flex justify-center">
              <a 
                href="#capabilities"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#121927] hover:bg-[#007cc3] text-white font-bold text-sm shadow-2xl transition-all hover:scale-105 group"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom Segmented Carousel Indicator Bars (Exact 3 Bars from Screenshot) */}
          <div className="mt-16 flex items-center justify-center space-x-4 max-w-md mx-auto">
            <div className="w-36 h-2 rounded-full bg-[#007cc3] shadow-md shadow-[#007cc3]/40" />
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
            <div className="w-36 h-2 rounded-full bg-slate-300/80" />
          </div>

        </div>
      </section>

      <div id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Professional Hero Image Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-200 group">
          <img 
            src="/assets/digital_marketing_main.jpg" 
            alt="Suntech Digital Marketing Team & Strategy"
            className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl text-white">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-[#00a3e0]">+240%</div>
                <div className="text-[11px] text-slate-200 font-medium">Organic Traffic Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-emerald-400">3.8x</div>
                <div className="text-[11px] text-slate-200 font-medium">ROAS Ad Return</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-white">50M+</div>
                <div className="text-[11px] text-slate-200 font-medium">Ad Impressions Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-[#00a3e0]">98%</div>
                <div className="text-[11px] text-slate-200 font-medium">Client Retention SLA</div>
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
          <h2 className="text-2xl sm:text-4xl font-black text-white">Ready to Outrank Competitors?</h2>
          <p className="text-sm sm:text-base text-slate-100 font-medium max-w-xl mx-auto">
            Request a complimentary SEO & PPC performance audit from our senior digital marketing team.
          </p>
          <div className="pt-2">
            <Link
              to="/support"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-xl hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#00a3e0]" />
              <span>Request Free Marketing Audit</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
