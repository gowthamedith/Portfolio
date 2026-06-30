import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, Clock, Hammer, CheckCircle, TrendingUp, Compass } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;
  const { caseStudy, title, category, image } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col z-10"
            id={`case-study-modal-${project.id}`}
          >
            {/* Header Sticky Area */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-20">
              <div>
                <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase font-sans">Case Study Details</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mt-0.5">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                aria-label="Close Case Study"
                id="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main scrollable body */}
            <div className="p-6 sm:p-8 space-y-10">
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-100">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                  {category}
                </div>
              </div>

              {/* Meta Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">My Role</p>
                    <p className="text-sm font-semibold text-slate-800">{caseStudy.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Duration</p>
                    <p className="text-sm font-semibold text-slate-800">{caseStudy.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Stack & Tools</p>
                    <p className="text-sm font-semibold text-slate-800">{caseStudy.toolsUsed.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span>
                    The Challenge
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
                    The Solution
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Interactive Performance Metrics */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Measurable Business Value Delivered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {caseStudy.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-5 bg-blue-50/50 rounded-xl border border-blue-100/30 flex flex-col items-center justify-center text-center group hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight font-display mb-1 group-hover:scale-105 transition-transform duration-300">
                        {metric.value}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 tracking-wide font-sans">
                        {metric.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process Showcase & Key Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4 border-t border-slate-100">
                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Key UX/UI Features Implemented
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-mono text-xs font-bold mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deep Dive Process */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
                    <Compass className="w-5 h-5 text-blue-600" />
                    Strategic Design Phase Breakdown
                  </h4>
                  <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-100">
                    {caseStudy.process.map((step, i) => (
                      <div key={i} className="relative pl-8 group">
                        <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white border border-blue-100 flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300">
                          {i + 1}
                        </span>
                        <h5 className="text-sm font-bold text-slate-800 font-display">{step.phase}</h5>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex justify-end gap-3 z-20">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                id="modal-close-footer"
              >
                Close Case Study
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-sm hover:shadow transition-all text-center cursor-pointer"
                id="modal-cta-contact"
              >
                Discuss This Project
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
