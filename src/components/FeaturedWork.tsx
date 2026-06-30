import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FolderOpen, Eye } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data';
import CaseStudyModal from './CaseStudyModal';

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-100" id="work">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-3">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">Portfolio Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
              Explore custom UI/UX solutions spanning analytical SaaS software, enterprise real-estate transaction paths, and premium visual interfaces.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <FolderOpen className="w-4 h-4 text-blue-500" />
            <span>4 High-Fidelity Prototypes Available</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 duration-300 text-left flex flex-col"
              id={`project-card-${project.id}`}
            >
              {/* Thumbnail Area with hover overlay effect */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="px-5 py-2.5 bg-white text-slate-900 font-bold rounded-xl shadow-md text-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-blue-600" />
                    Read Case Study
                  </button>
                </div>

                {/* Tag Overlay top-left */}
                <div className="absolute top-4 left-4 bg-white/95 text-slate-800 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-100/30">
                  {project.category}
                </div>
              </div>

              {/* Text Description Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold font-mono text-slate-400 uppercase bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-display group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.caseStudy.metrics.slice(0, 2).map((met, i) => (
                      <div key={i} className="text-left">
                        <span className="block text-sm font-extrabold text-blue-600 font-display leading-none">{met.value}</span>
                        <span className="text-[9px] text-slate-400 font-bold tracking-tight uppercase">{met.label}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    id={`view-study-btn-${project.id}`}
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modular Case Study Detail Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </section>
  );
}
