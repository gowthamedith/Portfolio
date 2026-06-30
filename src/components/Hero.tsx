import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Monitor, Tablet, Smartphone, Sparkles, Database, Layout } from 'lucide-react';
import { DESIGNER_AVATAR } from '../data';

export default function Hero() {
  const [viewportSize, setViewportSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const viewportWidths = {
    desktop: 'w-full max-w-md md:max-w-xl',
    tablet: 'w-[380px]',
    mobile: 'w-[260px]'
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      id="hero"
    >
      {/* Background visual details */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[45%] aspect-square rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] aspect-square rounded-full bg-blue-50/40 blur-3xl"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 space-y-6 text-left" id="hero-content">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/50">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-sans">
              UI/UX Designer Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.1] !mt-3">
            Gowtham <br />
            <span className="text-blue-600 font-bold relative inline-block">
              UI/UX Designer
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-800 font-display leading-snug">
            Designing intuitive digital experiences that deliver measurable business value.
          </p>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed font-sans !mt-4">
            Specializing in complex enterprise real estate platforms, unified design systems, financial analytics dashboards, and responsive web systems that bridges user delight with corporate performance objectives.
          </p>

          {/* Micro Tag Badges */}
          <div className="flex flex-wrap gap-2 pt-2" id="hero-focus-tags">
            {['Responsive Web', 'Design Systems', 'Dashboards', 'Enterprise UX'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white text-slate-600 rounded-lg text-xs font-medium border border-slate-100 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-ctas">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              id="hero-view-work-btn"
            >
              View Featured Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              id="hero-contact-btn"
            >
              Contact Me
              <MessageSquare className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Mini trust stats in hero margin */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 !mt-8" id="hero-mini-stats">
            <div>
              <p className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-none">300+</p>
              <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Pages Designed</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-none">50+</p>
              <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-display text-emerald-600 leading-none">100%</p>
              <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Mobile-First Specialist</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Responsive Sandbox */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center" id="hero-sandbox">
          <div className="w-full flex flex-col items-center">
            {/* Control buttons for Viewport */}
            <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl mb-4 border border-slate-200/50 shadow-inner z-10">
              <button
                onClick={() => setViewportSize('desktop')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportSize === 'desktop'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="viewport-desktop-btn"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setViewportSize('tablet')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportSize === 'tablet'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="viewport-tablet-btn"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setViewportSize('mobile')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportSize === 'mobile'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="viewport-mobile-btn"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Viewport Frame */}
            <div className="w-full flex justify-center h-[380px] sm:h-[440px] items-center">
              <div
                className={`bg-slate-900 rounded-2xl shadow-2xl p-2.5 transition-all duration-500 ease-out border-4 border-slate-850 h-full flex flex-col relative ${viewportWidths[viewportSize]}`}
                id="interactive-device-frame"
              >
                {/* Device Camera Notch / Bar */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full flex items-center justify-center gap-1 px-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                </div>

                {/* Device Screen Area */}
                <div className="bg-white w-full h-full rounded-xl overflow-y-auto overflow-x-hidden p-4 relative text-left flex flex-col justify-between mt-3">
                  {/* Embedded Custom UI Card */}
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={DESIGNER_AVATAR}
                          alt="Gowtham Logo"
                          className="w-5 h-5 rounded-full ring-1 ring-slate-100"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[10px] font-bold text-slate-800 tracking-tight font-display">Skyline Real Estate</span>
                      </div>
                      <span className="text-[8px] px-2 py-0.5 bg-blue-50 text-blue-600 font-bold rounded-full uppercase tracking-wider">
                        Live Demo
                      </span>
                    </div>

                    {/* Dynamic Layout Based on Size */}
                    {viewportSize === 'desktop' ? (
                      /* Desktop Sandbox View */
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                          <h4 className="text-[11px] font-bold text-slate-800 font-display">Luxury Penthouse Offering</h4>
                          <p className="text-[8px] text-slate-400">404 Park Avenue, NY</p>
                          <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="bg-white p-1.5 rounded border border-slate-50 text-center">
                              <span className="block text-[10px] font-bold text-blue-600">$4.5M</span>
                              <span className="text-[6px] text-slate-400">Guide Price</span>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-slate-50 text-center">
                              <span className="block text-[10px] font-bold text-blue-600">4,200</span>
                              <span className="text-[6px] text-slate-400">Sq. Feet</span>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-slate-50 text-center">
                              <span className="block text-[10px] font-bold text-blue-600">12%</span>
                              <span className="text-[6px] text-slate-400">Est. ROI</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 p-3 bg-slate-900 text-white rounded-lg flex flex-col justify-between">
                          <div>
                            <span className="text-[7px] text-slate-400 uppercase font-mono">Commission</span>
                            <span className="block text-sm font-extrabold text-white mt-1">$135K</span>
                          </div>
                          <button className="w-full bg-blue-600 text-[8px] font-bold py-1.5 rounded text-white text-center mt-2 cursor-pointer">
                            Approve Deal
                          </button>
                        </div>
                      </div>
                    ) : viewportSize === 'tablet' ? (
                      /* Tablet Sandbox View */
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-[10px] font-bold text-slate-800 font-display">Luxury Penthouse Offering</h4>
                              <p className="text-[7px] text-slate-400">404 Park Avenue, NY</p>
                            </div>
                            <span className="text-[10px] font-bold text-blue-600">$4.5M</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-2.5">
                            <div className="bg-white p-1 rounded text-center">
                              <span className="block text-[8px] font-bold text-slate-700">4,200 Sq Ft</span>
                            </div>
                            <div className="bg-white p-1 rounded text-center">
                              <span className="block text-[8px] font-bold text-slate-700">12% Est ROI</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-slate-900 text-white p-2.5 rounded-lg flex justify-between items-center">
                            <span className="text-[8px] text-slate-400 font-mono">Commission</span>
                            <span className="text-[10px] font-bold">$135K</span>
                          </div>
                          <button className="bg-blue-600 text-white text-[8px] font-bold px-4 rounded-lg cursor-pointer">
                            Approve
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Mobile Sandbox View */
                      <div className="space-y-2.5">
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
                          <div>
                            <h4 className="text-[9px] font-bold text-slate-850 font-display">Luxury Penthouse</h4>
                            <p className="text-[7px] text-slate-400">404 Park Avenue, NY</p>
                          </div>
                          <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-50">
                            <span className="text-[8px] text-slate-400">Guide Price</span>
                            <span className="text-[9px] font-extrabold text-blue-600">$4.5M</span>
                          </div>
                          <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-50">
                            <span className="text-[8px] text-slate-400">Est. ROI</span>
                            <span className="text-[9px] font-extrabold text-blue-600">12%</span>
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white text-[8px] font-bold py-2 rounded-lg cursor-pointer">
                          Approve $135K Commission
                        </button>
                      </div>
                    )}

                    {/* Dynamic Secondary Widgets */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100 flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <div>
                          <span className="block text-[7px] text-slate-400">Design Tokens</span>
                          <span className="block text-[8px] font-bold text-slate-700">98% Synced</span>
                        </div>
                      </div>
                      <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100 flex items-center gap-2">
                        <Layout className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <div>
                          <span className="block text-[7px] text-slate-400">Flex Grid</span>
                          <span className="block text-[8px] font-bold text-slate-700">Adaptive</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsive Status footer inside screen */}
                  <div className="border-t border-slate-100 pt-2 flex justify-between items-center mt-4">
                    <span className="text-[7px] text-slate-400 font-mono">Viewport: {viewportSize.toUpperCase()}</span>
                    <span className="text-[7px] text-emerald-600 font-semibold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Fully Fluid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hint subtitle */}
            <p className="text-xs text-slate-400 font-mono text-center mt-2 animate-pulse">
              ▲ Click device triggers to test responsive layout reflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
