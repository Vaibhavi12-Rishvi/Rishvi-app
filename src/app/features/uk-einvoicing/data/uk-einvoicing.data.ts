export const UK_EMAIL = 'info@rishvi.co.uk';
export const UK_LINK = `mailto:${UK_EMAIL}?subject=${encodeURIComponent('UK e-Invoicing consultation')}`;

export const UK_IMAGES = {
  // Real partner logos (QuickBooks, Xero, Sage, Odoo, Tally, Shopify) orbiting the Rishvi mark.
  hero: 'assest/Half_circle_image-2-1.webp',
  globe: 'assest/Earth-02-1.webp',
  hub: 'assest/Chart-01-01 (2).webp',
  corners: 'assest/UK-Corner-Model-02-4.webp',
  iso: 'assest/9138d2_05c1b6701b7b4277a30a1bfc8b2ce527mv2-1 (1).webp',
  cmmi: 'assest/CMMI-3-2048x1075.webp',
  news: [
    'assest/UK-E-Invoicing-Becomes-Mandatory-from-April-2029-What-VAT-Registered-Businesses-Must-Know-01.webp',
    'assest/What-Is-a-Valid-E-Invoice-in-the-UK-Why-PDF-Invoices-Will-Not-Be-Compliant-from-2029.webp',
    'assest/How-UK-E-Invoicing-Will-Work-Peppol-Access-Points-and-System-to-System-Exchange-Explained.webp',
  ],
};

/** Real partner logos orbiting the Rishvi mark. `angle` is degrees from straight up. */
export const UK_ORBIT = {
  symbol: 'assest/rishvi-symbol-only.png',
  rings: [
    {
      id: 'outer',
      items: [
        { name: 'QuickBooks', src: 'assest/uk-logos/quickbooks.png', angle: -58, w: 60 },
        { name: 'Accounting platform', src: 'assest/uk-logos/accounting.png', angle: 0, w: 56 },
        { name: 'Shopify', src: 'assest/uk-logos/shopify.png', angle: 58, w: 56 },
      ],
    },
    {
      id: 'inner',
      items: [
        { name: 'Sage', src: 'assest/uk-logos/sage.png', angle: -70, w: 82 },
        { name: 'Xero', src: 'assest/uk-logos/xero.png', angle: -32, w: 62 },
        { name: 'Odoo Learning Partner', src: 'assest/uk-logos/odoo.png', angle: 32, w: 104 },
        { name: 'Tally', src: 'assest/uk-logos/tally.png', angle: 70, w: 84 },
      ],
    },
  ],
};

export const UK_HERO = {
  badge: 'UK E-Invoicing Mandate 2029',
  title: 'UK E-Invoicing is Coming.',
  accent: 'Is Your Business Ready?',
  text: 'The UK is moving toward structured electronic invoicing as part of its digital tax transformation. We help businesses prepare their systems, workflows, and integrations to support compliant e-invoicing before upcoming regulatory changes.',
  primary: 'Book a Consultation',
  secondary: 'Learn About UK e-Invoicing',
  stats: [
    { value: '2029', label: 'Mandate year' },
    { value: '5-corner', label: 'Peppol-style model' },
    { value: 'ISO 27001', label: 'Certified security' },
    { value: 'CMMI 3', label: 'Process maturity' },
  ],
};

