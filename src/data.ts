import { Project, Skill, ProcessStep, Achievement } from './types';
import designerAvatar from './assets/images/designer_avatar_pic_1782816741019.jpg';
import realEstateWork from './assets/images/real_estate_work_1782816689911.jpg';
import luxuryPropertyWork from './assets/images/luxury_property_work_1782816702744.jpg';
import kpiDashboardWork from './assets/images/kpi_dashboard_work_1782816715480.jpg';
import leadGenWork from './assets/images/lead_gen_work_1782816728048.jpg';
 
export const DESIGNER_AVATAR = designerAvatar;
 
export const PROJECTS_DATA: Project[] = [
  {
    id: 'enterprise-real-estate',
    title: 'Enterprise Real Estate Websites',
    category: 'Enterprise Product Design',
    tagline: 'Streamlining commercial property transaction pipelines.',
    description: 'An end-to-end web portal crafted for agents, brokers, and institutional investors to manage multi-million dollar property inventories, transaction tracking, and financial projections.',
    image: realEstateWork,
    tags: ['UX Strategy', 'Enterprise System', 'Responsive Design', 'Figma'],
    caseStudy: {
      role: 'Lead UI/UX Designer',
      duration: '5 Months (2025)',
      toolsUsed: ['Figma', 'ChatGPT', 'Optimal Workshop'],
      challenge: 'Enterprise real estate transactions were managed through outdated, clunky legacy software and manual Excel spreadsheets, leading to a high rate of entry errors and communication gaps between agents and institutional buyers.',
      solution: 'Designed a highly responsive, modern transaction pipeline web app that visualizes listings, aggregates document status, and enables multi-party real-time signing, completely eliminating spreadsheet reliance.',
      keyFeatures: [
        'Dynamic interactive Gantt pipeline for deal closure stages.',
        'Intelligent listings filtering built with responsive grid systems.',
        'Activity feeds showing instant broker updates and document sign-offs.',
        'Accessible, high-contrast dark-mode friendly palette for on-the-field agents.'
      ],
      metrics: [
        { label: 'Pipeline Speed', value: '+42%' },
        { label: 'Data Entry Errors', value: '-65%' },
        { label: 'Mobile Engagement', value: '+110%' }
      ],
      process: [
        { phase: 'Discovery', description: 'Conducted user interviews with 15 agents and 3 institutional buyers to identify critical friction points.' },
        { phase: 'Wireframing', description: 'Created rapid prototypes to align stakeholder expectations on pipeline flow and listings discovery.' },
        { phase: 'UI & Systems', description: 'Drafted responsive components, building a flexible grid-system that handles dense numeric tables effortlessly.' },
        { phase: 'Validation', description: 'Executed remote usability testing sessions with 8 active real-estate brokers, refining the workflow based on core tasks.' }
      ]
    }
  },
  {
    id: 'luxury-property',
    title: 'Luxury Property Platform',
    category: 'High-End Consumer Experience',
    tagline: 'Elevating digital curation for premium international listings.',
    description: 'A rich visual discovery platform featuring curated residential gems. Tailored for ultra-high-net-worth individuals, prioritizing high-fidelity imagery, cinematic motion, and a custom booking experience.',
    image: luxuryPropertyWork,
    tags: ['Visual Identity', 'Typography', 'Interactive Prototyping', 'Figma'],
    caseStudy: {
      role: 'Senior Product Designer',
      duration: '3 Months (2026)',
      toolsUsed: ['Figma', 'Adobe Photoshop', 'Midjourney'],
      challenge: 'A prominent high-end property brand had low inquiry rates on their listings despite excellent photography, because their existing web interface felt generic and lacked emotional premium alignment.',
      solution: 'Re-conceptualized the entire visual architecture with heavy emphasis on editorial typography, grand whitespace layouts, immersive cinematic media players, and a tailored private concierge inquiry flow.',
      keyFeatures: [
        'Editorial serif layout structure with fluid aspect ratios.',
        'Subtle, non-intrusive parallax video backgrounds showing property tours.',
        'Custom private inquiry modal with low-friction inputs optimized for VIP users.',
        'Smooth micro-animations that make property page shifts feel fluid and luxurious.'
      ],
      metrics: [
        { label: 'VIP Inquiries', value: '+85%' },
        { label: 'Time on Page', value: '3.5 Min Avg' },
        { label: 'Bounce Rate', value: '-30%' }
      ],
      process: [
        { phase: 'Research', description: 'Analyzed competitor luxury brand touchpoints (aviation, yachting, fine art) to understand the visual expectations of high-end consumers.' },
        { phase: 'Design System', description: 'Curated a custom typographic pairing featuring Manrope for robust UI elements and a high-contrast elegant serif for display headers.' },
        { phase: 'Prototyping', description: 'Built an interactive, animated high-fidelity prototype in Figma to present the responsive transition states to executive leadership.' }
      ]
    }
  },
  {
    id: 'kpi-dashboard',
    title: 'KPI Performance Dashboard',
    category: 'SaaS & Analytics',
    tagline: 'Synthesizing dense analytical indicators into actionable intelligence.',
    description: 'A comprehensive, responsive analytics dashboard designed for enterprise management to monitor revenue, customer conversion, regional sales, and performance metrics in real time.',
    image: kpiDashboardWork,
    tags: ['Dashboard Design', 'Data Visualization', 'UX Architecture', 'Design Systems'],
    caseStudy: {
      role: 'UI/UX Lead',
      duration: '4 Months (2025)',
      toolsUsed: ['Figma', 'Photoshop', 'Sankey Generator'],
      challenge: 'Executive users were overwhelmed by scattered tables, disconnected Excel charts, and a lack of visual hierarchy, leading to a cognitive overload when trying to extract key business indicators.',
      solution: 'Constructed a modular dashboard with tailored widget cards, dynamic responsive widgets, unified high-contrast chart layouts, and customizable visual priorities tailored per executive role.',
      keyFeatures: [
        'Bento-grid styled layout that adjusts columns dynamically depending on the viewport.',
        'Modular, hot-swappable widget panels for custom data visualization priority.',
        'Color-blind accessible indicator system with high visual contrast indices.',
        'Dense data tables equipped with smart search, sorting, and nested expanders.'
      ],
      metrics: [
        { label: 'Decision Efficiency', value: '+50%' },
        { label: 'User Adoption Rate', value: '94%' },
        { label: 'Load Time UX Feedback', value: '4.8/5' }
      ],
      process: [
        { phase: 'Requirement Gathering', description: 'Collaborated with 10 C-level executives to map out the exact sequence of metric evaluations they run every morning.' },
        { phase: 'Information Architecture', description: 'Designed a unified visual grammar, grouping metrics by tier-1 KPIs and secondary supportive indices.' },
        { phase: 'Component Design', description: 'Engineered a dashboard design system with rigid guidelines on chart colors, font weights, and spacing.' }
      ]
    }
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Landing Pages',
    category: 'Conversion Optimization',
    tagline: 'Perfecting responsive page layouts to skyrocket campaign returns.',
    description: 'A series of high-fidelity, high-converting responsive landing pages designed for premium marketing campaigns. Engineered with psychological visual anchors, responsive visual hierarchy, and fast-loading media.',
    image: leadGenWork,
    tags: ['Responsive UI', 'A/B Testing', 'Conversion Optimization', 'ChatGPT'],
    caseStudy: {
      role: 'Conversion UI Specialist',
      duration: '2 Months (2025)',
      toolsUsed: ['Figma', 'ChatGPT & AI tools', 'Hotjar'],
      challenge: 'Paid media campaigns was suffering from low conversions (1.8%) because users landed on an outdated, non-responsive corporate homepage that did not speak directly to the target offering.',
      solution: 'Crafted a laser-focused, modular responsive landing page template utilizing clear value propositions, interactive risk calculators, visual trust badges, and lightning-fast form checkout steps.',
      keyFeatures: [
        'Sticky floating CTAs that follow the user elegantly on mobile viewports.',
        'An interactive budget/savings calculator that engages users immediately.',
        'Optimized multi-step form fields with custom responsive error feedback.',
        'High-contrast layouts styled perfectly to support fast scanning.'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+140%' },
        { label: 'Mobile Bounce Rate', value: '-48%' },
        { label: 'Average Session Duration', value: '+75%' }
      ],
      process: [
        { phase: 'User Recording Audits', description: 'Analyzed over 400 screen recording sessions to identify exactly where users stopped scrolling or abandoned forms.' },
        { phase: 'Layout Optimization', description: 'Repositioned critical value statements above the fold and replaced static bullet-points with visual icons.' },
        { phase: 'A/B Test Design', description: 'Designed two visual variants focusing on distinct lead capturing methods (direct form vs calculator onboarding), verifying results with statistical tools.' }
      ]
    }
  }
];
 
