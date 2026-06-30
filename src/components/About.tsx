import { Shield, Users, Layers, Zap } from 'lucide-react';
import { DESIGNER_AVATAR } from '../data';

export default function About() {
  const values = [
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: 'Atomic Design Systems',
      description: 'Engineering centralized token frameworks and component hierarchies that allow development teams to ship complex, responsive screens with absolute visual consistency.'
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: 'Cross-Functional Collaboration',
      description: 'Liaising daily with product executives, engineers, and quality assurance specialists to validate interaction maps, resolve edge-case states, and ensure pixel perfection.'
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: 'Accessible & Compliant',
      description: 'Championing high visual accessibility (WCAG AA standards) across SaaS platforms to guarantee readability and intuitive interactive use for all user groups.'
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: 'AI-Accelerated Workflows',
      description: 'Using advanced LLM and AI wireframing engines to automate qualitative research synthesis and copy variations, reducing early design exploration cycles by 40%.'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-100" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Picture and Quote */}
          <div className="lg:col-span-5 space-y-6" id="about-visuals">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              {/* Outer decorative borders */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500"></div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-md">
                <img
                  src={DESIGNER_AVATAR}
                  alt="Gowtham - UI/UX Specialist"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Badge overlay */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-4 rounded-xl shadow-lg border border-slate-800 text-left max-w-[200px]">
                <p className="text-xs text-blue-400 font-mono font-bold uppercase tracking-wider">Expertise</p>
                <p className="text-sm font-bold mt-1 font-display">Enterprise Real Estate & Responsive Systems</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-details">
            <div>
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1.5">
                Designing products that align user joy with commercial success
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm <strong>Gowtham</strong>. I specialize in designing responsive websites, complex data dashboards, high-converting landing pages, and centralized design systems. My focus lies in stripping away complexity from enterprise environments, rendering data as clean actionable intelligence.
              </p>
              <p>
                My design journey is defined by close cross-functional collaboration. I believe that premier designs are never built in isolation; they are polished through continuous feedback with business stakeholders, developers, and QA teams to make sure the final product matches the code precisely.
              </p>
            </div>

            {/* Core Values / Work Style Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100" id="about-values-grid">
              {values.map((val, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      {val.icon}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{val.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-10">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