export const UK_CAPS = {
  eyebrow: 'Capabilities',
  title: 'Key Capabilities for Modern e-Invoicing',
  text: 'Our solutions help businesses modernise invoicing processes by integrating systems, automating workflows, and preparing organisations for the future of electronic invoicing in the UK.',
  items: [
    { icon: 'pi-search', title: 'e-Invoicing Readiness Assessment', text: 'Evaluate how prepared your organisation is for electronic invoicing with a detailed analysis of existing accounting systems, workflows, and compliance requirements.' },
    { icon: 'pi-share-alt', title: 'System Integration', text: 'Connect accounting platforms, ERP systems, and business applications to enable seamless digital invoice data exchange and automated financial workflows.' },
    { icon: 'pi-sync', title: 'Invoice Data Automation', text: 'Reduce manual processing by automating invoice creation, validation, and data transfer between financial systems to improve efficiency and reduce operational errors.' },
    { icon: 'pi-shield', title: 'Compliance Preparation', text: 'Prepare your organisation for evolving electronic invoicing regulations with guidance on standards, processes, and system readiness for upcoming regulatory changes.' },
    { icon: 'pi-sitemap', title: 'Workflow Optimisation', text: 'Improve efficiency by redesigning invoicing workflows to reduce manual tasks, minimise errors, and accelerate processing times across your financial operations.' },
    { icon: 'pi-chart-bar', title: 'Reporting & Insights', text: 'Gain better visibility into invoicing operations with improved financial data management and reporting capabilities for smarter business decisions.' },
  ],
};

export const UK_SUPPORT = {
  eyebrow: 'Our Approach',
  title: 'Supporting Businesses in the Transition to UK e-Invoicing',
  paragraphs: [
    'As the UK moves toward digital tax systems and structured electronic invoicing, businesses will need to modernise how invoices are created, exchanged, and processed.',
    'We support organisations in preparing for this transition by helping them evaluate their current systems, improve invoicing workflows, and implement technologies that enable automated and compliant invoice processing.',
    'Our approach focuses on practical implementation — connecting accounting systems, ERP platforms, and business applications so that companies can move away from manual invoicing and adopt efficient digital processes.',
  ],
  chips: ['VAT Validation', 'Invoice Processing', 'Document Archiving', 'Data Synchronization'],
  cta: 'Contact Us',
};

export const UK_WHY_MOVE = {
  eyebrow: 'The Case for Change',
  title: 'Why Businesses Are Moving to Electronic Invoicing',
  text: 'Electronic invoicing improves operational efficiency, reduces manual processes, and accelerates financial workflows.',
  // Relative score out of 10 (illustrative comparison, as on the original site).
  metrics: [
    { label: 'Processing Time', traditional: 10, electronic: 3, better: 'lower' },
    { label: 'Error Rate', traditional: 8, electronic: 2, better: 'lower' },
    { label: 'Cost Per Invoice', traditional: 9, electronic: 2, better: 'lower' },
    { label: 'Payment Speed', traditional: 5, electronic: 8, better: 'higher' },
    { label: 'Compliance Readiness', traditional: 4, electronic: 9, better: 'higher' },
  ],
};

export const UK_TIMELINE = {
  eyebrow: 'Timeline',
  title: 'UK e-Invoicing Implementation Timeline',
  text: 'The United Kingdom is gradually moving toward structured electronic invoicing as part of its broader digital tax transformation strategy. Through consultation, policy development, and industry collaboration, the government is preparing businesses for a transition to modern digital invoicing frameworks.',
  phases: [
    { when: '2024–2025', icon: 'pi-users', title: 'Government Consultation and Industry Feedback', text: 'Government consultation begins to explore the adoption of electronic invoicing across UK businesses. Authorities gather industry feedback to design a modern digital invoicing framework.' },
    { when: '2025–2026', icon: 'pi-cog', title: 'Policy Framework and Technical Roadmap', text: 'Policy framework and technical standards are expected to be defined. This phase focuses on building the infrastructure and interoperability models for electronic invoice exchange systems and networks.' },
    { when: '2026–2028', icon: 'pi-search', title: 'Business Preparation and System Readiness', text: 'Businesses begin preparing their financial systems for electronic invoicing. Organisations upgrade accounting software, automate workflows, and improve digital compliance readiness.' },
    { when: 'April 2029', icon: 'pi-flag', title: 'Mandatory e-Invoicing Takes Effect', text: 'Mandatory e-invoicing is set to take effect from 1 April 2029. VAT-registered businesses will need structured, compliant e-invoices rather than PDF or paper invoices.' },
  ],
};

