export const UAE_EMAIL = 'info@rishvi.co.uk';
export const UAE_LINK = `mailto:${UAE_EMAIL}?subject=${encodeURIComponent('UAE e-Invoicing consultation')}`;

export const UAE_IMAGES = {
  hero: 'assest/image_01-01-e1773640338663 (1).webp',
  workflow: 'assest/Corner-Image-01-6 (1).webp',
  why: 'assest/Chart-01-01 (1).webp',
  iso: 'assest/9138d2_05c1b6701b7b4277a30a1bfc8b2ce527mv2-1 (1).webp',
  cmmi: 'assest/CMMI-3-2048x1075.webp',
  news: [
    'assest/UAE-E-Invoicing-for-SMEs-What-Small-Businesses-Must-Do-Before-Mandatory-Compliance.webp',
    'assest/UAE-E-Invoicing-Accredited-Service-Providers-ASP-How-Businesses-Should-Choose-One-01.webp',
    'assest/UAE-E-Invoicing-Complete-Guide-for-Businesses-Compliance-and-Future-Readiness.webp',
  ],
};

export const UAE_INTRO = {
  eyebrow: 'ERP Integration Experts',
  title: 'UAE E-Invoicing Readiness & Integration Services',
  paragraphs: [
    'Prepare your business for the upcoming UAE e-Invoicing mandate.',
    'We help companies implement compliant e-Invoicing workflows, integrate ERP systems with Peppol networks, and work with accredited providers to ensure a smooth transition before the 2027 deadline.',
  ],
  cta: 'Get UAE e-Invoicing Consultation',
  chips: ['VAT Validation', 'Invoice Processing', 'Document Archiving', 'Data Synchronization'],
};

export const UAE_TIMELINE = {
  eyebrow: 'Timeline',
  title: 'UAE e-Invoicing Implementation Timeline',
  text: 'The UAE e-Invoicing mandate will be introduced in a phased rollout starting from 2026.',
  phases: [
    { when: 'Jul 2026', title: 'Pilot Phase (Optional Participation)', lines: ['Start Date: July 1, 2026', 'Selected taxpayers will participate in a pilot program.', 'Businesses may also voluntarily join to prepare early.'] },
    { when: 'Jan 2027', title: 'Phase 1 – Large Businesses', lines: ['Annual Revenue: Above AED 50 Million', 'ASP Appointment Deadline: July 31, 2026', 'Go-Live Date: January 1, 2027'] },
    { when: 'Jul 2027', title: 'Phase 2 – Small & Medium Enterprises', lines: ['Annual Revenue: Below AED 50 Million', 'ASP Appointment Deadline: March 31, 2027', 'Go-Live Date: July 1, 2027'] },
    { when: 'Oct 2027', title: 'Phase 3 – Government Entities (B2G)', lines: ['ASP Appointment Deadline: March 31, 2027', 'Go-Live Date: October 1, 2027'] },
  ],
  quote: '“Businesses must appoint an Accredited Service Provider (ASP) before their respective deadlines to ensure compliance.”',
  cta: 'Book a Free Consultation',
};

export const UAE_RISK = {
  eyebrow: 'Why Need Preparation',
  title: 'What Happens If Your Business Is Not Ready?',
  intro: 'Without proper preparation, companies may face operational and compliance challenges.',
  label: 'Common risks include:',
  risks: [
    { icon: 'pi-times-circle', text: 'Invoice rejections due to incorrect formats' },
    { icon: 'pi-clock', text: 'Delayed payments from customers' },
    { icon: 'pi-link', text: 'ERP integration issues with ASP platforms' },
    { icon: 'pi-bolt', text: 'Last-minute compliance pressure' },
    { icon: 'pi-exclamation-triangle', text: 'Potential regulatory penalties' },
  ],
  outro: 'Early preparation ensures a smooth transition to the new digital invoicing environment.',
  cta: 'Contact Us',
};

export const UAE_SERVICES = {
  eyebrow: 'How Rishvi Helps',
  title: 'Our UAE e-Invoicing Services',
  items: [
    { icon: 'pi-search', title: 'e-Invoicing Readiness Assessment', text: 'Evaluate your existing invoicing workflows, ERP systems, and data structures to identify compliance gaps.' },
    { icon: 'pi-share-alt', title: 'ERP Integration', text: 'Integrate your ERP or accounting system with UAE-approved e-Invoicing platforms and Peppol networks.' },
    { icon: 'pi-verified', title: 'ASP Selection Support', text: 'Help you evaluate and choose the right Accredited Service Provider based on your business needs.' },
    { icon: 'pi-sitemap', title: 'Data Mapping & Invoice Format Setup', text: 'Ensure your invoices meet the PINT AE data dictionary requirements.' },
    { icon: 'pi-check-square', title: 'Implementation & Testing', text: 'Support system configuration, sandbox testing, and end-to-end invoice validation.' },
    { icon: 'pi-shield', title: 'Compliance Advisory', text: 'Provide ongoing support for regulatory updates and technical changes.' },
  ],
};

