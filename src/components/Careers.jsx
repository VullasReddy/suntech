import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowUpRight, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  Globe, 
  Clock,
  CheckCircle2,
  X,
  Send,
  FileText,
  User,
  Mail,
  Phone,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Pause,
  Play,
  ShieldCheck
} from 'lucide-react';

export default function Careers() {
  const [activeApplyIndex, setActiveApplyIndex] = useState(null);
  const [submittedJobs, setSubmittedJobs] = useState(new Set());
  const [loadingJob, setLoadingJob] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const [applicantForms, setApplicantForms] = useState({});

  const handleInputChange = (jobTitle, field, value) => {
    setApplicantForms((prev) => ({
      ...prev,
      [jobTitle]: {
        ...prev[jobTitle],
        [field]: value
      }
    }));
  };

  const handleFormSubmit = (e, jobTitle) => {
    e.preventDefault();
    setLoadingJob(jobTitle);

    setTimeout(() => {
      setLoadingJob(null);
      setSubmittedJobs((prev) => new Set(prev).add(jobTitle));
    }, 1000);
  };

  const toggleApplyForm = (idx) => {
    if (activeApplyIndex === idx) {
      setActiveApplyIndex(null);
    } else {
      setActiveApplyIndex(idx);
    }
  };

  const perks = [
    {
      title: 'Fast-Track Career Growth',
      desc: 'Quarterly performance reviews, structured mentorship programs, and rapid merit-based promotion pathways.',
      image: '/assets/growth_perk.jpg',
      icon: Zap,
      color: 'from-[#007cc3] to-[#00a3e0]',
      badge: 'Mentorship & Review'
    },
    {
      title: 'Comprehensive Health & Wellness',
      desc: 'Full medical coverage, paid time off, mental health support, family health plans, and annual wellness stipends.',
      image: '/assets/health_perk.jpg',
      icon: Heart,
      color: 'from-[#0056b3] to-[#007cc3]',
      badge: 'Medical & PTO'
    },
    {
      title: 'Flexible Workspace & Culture',
      desc: 'Modern ergonomic equipment, hybrid/remote work schedules, competitive compensation, and collaborative teams.',
      image: '/assets/workspace_perk.jpg',
      icon: Shield,
      color: 'from-[#00a3e0] to-[#007cc3]',
      badge: 'Hybrid Setup'
    }
  ];

  const jobs = [
    {
      title: 'Digital Marketing Strategist',
      type: 'Full-time',
      location: 'Hybrid / Remote',
      dept: 'Marketing',
      desc: 'Drive high-converting growth campaigns, SEO optimizations, multi-channel PPC funnels, and brand scaling for global enterprise clients.',
      skills: ['SEO & SEM', 'Google Ads', 'Funnel Analytics', 'Brand Strategy'],
      responsibilities: [
        'Design and execute multi-channel digital acquisition funnels across Meta, Google, and LinkedIn.',
        'Perform weekly SEO performance audits, keyword tracking, and landing page optimization.',
        'Collaborate with design and content teams to deliver high-converting marketing collateral.',
        'Report monthly ROI and CAC metrics directly to enterprise stakeholders.'
      ]
    },
    {
      title: 'Financial Operations Analyst',
      type: 'Full-time',
      location: 'On-site Desk',
      dept: 'Finance',
      desc: 'Manage billing streams, audit reporting, financial reconciliation, ledger accuracy, and enterprise tax compliance.',
      skills: ['Ledger Bookkeeping', 'Audit Compliance', 'Financial Modeling', 'Billing Sync'],
      responsibilities: [
        'Supervise daily ledger reconciliations, automated billing flows, and client invoicing.',
        'Conduct quarterly financial audits and prepare compliance balance sheets.',
        'Streamline accounts payable/receivable operations across international business units.',
        'Work closely with GM and executive partners on budget forecasting and tax filings.'
      ]
    },
    {
      title: 'E-Commerce Marketplace Manager',
      type: 'Full-time',
      location: 'Hybrid',
      dept: 'Marketplace',
      desc: 'Scale product listings, inventory sync, and multi-channel fulfillment across Amazon FBA, Shopify, and global online stores.',
      skills: ['Amazon FBA', 'Shopify Plus', 'Listing SEO', 'Inventory Operations'],
      responsibilities: [
        'Optimize product titles, bullet points, A+ content, and backend search terms for Amazon & Shopify.',
        'Manage real-time inventory sync and multi-warehouse fulfillment logistics.',
        'Analyze conversion rates, buy-box ownership, and catalog ranking metrics.',
        'Coordinate sponsored product ad campaigns and seasonal promotional launches.'
      ]
    },
    {
      title: 'Backend Operations Lead',
      type: 'Full-time',
      location: '24/7 Operations Desk',
      dept: 'Operations',
      desc: 'Supervise 24/7 customer care teams, maintain sub-2hr SLA response targets, catalog processing, and administrative quality assurance.',
      skills: ['24/7 Desk Mgmt', 'SLA Control', 'CRM Systems', 'Quality Assurance'],
      responsibilities: [
        'Lead and schedule shift rotas for 24/7 customer support and ticketing desk representatives.',
        'Ensure strict SLA compliance (< 2-hour response, 99%+ resolution rate).',
        'Monitor agent quality, perform weekly call audits, and handle escalated client queries.',
        'Maintain knowledge bases and operational standard operating procedures (SOPs).'
      ]
    }
  ];

  return (
    <section id="careers" className="relative bg-slate-50 text-slate-900">
      
      {/* TCS Exact Sub-Header Nav Bar */}
      <div className="bg-[#0b1322] text-slate-300 border-b border-white/10 text-xs font-semibold py-3 px-4 sm:px-8 flex items-center justify-between z-20 relative">
        <div className="flex items-center space-x-6 uppercase tracking-wider text-[11px]">
          <span className="text-white font-extrabold flex items-center space-x-1 border-b-2 border-[#007cc3] pb-0.5">
            <span>SUNTECH INDIA CAREERS</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 inline" />
          </span>
          <a href="#why-suntech" className="hover:text-white transition-colors">About Us</a>
          <a href="#jobs-list" className="hover:text-white transition-colors">The Suntech Way</a>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-[10px] font-black uppercase text-amber-400 tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/30">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>CAREER ALERT / VERIFIED ROLES</span>
        </div>
      </div>

      {/* TCS Exact Dark Cinematic Video / Image Hero Section Background */}
      <section className="relative min-h-[75vh] flex flex-col justify-between pt-16 pb-16 px-4 sm:px-8 lg:px-12 bg-[#060c18] text-white overflow-hidden border-b border-slate-800">
        
        {/* TCS Dark Artisan Craft Studio Wallpaper Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/assets/suntech_careers_hero.jpg" 
            alt="Suntech Craft Studio Careers Wallpaper"
            className={`w-full h-full object-cover object-center filter brightness-[0.75] contrast-125 transition-all duration-700 ${
              isPaused ? 'scale-100' : 'animate-hero-pan-rotate scale-105'
            }`}
          />
          {/* Moody Atmospheric Vignetted Atmosphere Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/50 to-[#060c18]/30" />
        </div>

        {/* Hero Content Fold (Exact TCS Layout) */}
        <div className="max-w-6xl w-full mx-auto relative z-10 my-auto pt-8">
          
          {/* Tracked Category Title Header */}
          <div className="text-xs font-extrabold text-slate-300 uppercase tracking-widest flex items-center space-x-2">
            <span>SUNTECH CAREERS</span>
          </div>

          {/* Full-width Subtle Line Divider (Exact TCS Line) */}
          <div className="w-full h-[1px] bg-white/25 my-6" />

          {/* Main Headline (Exact TCS "Shaping careers for the long run") */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] max-w-4xl font-sans drop-shadow-2xl">
            Shaping careers for the long run
          </h1>

          {/* Subtitle (Exact TCS "Where human potential and AI shape the future") */}
          <p className="text-lg sm:text-2xl text-slate-200 font-normal mt-6 max-w-2xl leading-relaxed drop-shadow-md">
            Where human potential and AI shape the future
          </p>

          <div className="pt-8 flex flex-wrap gap-4">
            <a
              href="#jobs-list"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007cc3] text-white font-extrabold text-xs shadow-xl transition-all hover:scale-105"
            >
              <span>Explore Open Roles</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Pause / Play Video Controller (Exact TCS Bottom Left Pause Button) */}
        <div className="max-w-6xl w-full mx-auto relative z-10 flex items-center justify-between pt-8 border-t border-white/10">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg transition-all"
            aria-label="Toggle Hero Background Animation"
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-[#00a3e0] fill-[#00a3e0]" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-white fill-white" />
                <span>Pause</span>
              </>
            )}
          </button>

          <div className="hidden sm:flex items-center space-x-4 text-xs text-slate-300 font-medium">
            <span>India / Enterprise Operations</span>
          </div>
        </div>

      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Stats Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 -mt-24 relative z-20">
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl text-center">
            <Users className="w-6 h-6 text-[#007cc3] mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">100+</div>
            <div className="text-xs text-slate-600 font-bold mt-0.5">Global Specialists</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl text-center">
            <Globe className="w-6 h-6 text-[#007cc3] mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">24/7</div>
            <div className="text-xs text-slate-600 font-bold mt-0.5">Operational Desk</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl text-center">
            <Award className="w-6 h-6 text-[#007cc3] mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">98%</div>
            <div className="text-xs text-slate-600 font-bold mt-0.5">Retention Rate</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl text-center">
            <Clock className="w-6 h-6 text-[#007cc3] mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">&lt; 2 Hrs</div>
            <div className="text-xs text-slate-600 font-bold mt-0.5">Support Response</div>
          </div>
        </div>

        {/* Culture Perks Section with Images */}
        <div id="why-suntech" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Work at Suntech Solutions?</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We empower our workforce with premium healthcare, continuous training, and modern hybrid environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#007cc3] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={perk.image} 
                        alt={perk.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/90 backdrop-blur-md text-[#007cc3] shadow-sm border border-slate-200">
                        {perk.badge}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${perk.color} text-white font-bold shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{perk.title}</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {perk.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#007cc3]">
                      <CheckCircle2 className="w-4 h-4 text-[#007cc3]" />
                      <span>Verified Employee Benefit</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Job Roles List */}
        <div id="jobs-list" className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Current Open Positions</h2>
              <p className="text-xs text-slate-600">Click "Apply Position" on any role to open the application details directly below.</p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-[#007cc3] text-xs font-extrabold border border-sky-200">
              {jobs.length} Active Roles
            </span>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => {
              const isOpen = activeApplyIndex === idx;
              const isSubmitted = submittedJobs.has(job.title);
              const formData = applicantForms[job.title] || { name: '', email: '', phone: '', exp: '', cover: '' };

              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl border transition-all shadow-sm overflow-hidden ${
                    isOpen ? 'border-[#007cc3] shadow-xl ring-2 ring-[#007cc3]/20' : 'border-slate-200 hover:border-[#007cc3] hover:shadow-md'
                  }`}
                >
                  {/* Job Header Bar */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-50 text-[#007cc3] border border-sky-200">
                          {job.dept}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {job.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {job.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {job.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 pt-2 md:pt-0">
                      <button
                        onClick={() => toggleApplyForm(idx)}
                        className={`w-full md:w-auto px-6 py-3.5 rounded-full text-xs font-extrabold shadow-md transition-all flex items-center justify-center space-x-2 ${
                          isOpen
                            ? 'bg-slate-900 text-white hover:bg-slate-800'
                            : 'bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] text-white hover:shadow-[#007cc3]/30'
                        }`}
                      >
                        <span>{isOpen ? 'Close Application' : 'Apply Position'}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Inline Expanded Application Details & Form */}
                  {isOpen && (
                    <div className="border-t border-sky-200 bg-gradient-to-b from-sky-50/60 to-blue-50/30 p-6 sm:p-10 animate-in fade-in slide-in-from-top-3 duration-300">
                      
                      {isSubmitted ? (
                        <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-4 shadow-sm">
                          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>
                          <h4 className="text-2xl font-extrabold text-slate-900">Application Submitted!</h4>
                          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                            Thank you for applying for the <strong>{job.title}</strong> position at Suntech Solutions. Our talent acquisition team will review your application and contact you via email shortly.
                          </p>
                          <button
                            onClick={() => toggleApplyForm(idx)}
                            className="mt-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
                          >
                            Done / Close Form
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-8">
                          
                          {/* Role Responsibilities List */}
                          <div className="bg-white rounded-2xl p-6 border border-sky-200/80 shadow-sm space-y-3">
                            <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#007cc3]">
                              <Sparkles className="w-4 h-4 text-[#007cc3]" />
                              <span>Key Responsibilities & Deliverables</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                              {job.responsibilities.map((resp, rIdx) => (
                                <div key={rIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-[#007cc3] shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Direct Application Form */}
                          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-200 shadow-md">
                            <div className="border-b border-slate-100 pb-4 mb-6">
                              <h4 className="text-xl font-extrabold text-slate-900">
                                Submit Application for {job.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">
                                Complete your candidate details below to apply directly for this role.
                              </p>
                            </div>

                            <form onSubmit={(e) => handleFormSubmit(e, job.title)} className="space-y-5">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                                    Full Name *
                                  </label>
                                  <div className="relative">
                                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                                    <input
                                      type="text"
                                      required
                                      value={formData.name}
                                      onChange={(e) => handleInputChange(job.title, 'name', e.target.value)}
                                      placeholder="John Doe"
                                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                                    Email Address *
                                  </label>
                                  <div className="relative">
                                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                                    <input
                                      type="email"
                                      required
                                      value={formData.email}
                                      onChange={(e) => handleInputChange(job.title, 'email', e.target.value)}
                                      placeholder="john@example.com"
                                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                                    Phone Number *
                                  </label>
                                  <div className="relative">
                                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                                    <input
                                      type="tel"
                                      required
                                      value={formData.phone}
                                      onChange={(e) => handleInputChange(job.title, 'phone', e.target.value)}
                                      placeholder="+1 (555) 000-0000"
                                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                                    Years of Experience *
                                  </label>
                                  <div className="relative">
                                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                                    <input
                                      type="text"
                                      required
                                      value={formData.exp}
                                      onChange={(e) => handleInputChange(job.title, 'exp', e.target.value)}
                                      placeholder="e.g. 3+ years in marketing/finance"
                                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all font-medium"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                                  Cover Note / LinkedIn / Portfolio Link *
                                </label>
                                <textarea
                                  required
                                  rows={3}
                                  value={formData.cover}
                                  onChange={(e) => handleInputChange(job.title, 'cover', e.target.value)}
                                  placeholder="Share why you are a great fit for this role or paste your LinkedIn / portfolio URL..."
                                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#007cc3] focus:ring-2 focus:ring-[#007cc3]/20 transition-all resize-none font-medium placeholder:text-slate-400"
                                />
                              </div>

                              <div className="flex items-center justify-end space-x-3 pt-2">
                                <button
                                  type="button"
                                  onClick={() => toggleApplyForm(idx)}
                                  className="px-5 py-3 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  disabled={loadingJob === job.title}
                                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] hover:from-[#0056b3] hover:to-[#007cc3] text-white font-extrabold text-xs shadow-lg shadow-[#007cc3]/25 transition-all flex items-center space-x-2 disabled:opacity-50"
                                >
                                  {loadingJob === job.title ? (
                                    <span>Submitting Application...</span>
                                  ) : (
                                    <>
                                      <Send className="w-4 h-4" />
                                      <span>Submit Application Now</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </form>
                          </div>

                        </div>
                      )}

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
