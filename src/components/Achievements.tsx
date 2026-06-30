import { motion } from 'motion/react';
import { Award, Layers, Target, Users2, Zap } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';

export default function Achievements() {
  // Map icons to index for visual context
  const icons = [
    <Layers className="w-6 h-6 text-blue-600" />,
    <Target className="w-6 h-6 text-blue-600" />,
    <Zap className="w-6 h-6 text-blue-600" />,
    <Users2 className="w-6 h-6 text-blue-600" />
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-100" id="achievements">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3 mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950">
            A proven index of design performance & business results
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
            Quantified experience driving conversion uplifts, optimizing asset workflows, and ensuring cohesive alignment across technical product divisions.
          </p>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="achievements-bento-grid">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 sm:p-8 bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col justify-between text-left relative group hover:bg-blue-50/25 hover:border-blue-200 transition-all"
              id={`achievement-card-${index}`}
            >
              {/* Corner accent decoration */}
              <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                {icons[index] || <Award className="w-6 h-6" />}
              </div>

              <div className="space-y-4 pt-4">
                <span className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-none block group-hover:scale-105 origin-left transition-transform duration-300">
                  {item.stat}
                </span>

                <div className="space-y-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {item.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Business Outcome Callout banner */}
        <div className="mt-12 p-6 sm:p-8 bg-blue-600 rounded-2xl text-white text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md" id="achievements-banner">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-display">Are you looking to scale your enterprise product UI/UX?</h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-sans">
              I collaborate with software architecture groups to create customized component libraries, resulting in up to 60% faster developer cycles.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-xl text-xs sm:text-sm shadow transition-all shrink-0 cursor-pointer"
          >
            Schedule a Design Audit
          </a>
        </div>

      </div>
    </section>
  );
}
