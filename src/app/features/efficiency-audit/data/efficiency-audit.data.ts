export const AUDIT_EMAIL = 'info@rishvi.co.uk';
export const AUDIT_PHONE = '+44 20 8050 3432';

export const AUDIT_INTRO = {
  eyebrow: 'Linnworks Efficiency Audit',
  title: 'Is Your Linnworks Setup Helping You Scale Or Quietly Slowing You Down?',
  text: 'Rishvi Ltd helps Linnworks users reduce manual work, automate workflows, build custom scripts and streamline marketplace operations. Book a free Linnworks Efficiency Audit and find out exactly where your setup could save time and money.',
  cta: 'Speak to a Linnworks Specialist',
};

export const PROBLEMS = {
  title: 'Most Linnworks Problems Are Not Platform Problems They Are Setup, Workflow and Automation Problems',
  text: 'Many growing e-commerce businesses rely on Linnworks every day, but their setup often becomes inefficient as order volume, marketplaces, SKUs, warehouses and fulfilment processes increase.',
  prompt: 'If you recognise any of the following, your Linnworks setup may need a review. Tick the ones that sound familiar:',
  result: 'The result is simple: the business keeps running but with more time, more manual effort and more avoidable cost than necessary.',
  items: [
    'Staff repeating tasks that should be automated',
    'Order processing taking longer than it should',
    'Reporting gaps that require manual spreadsheet work',
    'Inventory rules that no longer match how your business operates',
    'Shipping and fulfilment steps being managed outside Linnworks',
    'Channel-specific exceptions creating unnecessary daily admin',
    'Workflows that made sense at 500 orders/week but now restrict growth at 3,000+',
  ],
};

export interface AuditCard {
  icon: string;
  title: string;
  text: string;
}

export const GET_HEAD = {
  title: 'What You Get in the Free Linnworks Efficiency Audit',
  text: 'A practical, no-obligation review for active Linnworks users who want to reduce operational friction and identify automation opportunities.',
  note: 'No obligation. This audit is designed to identify practical Linnworks improvement opportunities before any paid work is discussed.',
  cta: 'Request My Free Audit',
};

export const AUDIT_GET: AuditCard[] = [
  { icon: 'pi-sitemap', title: 'Workflow Review', text: 'We assess how orders, inventory, reporting and fulfilment currently move through your Linnworks setup and where the friction points are.' },
  { icon: 'pi-bolt', title: 'Automation Opportunity Check', text: 'We identify repetitive tasks that could be handled through macros, custom scripts, rules or integrations so your team spends less time on admin.' },
  { icon: 'pi-chart-bar', title: 'Custom Script and Reporting Review', text: 'We look for reporting gaps where SQL custom scripts or dashboards could provide better visibility across orders, stock and channel performance.' },
  { icon: 'pi-truck', title: 'Shipping and Integration Review', text: 'We assess whether your shipping carriers, sales channels, accounting tools or third-party systems are creating avoidable manual work inside Linnworks.' },
  { icon: 'pi-sparkles', title: 'AI Integration Opportunity Check', text: 'We identify where AI-assisted tools could connect into your Linnworks workflows for smarter demand forecasting, order routing and anomaly detection.' },
  { icon: 'pi-list-check', title: 'Priority Recommendations', text: 'You receive a clear, practical summary of the highest-impact improvements to consider first with no obligation to proceed.' },
  { icon: 'pi-box', title: 'Inventory Management Review', text: 'We assess how your stock levels, replenishment rules and inventory logic are configured across locations and channels identifying where overselling, stockouts or manual adjustments are creating unnecessary risk and operational overhead.' },
  { icon: 'pi-share-alt', title: 'Channel Integration Review', text: 'We review how your sales channels, including Amazon, eBay, Shopify and others are connected and synced within Linnworks, highlighting gaps where data inconsistencies, listing errors or manual updates between channels are slowing your team down.' },
];

export interface AuditStat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const AUDIT_STATS: AuditStat[] = [
  { value: 630, suffix: '', label: 'Project Completed', icon: 'pi-cog' },
  { value: 28, suffix: '', label: 'IT Specialist', icon: 'pi-headphones' },
  { value: 900, suffix: '+', label: 'Happy Clients', icon: 'pi-heart' },
  { value: 650, suffix: '+', label: 'Smart Solution', icon: 'pi-lightbulb' },
];

export const SERVICES_HEAD = {
  eyebrow: 'Linnworks Services',
  title: 'Our Linnworks Services',
  text: 'From quick wins to deep customisation we build solutions around how your business actually operates.',
};