export const UK_WHY = {
  eyebrow: 'Why Choose Rishvi',
  title: 'Why Choose Rishvi',
  text: 'We bring deep integration experience to UK e-invoicing, helping businesses connect the systems they already use to the digital invoicing frameworks of the future.',
  points: ['Deep expertise in ERP and accounting integrations', 'Experience with Peppol-based invoicing frameworks', 'Independent consulting approach', 'Support across multiple invoicing platforms', 'End-to-end implementation assistance'],
  outro: 'We focus on practical solutions that fit your existing systems and workflows.',
  cta: 'Learn More About Us',
};

export const UK_SERVICES = {
  eyebrow: 'What We Do',
  title: 'Our Services',
  text: 'Comprehensive solutions designed to help UK businesses prepare for electronic invoicing and future digital tax requirements.',
  items: [
    { icon: 'pi-comments', title: 'UK e-Invoicing Consultation', text: 'Expert guidance to help businesses understand upcoming UK e-invoicing regulations and prepare for compliance.' },
    { icon: 'pi-link', title: 'ERP & Accounting Integration', text: 'Integration support for systems like Xero, QuickBooks, Sage, and Odoo to enable structured electronic invoicing.' },
    { icon: 'pi-file-edit', title: 'E-Invoicing Implementation', text: 'End-to-end assistance to implement electronic invoicing workflows within existing accounting and ERP systems.' },
    { icon: 'pi-verified', title: 'Compliance Readiness Assessment', text: 'Evaluate your current invoicing process and identify the changes required to meet future UK digital invoicing standards.' },
    { icon: 'pi-bolt', title: 'Workflow Automation', text: 'Automate invoice creation, validation, and exchange processes to reduce manual work and improve efficiency.' },
    { icon: 'pi-headphones', title: 'Advisory & Support', text: 'Ongoing support to help businesses adapt to evolving digital tax requirements and invoicing standards.' },
  ],
};

export const UK_FLOW = {
  eyebrow: 'The Model',
  title: 'How UK e-Invoicing Works',
  text: 'Electronic invoicing allows businesses to exchange structured invoice data digitally between accounting systems. Instead of sending PDFs by email, invoices are generated, transmitted, validated, and received automatically through compliant digital platforms.',
  corners: [
    { no: 1, name: 'Seller / Supplier', lines: ['Creates Invoice', 'Sends Invoice Data', 'ERP / Accounting System'], text: 'The supplier raises the invoice in their ERP or accounting system and sends the invoice data onward.' },
    { no: 2, name: 'Seller Access Point', lines: ['Validates Invoice', 'Structured Format Conversion', 'Secure Invoice Transmission'], text: 'The seller’s access point checks the invoice, converts it into a structured format and transmits it securely.' },
    { no: 3, name: 'Buyer Access Point', lines: ['Receives Invoice', 'Validates Data', 'Routes to Buyer System'], text: 'The buyer’s access point receives the invoice, validates the data and routes it to the buyer’s system. Reporting data is shared with HMRC.' },
    { no: 4, name: 'Buyer / Customer', lines: ['Receives Invoice', 'Accept / Reject', 'ERP / Accounting System'], text: 'The customer receives the validated e-invoice in their accounting system and can accept or reject it.' },
    { no: 5, name: 'HMRC Reporting', lines: ['Tax Reporting', 'Digital Record Keeping', 'VAT Compliance'], text: 'Reporting data flows to HMRC to support tax reporting, digital record keeping and VAT compliance.' },
  ],
};

export const UK_CERTS = {
  eyebrow: 'Certification',
  title: 'Quality Standards & Accreditations',
  text: 'Committed to excellence through certified processes and validated performance.',
  iso: 'We are ISO/IEC 27001:2022 certified, ensuring world-class information security management.',
  cmmi: 'We are a CMMI Level 3 certified organization, committed to continuous process improvement and quality delivery.',
};