export const UAE_FLOW = {
  eyebrow: 'UAE e-Invoicing Workflow',
  title: 'How UAE e-Invoicing Works',
  text: 'The UAE uses a Peppol-based 5-corner model to exchange invoices.',
  steps: [
    'Seller issues the invoice from accounting software / ERP',
    'It is submitted to the seller’s Accredited Service Provider (Corner 2) for validation',
    'The ASP reports to the MOF & FTA (Corner 3) for e-invoice validation',
    'A validation response comes back through Peppol',
    'The invoice is shared via Peppol to the buyer’s ASP (Corner 4)',
    'It is delivered to the buyer’s accounting software / ERP (Corner 5)',
  ],
};

export const UAE_WHY = {
  eyebrow: 'Why Choose Rishvi',
  title: 'Why Work With Rishvi',
  text: 'Our team helps businesses navigate complex e-Invoicing requirements and technical integrations.',
  points: ['Deep expertise in ERP integrations', 'Experience with Peppol-based invoicing frameworks', 'Independent consulting approach', 'Support across multiple invoicing platforms', 'End-to-end implementation assistance'],
  outro: 'We focus on practical solutions that fit your existing systems and workflows.',
  cta: 'Learn More About Us',
};

export const UAE_CERTS = {
  eyebrow: 'Certification',
  title: 'Quality Standards & Accreditations',
  text: 'Committed to excellence through certified processes and validated performance.',
  iso: 'We are ISO/IEC 27001:2022 certified, ensuring world-class information security management.',
  cmmi: 'We are a CMMI Level 3 certified organization, committed to continuous process improvement and quality delivery.',
};

export const UAE_FAQ_HEAD = { eyebrow: "FAQ's", title: 'Frequently Asked Questions' };

export const UAE_FAQS = [
  { question: 'What is UAE e-Invoicing and how does it work?', answer: 'UAE e-Invoicing is a system where invoices are generated, transmitted, and stored in a structured electronic format. Businesses must send invoices through Accredited Service Providers (ASPs) using a Peppol-based network, enabling real-time validation and reporting to the Federal Tax Authority.' },
  { question: 'When will e-Invoicing become mandatory in the UAE?', answer: 'The UAE will roll out e-Invoicing starting with a pilot in July 2026. Mandatory compliance begins in 2027, with phased implementation for large businesses, SMEs, and government entities.' },
  { question: 'Who needs to comply with UAE e-Invoicing regulations?', answer: 'All VAT-registered businesses in the UAE, including mainland and eligible free zone companies, will be required to comply. This includes both B2B and B2G transactions.' },
  { question: 'Do I need an Accredited Service Provider (ASP) for UAE e-Invoicing?', answer: 'Yes. Businesses must connect to the e-Invoicing system through a UAE-approved Accredited Service Provider (ASP) to exchange invoices and report tax data.' },
  { question: 'Can my existing ERP system be used for UAE e-Invoicing?', answer: 'Yes. Most ERP and accounting systems such as SAP, Oracle, Microsoft Dynamics, Odoo, and others can be integrated with e-Invoicing platforms using APIs or middleware solutions.' },
  { question: 'What is the Peppol 5-corner model in UAE e-Invoicing?', answer: 'The UAE uses a Peppol-based 5-corner model where invoices are exchanged between supplier and buyer through ASPs, while tax data is simultaneously reported to the Federal Tax Authority in near real-time.' },
  { question: 'What is PINT AE format in UAE e-Invoicing?', answer: 'PINT AE is the UAE-specific invoice data standard based on Peppol. It defines the structure and required fields for compliant e-Invoices and ensures interoperability across systems.' },
  { question: 'What happens if my business is not ready for e-Invoicing?', answer: 'Non-compliance may lead to invoice rejections, delays in payments, operational disruptions, and potential penalties from tax authorities.' },
  { question: 'How long does it take to implement UAE e-Invoicing?', answer: 'Implementation typically takes between 4 to 12 weeks depending on your ERP system, business complexity, and integration requirements.' },
  { question: 'How can Rishvi help with UAE e-Invoicing compliance?', answer: 'Rishvi provides end-to-end support including readiness assessment, ERP integration, ASP selection guidance, data mapping, testing, and ongoing compliance consulting.' },
];

export const UAE_NEWS = {
  eyebrow: 'Our Latest Update',
  title: 'Read Our Latest News',
  text: 'Stay updated with the latest news and insights from our industry and beyond.',
  items: [
    { title: 'UAE E-Invoicing for SMEs: What Small Businesses Must Do Before Mandatory Compliance', text: 'The UAE is preparing to introduce mandatory e-invoicing as part', date: 'June 16, 2026' },
    { title: 'UAE E-Invoicing Accredited Service Providers (ASP): How Businesses Should Choose the Right One', text: 'The UAE is preparing for the implementation of mandatory e-invoicing', date: 'June 2, 2026' },
    { title: 'UAE E-Invoicing: Complete Guide for Businesses, Compliance, and Future Readiness', text: 'UAE e-Invoicing is set to transform how businesses create, exchange,', date: 'February 10, 2026' },
  ],
};
