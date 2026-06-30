import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, LayoutGrid, Sparkles, Play, ShieldCheck, FileCode, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function DesignProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Map icon names to Lucide icons
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Play: <Play className="w-5 h-5" />,
    ShieldAlert: <ShieldCheck className="w-5 h-5" />,
    FileCode: <FileCode className="w-5 h-5" />
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950">
            A meticulous, user-centric design process
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Structuring the journey from ambiguous user feedback into rigorous, high-fidelity responsive systems backed by business metrics.
          </p>
        </div>

        {/* Process Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative" id="process-steps-container">
          {PROCESS_STEPS.map((step, index) => {
            const isHovered = hoveredStep === index;
            return (
              <motion.div
                key={step.phase}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between h-full group ${
                  isHovered
                    ? 'bg-white border-blue-500 shadow-xl -translate-y-1'
                    : 'bg-slate-50 border-slate-100 shadow-xs'
                }`}
                id={`process-card-${step.phase}`}
              >
                <div className="space-y-4">
                  {/* Top indicator row */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isHovered ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {iconMap[step.iconName] || <Search className="w-5 h-5" />}
                    </div>
                    <span className="text-3xl font-black font-display text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                      {step.phase}
                    </span>
                  </div>

                  {/* Step Title & description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Concrete Deliverables list */}
                <div className="mt-6 pt-5 border-t border-slate-50 space-y-2">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                    Key Deliverables
                  </span>
                  <div className="space-y-2">
                    {step.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-650">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight decoration strip on card bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
                  isHovered ? 'bg-blue-600' : 'bg-transparent'
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
