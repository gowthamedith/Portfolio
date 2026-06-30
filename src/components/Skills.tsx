import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Compass, Cpu, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Core Design' | 'Tools' | 'AI Tools'>('All');

  const categories = [
    { name: 'All', label: 'All Expertise' },
    { name: 'Core Design', label: 'Methodologies' },
    { name: 'Tools', label: 'Tools & Software' },
    { name: 'AI Tools', label: 'AI & Innovation' }
  ] as const;

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  });

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100" id="skills">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950">
            A diverse toolkit engineered for performance & usability
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Combining deep UX theoretical models with rapid digital prototyping tools and modern artificial intelligence utilities to ship pixel-perfect layouts.
          </p>
        </div>

        {/* Filter Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-800 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              // Match category icon
              let catIcon = <Compass className="w-4 h-4 text-blue-500" />;
              if (skill.category === 'Tools') {
                catIcon = <Wrench className="w-4 h-4 text-blue-500" />;
              } else if (skill.category === 'AI Tools') {
                catIcon = <Cpu className="w-4 h-4 text-purple-500" />;
              }

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4 text-left group"
                >
                  <div className="space-y-2">
                    {/* Category & Title */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100/50">
                        {catIcon}
                        <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase font-sans">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-400 font-mono">
                        Level {skill.level}/5
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level gauge visualization */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-50">
                    <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400 font-mono uppercase">
                      <span>Proficiency</span>
                      <span className="text-blue-600 font-bold">
                        {skill.level === 5 ? 'Master' : skill.level === 4 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </div>
                    {/* Level Bar slider representation */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(skill.level / 5) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.category === 'AI Tools' ? 'bg-purple-500' : 'bg-blue-600'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
