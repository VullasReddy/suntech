import React from 'react';
import { Users, Award, Quote, Sparkles } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'Farook Nurubhasha',
      title: 'Founder and CEO',
      photo: '/farook_ceo.png',
      quote: 'To Enable Suntech Organization to play a Vital Role in the Global Marketing Scenario',
      bio: 'Creating memorable experiences for customers with multiple years of experience in the Tech industry. Making a positive impact on society and the environment. My strategic vision and leadership guide our team to deliver innovative solutions that drive results.',
      align: 'right'
    },
    {
      name: 'Nelli Pallavi',
      title: 'Co-Founder and General Manager',
      photo: '/nelli_gm.png',
      quote: 'To be the Trusted Partner for business & individuals, providing innovative solutions and exceptional services that empower them to succeed',
      bio: 'Prioritizing customer needs and experiences. My aim is client satisfaction and loyalty improving overall business functions.',
      align: 'left'
    }
  ];

  return (
    <section id="leadership" className="py-24 relative z-10 bg-[#050C1E] border-t border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#007cc3]/20 text-xs font-extrabold text-[#00a3e0] uppercase border border-[#007cc3]/40 backdrop-blur-md">
            <Users className="w-4 h-4 text-[#00a3e0]" />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet Our <span className="bg-gradient-to-r from-[#00a3e0] via-[#38bdf8] to-[#007cc3] bg-clip-text text-transparent">Executive Leadership</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Guided by proven vision, customer dedication, and innovative enterprise management.
          </p>
        </div>

        {/* Leaders Detailed Showcase */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-[#0B172E]/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 hover:border-[#007cc3] transition-all"
            >
              {/* Leader Photo Column */}
              <div className={`w-full md:w-5/12 flex flex-col items-center text-center ${leader.align === 'left' ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative max-w-[280px] sm:max-w-[320px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#007cc3]/30 via-[#00a3e0]/20 to-[#0056b3]/40 p-2 border border-[#007cc3]/40 shadow-2xl group">
                  <img 
                    src={leader.photo} 
                    alt={leader.name} 
                    className="w-full h-auto max-h-[380px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-5 space-y-1">
                  <h3 className="text-2xl font-extrabold text-white">{leader.name}</h3>
                  <p className="text-sm font-bold text-[#00a3e0]">{leader.title}</p>
                </div>
              </div>

              {/* Leader Content Column */}
              <div className={`w-full md:w-7/12 space-y-6 ${leader.align === 'left' ? 'md:order-2' : 'md:order-1'}`}>
                
                {/* Vision Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#007cc3] to-[#00a3e0] text-white text-xs font-black tracking-widest uppercase shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Our Vision</span>
                </div>

                {/* Quote Box */}
                <div className="relative bg-[#050C1E]/80 p-6 rounded-2xl border border-slate-800 shadow-md">
                  <Quote className="w-8 h-8 text-[#00a3e0]/20 absolute top-4 right-4" />
                  <p className="text-base sm:text-lg font-bold text-white italic leading-snug">
                    "{leader.quote}"
                  </p>
                </div>

                {/* Bio Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {leader.bio}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-[#00a3e0]">
                  <Award className="w-4 h-4 text-[#00a3e0]" />
                  <span>Executive Leadership • Suntech Solutions Organization</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
