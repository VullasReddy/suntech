import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export const LaurelWreath = ({ className = "w-28 h-28 text-slate-900 mx-auto" }) => (
  <svg className={className} viewBox="0 0 140 100" fill="currentColor">
    {/* Left Laurel Branch */}
    <g>
      <path d="M55,85 C42,75 30,60 30,42 C30,26 42,15 52,8 C47,17 47,27 52,35 C44,28 38,18 41,9 C46,18 51,25 58,30 C52,20 54,9 60,2 C61,12 62,21 65,29 C50,42 50,60 59,75 C56,79 55,83 55,85 Z" />
      <path d="M38,70 C30,62 26,50 28,38 C32,45 38,50 44,52 C38,42 38,30 45,22 C47,30 50,37 56,41 C42,54 44,66 48,76 Z" />
    </g>
    {/* Right Laurel Branch */}
    <g>
      <path d="M85,85 C98,75 110,60 110,42 C110,26 98,15 88,8 C93,17 93,27 88,35 C96,28 102,18 99,9 C94,18 89,25 82,30 C88,20 86,9 80,2 C79,12 78,21 75,29 C90,42 90,60 81,75 C84,79 85,83 85,85 Z" />
      <path d="M102,70 C110,62 114,50 112,38 C108,45 102,50 96,52 C102,42 102,30 95,22 C93,30 90,37 84,41 C98,54 96,66 92,76 Z" />
    </g>
    {/* Base Stem */}
    <path d="M52,84 Q70,92 88,84" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export default function Awards() {
  const awardsData = [
    {
      title: 'Best Performance of the Company',
      date: 'Mar - 2024',
      event: 'Annual Summit Chennai'
    },
    {
      title: 'Best Leadership award',
      date: '2023',
      event: 'Annual Achievements Awards - Chennai'
    }
  ];

  return (
    <section id="awards" className="py-16 sm:py-24 bg-[#050C1E] border-t border-slate-800/80 relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#007cc3]/20 text-xs font-extrabold text-[#00a3e0] uppercase border border-[#007cc3]/40 backdrop-blur-md">
            <Trophy className="w-4 h-4 text-[#00a3e0]" />
            <span>Honors & Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Suntech Organization Awards
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Recognizing operational excellence, executive leadership, and continuous enterprise achievement.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awardsData.map((award, index) => (
            <div 
              key={index}
              className="bg-[#0B172E]/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-[#007cc3] transition-all flex flex-col items-center text-center group"
            >
              {/* Laurel Wreath Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <LaurelWreath className="w-28 h-28 sm:w-32 sm:h-32 text-[#00a3e0] mx-auto drop-shadow-md" />
              </div>

              {/* Award Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-[#00a3e0] transition-colors">
                {award.title}
              </h3>

              {/* Date */}
              <p className="text-base sm:text-lg font-bold text-sky-200 mb-2">
                {award.date}
              </p>

              {/* Event Subtitle */}
              <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                {award.event}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