export const AUDIT_SERVICES: AuditCard[] = [
  { icon: 'pi-sitemap', title: 'Custom Workflows', text: 'We design and implement Linnworks workflows tailored to your order volumes, channels, warehouse setup and fulfilment requirements.' },
  { icon: 'pi-database', title: 'SQL Custom Scripts', text: 'We build custom SQL scripts and queries to automate reporting, surface operational insights and replace manual spreadsheet work.' },
  { icon: 'pi-bolt', title: 'Macros and Automation', text: 'We create Linnworks macros to automate repetitive order processing tasks, reduce human error and speed up daily operations.' },
  { icon: 'pi-truck', title: 'Shipping Integrations', text: 'We build direct shipping carrier integrations into Linnworks, including DHL, Stream and custom carriers reducing manual label generation and tracking steps.' },
  { icon: 'pi-share-alt', title: 'Channel and Third-Party Integrations', text: 'We connect Linnworks to your sales channels, accounting systems, logistics providers and internal tools to remove manual data entry across your operation.' },
  { icon: 'pi-sliders-h', title: 'Rules Engine Customisation', text: 'We configure and refine your Linnworks Rules Engine so it reflects how your business actually operates automating decisions and exceptions instead of leaving staff to handle them manually.' },
  { icon: 'pi-sparkles', title: 'AI-Assisted Workflow Integration', text: 'We integrate AI-powered tools into your Linnworks environment for demand forecasting, intelligent order routing and automated operational reporting.' },
  { icon: 'pi-th-large', title: 'Linnworks Customisation Apps', text: 'We develop custom Linnworks apps and extensions through linnworkscustom.com to extend platform functionality beyond the standard feature set.' },
  { icon: 'pi-warehouse', title: 'Warehouse & Inventory Management', text: 'We help you gain deeper visibility over stock levels and prevent shortages, using tools like HyperStock and HyperLook for Linnworks to keep your warehouse workflow accurate and efficient.' },
  { icon: 'pi-calculator', title: 'ERP & Accounting Integrations', text: 'We connect Linnworks to the accounting and ERP systems you already use (Xero / Sage / QuickBooks / other) so orders, stock and invoices flow through without manual re-entry.' },
  { icon: 'pi-headphones', title: 'Ongoing Support', text: "Ongoing Linnworks Support Once your setup is optimised, we don't disappear we offer retainer or ad hoc support to keep everything running smoothly as your business and order volume grow." },
];

export const WHY_US = {
  eyebrow: 'Why Us',
  title: 'Why E-Commerce Retailers Choose Rishvi',
  items: [
    '12+ Years of Linnworks Expertise',
    'Linnworks Certified Partner',
    'Built for Growing Retailers',
    'Technical Depth',
    'ISO/IEC 27001:2022 Certified',
    'Part of a Wider E-Commerce Ecosystem',
    'Ongoing Support, Not Just One-Off Projects',
  ],
};

export const BEFORE_AFTER = {
  title: 'What Optimised Linnworks Setups Deliver',
  rows: [
    { before: 'Manual order routing by staff', after: 'Fully automated order routing rules' },
    { before: 'Hours spent on manual reporting', after: 'Custom SQL scripts generating reports automatically' },
    { before: 'Shipping labels created manually', after: 'Direct carrier integration with automated label generation' },
    { before: 'Inefficient workflows slowing dispatch', after: 'Streamlined workflows reducing processing time by 60–70%' },
    { before: 'Staff managing exceptions by hand', after: 'Macro automation handling exceptions automatically' },
    { before: 'No visibility across channels', after: 'Custom dashboards showing real-time channel performance' },
  ],
};

export const AUDIT_FAQS = [
  {
    question: 'Is the audit really free?',
    answer:
      'Yes, completely. The audit is designed to give you clarity on where your Linnworks setup could be improved. If there is a clear opportunity for Rishvi to support you further, we can discuss next steps after the audit with no pressure.',
  },
  {
    question: 'Do you need access to our Linnworks account?',
    answer:
      'Not at the first stage. We begin with a conversation about your workflows, challenges, channels and current setup. If a deeper technical review is needed, we agree access requirements with you separately.',
  },
  {
    question: 'Is this only for large retailers?',
    answer:
      'No. We work with businesses at all stages of growth. If you are actively using Linnworks and want to reduce manual work, improve reporting or streamline operations, the audit is relevant for you.',
  },
  {
    question: 'What Linnworks services do you provide?',
    answer:
      'We provide custom workflows, SQL scripts, macros, on-screen automation, shipping integrations, channel integrations, AI-assisted workflow tools and Linnworks customisation apps.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'A member of the Rishvi team will review your enquiry, contact you to understand your current setup, and arrange the audit call at a time that suits you.',
  },
  {
    question: 'How long has Rishvi been working with Linnworks?',
    answer: 'Over 12 years. We have supported more than 500 e-commerce businesses and built over 850 custom SQL scripts during that time.',
  },
];

export const HELP_OPTIONS = [
  'Custom workflows',
  'SQL custom scripts / reporting',
  'Macros and automation',
  'Shipping integrations',
  'Channel integrations',
  'AI-assisted workflows',
  'Inventory management',
  'Not sure yet',
];