export const UK_FAQ_HEAD = {
  eyebrow: "FAQ's",
  title: 'Frequently Asked Questions',
  text: 'Find answers to common questions about UK e-invoicing, upcoming regulations, and how businesses can prepare for the transition to electronic invoicing.',
};

export const UK_FAQS = [
  { question: 'What is electronic invoicing?', answer: 'Electronic invoicing (e-invoicing) is the exchange of invoices in a structured, machine-readable digital format directly between accounting systems. Unlike a PDF or paper invoice, the data can be validated and processed automatically without manual re-keying.' },
  { question: 'Is e-invoicing mandatory in the UK?', answer: 'The UK government has announced that e-invoicing will become mandatory for VAT-registered businesses from 1 April 2029. Until then, businesses can use the time to prepare their systems and processes.' },
  { question: 'What is the difference between a PDF invoice and an e-invoice?', answer: 'A PDF is a visual document that a person has to read and key in. An e-invoice carries structured data that systems can read, validate and post automatically, which cuts errors and speeds up payment.' },
  { question: 'Do small businesses need to adopt e-invoicing?', answer: 'The mandate is expected to apply to VAT-registered businesses of all sizes. Smaller businesses will benefit from starting early, using accounting software that supports structured e-invoicing.' },
  { question: 'Can e-invoicing work with my existing accounting software?', answer: 'In most cases yes. Platforms such as Xero, QuickBooks, Sage and Odoo can be connected to e-invoicing networks through APIs or integration layers, so you do not need to replace your current system.' },
  { question: 'What are the benefits of electronic invoicing?', answer: 'Faster processing, fewer errors, lower cost per invoice, quicker payments and better compliance readiness. It also gives you cleaner data for reporting and decision making.' },
  { question: 'How can businesses prepare for UK e-invoicing?', answer: 'Start with a readiness assessment of your accounting and ERP systems, review your invoicing workflows, confirm your software’s e-invoicing roadmap and plan integration and testing well ahead of the deadline.' },
  { question: 'How can Rishvi help businesses prepare for e-invoicing?', answer: 'Rishvi provides readiness assessments, ERP and accounting integration, workflow automation, implementation support and ongoing advisory, all tailored to the systems you already use.' },
  { question: 'What is the Peppol-based 5-corner model?', answer: 'Invoices travel from the supplier to their access point, across to the buyer’s access point, and then to the buyer, while reporting data is shared with the tax authority. It keeps exchange secure and interoperable between different systems.' },
  { question: 'How long does implementation take?', answer: 'It depends on your systems and complexity, but most projects take between a few weeks and a few months from assessment through to testing and go-live.' },
];

export const UK_NEWS = {
  eyebrow: 'Our Latest Update',
  title: 'Read Our Latest News',
  text: 'Stay updated with the latest news and insights from our industry and beyond.',
  items: [
    { title: 'UK E-Invoicing Becomes Mandatory from April 2029: What VAT-Registered Businesses Must Know', text: 'Mandatory e-invoicing is set to take effect from 1 April 2029 for VAT-registered businesses.', link: null as string | null },
    { title: 'What Is a Valid E-Invoice in the UK? Why PDF Invoices Will Not Be Compliant from 2029', text: 'Understand what counts as a compliant structured e-invoice and why PDFs fall short.', link: null as string | null },
    { title: 'How UK E-Invoicing Will Work: Peppol, Access Points and System-to-System Exchange Explained', text: 'A plain-English walk-through of access points and system-to-system exchange.', link: null as string | null },
    { title: 'How to Prepare Your Business for UK E-Invoicing: Complete Readiness Checklist', text: 'A practical, step-by-step checklist to help you prepare for compliance.', link: '/uk-e-invoicing/how-to-prepare-your-business-for-uk-e-invoicing-complete-readiness-checklist' },
  ],
  newsImageFallback: 'assest/How-to-Prepare-Your-Business-for-UK-E-Invoicing-Complete-Readiness-Checklist.webp',
};