export const SKILLS_DATA: Skill[] = [
  { name: 'UI Design', category: 'Core Design', level: 5, description: 'Creating visually stunning, accessible interface structures with high attention to spacing, hierarchy, and color harmony.' },
  { name: 'UX Design', category: 'Core Design', level: 5, description: 'Directing user journeys, information architecture, site mapping, and conducting target persona research.' },
  { name: 'Responsive Design', category: 'Core Design', level: 5, description: 'Designing fluid layouts that scale gracefully from watches and smartphones to high-res ultra-wide enterprise monitors.' },
  { name: 'Design Systems', category: 'Core Design', level: 5, description: 'Building atomic component libraries in Figma, complete with variables, autolayout, and detailed developer spec handoffs.' },
  { name: 'Wireframing', category: 'Core Design', level: 4, description: 'Developing skeletal blueprints of interfaces to outline core interactions and validate structures with stakeholders early.' },
  { name: 'Prototyping', category: 'Core Design', level: 5, description: 'Building hyper-realistic interactive micro-flows, transitions, and component state animations in Figma.' },
  { name: 'Dashboard Design', category: 'Core Design', level: 5, description: 'Optimizing high-density data, analytical widgets, and key performance metric presentations.' },
  { name: 'Figma', category: 'Tools', level: 5, description: 'Advanced component building, layout variables, and multi-state interactive visual prototyping.' },
  { name: 'Adobe XD', category: 'Tools', level: 4, description: 'Legacy client layout mapping, prototyping, and design spec translation.' },
  { name: 'Photoshop', category: 'Tools', level: 4, description: 'Image asset creation, photorealistic mockup editing, and creative hero banner adjustments.' },
  { name: 'ChatGPT & AI Tools', category: 'AI Tools', level: 5, description: 'Leveraging AI for rapid user persona generation, copywriting assistance, structured wireframe outlines, and user research synthesis.' }
];
 
