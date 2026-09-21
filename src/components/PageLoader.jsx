import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Sparkles } from 'lucide-react';

export default function PageLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Trigger page loading animation on navigation
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050C1E]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300">
      {/* Top Infosys Blue Loading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#007cc3] via-[#00a3e0] to-[#0056b3] animate-pulse w-full" />
      </div>

      {/* Animated Center Logo & Loader */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#007cc3] via-[#00a3e0] to-[#0056b3] p-1 flex items-center justify-center shadow-2xl shadow-[#007cc3]/50 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-[#050C1E] flex items-center justify-center border border-[#007cc3]/40">
            <Sun className="w-9 h-9 text-[#00a3e0] animate-pulse" />
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-[#00a3e0] animate-bounce" />
          <span>Loading Enterprise Page...</span>
        </div>
      </div>
    </div>
  );
}
