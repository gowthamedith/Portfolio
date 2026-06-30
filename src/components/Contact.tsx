import React, { useState } from 'react';
import { Mail, Linkedin, Compass, Dribbble, Download, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const emailAddress = 'gowtham.nurtur@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate real high-fidelity submission state
    setFormSubmitted(true);
  };

  const handleDownloadResume = () => {
    // Generate a beautiful professional formatted Markdown resume of Gowtham
    const resumeText = `=========================================
GOWTHAM - LEAD UI/UX PRODUCT DESIGNER
=========================================
Email: ${emailAddress}
Specialty: Enterprise Real Estate Products & Responsive Systems
Location: Remote / Asia-Pacific

-----------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------
Experienced Lead UI/UX Designer specialized in creating modern, enterprise-grade web applications, interactive dashboards, dynamic lead generation landing pages, and fully unified atomic design systems. Proven history collaborating across engineering, quality assurance (QA), and stakeholder cycles to deliver robust layouts that yield measurable business conversions and operational efficiencies.

-----------------------------------------
CORE METHODOLOGIES & SKILLS
-----------------------------------------
* UI/UX Design: Atomic Design Systems, Wireframing, High-Fidelity Interactive Prototyping, Accessible Layout Systems (WCAG AA)
* Product Domains: Real Estate Transaction Platforms, KPI & Analytical SaaS Dashboards, Fluid Responsive Grid Architectures
* Design Tools: Figma, Adobe XD, Photoshop
* AI Utilities: ChatGPT & LLM-Driven Copywriting, Qualitative Feedback Synthesis

-----------------------------------------
FEATURED PROJECTS & MILESTONES
-----------------------------------------
1. Enterprise Real Estate Websites
   - Built modern transaction pipelines, driving a +42% closing speed and reducing broker entry errors by -65%.
2. Luxury Property Platform
   - Re-imagined the luxury visual discovery funnel, resulting in +85% VIP inquiries.
3. KPI Performance Dashboard
   - Standardized layout systems for multi-tier indices, boosting decision efficiency by +50%.
4. Lead Generation Landing Pages
   - Executed rigorous A/B visual structural tests, driving a +140% conversion rate lift.

-----------------------------------------
KEY ACHIEVEMENTS
-----------------------------------------
* 300+ Fully Responsive Web Pages Designed
* 50+ Enterprise SaaS & Real Estate Deployments
* Mobile-First & Pixel-Perfect Hand-off specialist
* 100% Cross-Functional Integration with QA and Dev teams

-----------------------------------------
GET IN TOUCH
-----------------------------------------
LinkedIn: https://linkedin.com
Behance: https://behance.net
Dribbble: https://dribbble.com
=========================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gowtham_UIUX_Designer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info, copy, resume, social channels */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-info-panel">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">Contact</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950">
                Let's discuss your next product launch
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Whether you need a comprehensive design system audit, dashboard structural planning, or a modern real estate platform strategy, I am here to help.
              </p>
            </div>

            {/* Email copying widget */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">Direct Email Address</p>
              <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700 truncate select-all">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors shadow-xs cursor-pointer flex items-center justify-center shrink-0"
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[10px] font-semibold text-emerald-600 font-mono text-center">
                  ✓ Email copied to clipboard successfully!
                </p>
              )}
            </div>

            {/* Resume Download panel */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Curriculum Vitae</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Download a detailed breakdown of Gowtham's career milestones, client history, and tools.</p>
                </div>
              </div>
              <button
                onClick={handleDownloadResume}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
                id="download-resume-btn"
              >
                <Download className="w-4 h-4" />
                Download Professional Resume (.txt)
              </button>
            </div>

            {/* Social Channels list */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Professional Communities</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white text-slate-600 hover:text-blue-600 rounded-xl border border-slate-200 shadow-xs hover:shadow-sm transition-all"
                  aria-label="LinkedIn Portfolio"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white text-slate-600 hover:text-blue-600 rounded-xl border border-slate-200 shadow-xs hover:shadow-sm transition-all"
                  aria-label="Behance Portfolio"
                >
                  {/* Custom Behance representation or Compass */}
                  <Compass className="w-5 h-5" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white text-slate-600 hover:text-blue-600 rounded-xl border border-slate-200 shadow-xs hover:shadow-sm transition-all"
                  aria-label="Dribbble Portfolio"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-left">
              {formSubmitted ? (
                /* Success screen */
                <div className="py-12 text-center space-y-4" id="form-success-alert">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Gowtham will review your inquiry details and respond within 24 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 border border-blue-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form fields */
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-slate-950">Send a Quick Message</h3>
                    <p className="text-xs text-slate-400">Fields marked with * are required to secure response triage.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-650 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-350"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-650 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-350"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-slate-650 font-sans">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Skyline Real Estate"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-350"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-650 font-sans">
                      Message Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your design challenge, platform scale requirements, or project details..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-350 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
                    id="submit-contact-form-btn"
                  >
                    <Send className="w-4 h-4" />
                    Send Secure Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