export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: '01',
    title: 'Research',
    iconName: 'Search',
    description: 'Analyzing user needs, examining current pipeline bottlenecks, mapping competitor landscapes, and drafting target user personas.',
    deliverables: ['User Personas', 'Competitive Analysis Report', 'Friction Point Audits']
  },
  {
    phase: '02',
    title: 'Wireframes',
    iconName: 'LayoutGrid',
    description: 'Structuring skeletal low-fidelity layouts to map flows, define navigation hierarchies, and optimize content structure before styling.',
    deliverables: ['Lo-Fi Mockups', 'Interaction Flowcharts', 'Navigational Blueprints']
  },
  {
    phase: '03',
    title: 'UI Design',
    iconName: 'Sparkles',
    description: 'Breathing visual life into validated wireframes with modern typography pairing, deep responsive grids, blue branding cues, and premium high-contrast components.',
    deliverables: ['Hi-Fi Screen Mockups', 'Component Styles', 'Atomic Style Guidelines']
  },
  {
    phase: '04',
    title: 'Prototype',
    iconName: 'Play',
    description: 'Connecting individual screens with interactive motion paths, state changes, hover signals, and click sequences in Figma to simulate a live application.',
    deliverables: ['Interactive Prototypes', 'Micro-interaction Models', 'Staging Walkthroughs']
  },
  {
    phase: '05',
    title: 'Testing',
    iconName: 'ShieldAlert',
    description: 'Orchestrating remote and live usability testing sessions, reviewing interaction logs, identifying minor grid bugs, and refining flows for maximum clarity.',
    deliverables: ['Usability Test Logs', 'Task Completion Matrices', 'A/B Variant Audits']
  },
  {
    phase: '06',
    title: 'Developer Handoff',
    iconName: 'FileCode',
    description: 'Documenting spacing constants, color codes, custom icons, layout constraints, and aligning with front-end engineers and QA to ensure pixel-perfect fidelity.',
    deliverables: ['Figma Token Map', 'Responsive Spec Sheet', 'QA Design Checklist']
  }
];
 
export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    stat: '300+',
    label: 'Responsive Pages Designed',
    description: 'Meticulously planned pages that scale smoothly from small screen touch layouts to dense professional workstations.'
  },
  {
    stat: '50+',
    label: 'Enterprise Projects',
    description: 'Delivered powerful SaaS tools, real estate deal tracking pipelines, analytics grids, and CRM portals.'
  },
  {
    stat: '100%',
    label: 'Mobile-First Specialist',
    description: 'Engineering layout flows starting from the absolute smallest touch boundaries to guarantee seamless modern use.'
  },
  {
    stat: '10/10',
    label: 'Cross-Functional Collaboration',
    description: 'Cohesive workflow pairing with product managers, QA specialists, backend developers, and business stakeholders.'
  }
];
 
