export const OPT_INTRO = {
  eyebrow: 'Linnworks Optimisation',
  title: 'Get More From The Setup You Already Have.',
  paragraphs: [
    "Not every Linnworks problem needs a rebuild. Often, the setup you already have is capable of far more than it's currently delivering it just hasn't been configured, cleaned up, or adjusted as your business has grown. Linnworks Optimisation is about correcting and improving what's already in place: fixing workflows that have drifted out of sync, resolving rules that no longer match how you operate, and removing the manual workarounds that have built up over time.",
    'This is usually the first conversation we have with a new client before any new development, integration, or automation work begins, we make sure the existing foundation is solid.',
  ],
  cta: 'Speak to a Linnworks Specialist',
};

export interface OptStep {
  icon: string;
  title: string;
  text: string;
}

export const ENGAGEMENT = {
  title: 'What a Typical Engagement Looks Like',
  steps: [
    { icon: 'pi-search', title: 'Review', text: 'We audit your current Linnworks configuration: order flow, stock rules, channel mappings, and reporting setup.' },
    { icon: 'pi-exclamation-circle', title: 'Diagnose', text: 'We identify where inefficiencies, manual steps, or outdated rules are quietly costing time or causing errors.' },
    { icon: 'pi-wrench', title: 'Fix', text: 'We correct configuration issues, streamline workflows, and tidy up rules and automations that have become inconsistent or redundant.' },
    { icon: 'pi-verified', title: 'Confirm', text: 'We test the changes against real order/stock data to confirm the fix holds before handing back.' },
  ] as OptStep[],
};

export interface OptExample {
  title: string;
  text: string;
}

export const EXAMPLES = {
  title: 'Practical Examples',
  text: 'Real friction points we regularly fix in existing Linnworks setups the kind of issues that build up quietly as a business grows.',
  items: [
    { title: 'Manual order routing', text: "Staff routed orders by hand because the Rules Engine hadn't been updated for new channels. Rules now route orders automatically." },
    { title: 'Hours spent on manual reporting', text: 'Reports were built once and never revisited. They now run on a schedule.' },
    { title: 'Inefficient workflows slowing dispatch', text: 'Workflows built for lower volumes were slowing dispatch. Streamlining them cuts processing time.' },
    { title: 'Staff manually managing exceptions', text: 'Exceptions were handled by hand. Rules now handle them automatically.' },
    { title: 'No visibility across channels', text: 'A fragmented setup hid what was happening per channel. A consistent configuration gives a single view.' },
    { title: 'Workflows that made sense', text: "Setups that suited low volumes now restrict growth. They're reworked to scale with current and future volume." },
  ] as OptExample[],
  cta: 'Request My Free Audit',
};

export const OPT_STATS = [
  { value: 630, suffix: '', label: 'Project Completed', icon: 'pi-cog' },
  { value: 28, suffix: '', label: 'IT Specialist', icon: 'pi-headphones' },
  { value: 900, suffix: '+', label: 'Happy Clients', icon: 'pi-heart' },
  { value: 650, suffix: '+', label: 'Smart Solution', icon: 'pi-lightbulb' },
];

export const OUTCOMES = {
  eyebrow: 'Typical Outcomes',
  title: 'What Optimised Setups Look Like',
  text: 'From quick wins to deep customisation we build solutions around how your business actually operates.',
  items: [
    { icon: 'pi-users', title: 'Less Manual Work', text: 'Reduced manual workload for staff' },
    { icon: 'pi-shield', title: 'Fewer Stock & Order Errors', text: 'Fewer stock and order errors' },
    { icon: 'pi-send', title: 'Faster Processing & Dispatch', text: 'Faster order processing and dispatch' },
    { icon: 'pi-chart-line', title: 'Clearer, More Reliable Reporting', text: 'Clearer, more reliable reporting' },
    { icon: 'pi-arrow-up-right', title: 'A Setup That Scales With You', text: 'A setup that scales with order volume instead of restricting it' },
  ] as OptStep[],
};

export const OPT_CTA = {
  eyebrow: 'Why Us',
  title: 'Not Sure If Your Setup Needs Optimising?',
  text: 'The best way to know is a quick, no-obligation review. Our Linnworks Efficiency Audit shows you exactly where your current setup is losing time or accuracy before any work begins.',
  button: 'Book Your Free Efficiency Review',
};
