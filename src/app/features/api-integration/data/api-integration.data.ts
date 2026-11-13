export const API_INTRO = {
  eyebrow: 'Linnworks API & Custom Integration',
  title: 'Connect Linnworks To Everything You Run On',
  paragraphs: [
    "When the standard connectors aren't enough, we work directly with the Linnworks API to connect the systems you rely on marketplaces, accounting and ERP, and couriers. This is often the highest-value work we do: reliable, supported integrations built by certified developers, including channels Linnworks doesn't support out of the box. As a Linnworks Certified Partner with 12+ years' experience and 5+ shipping integrations already built, we make your tools talk to each other so nothing gets re-keyed by hand.",
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
    { icon: 'pi-search', title: 'Review', text: 'We map the systems you need connected and how data should flow.' },
    { icon: 'pi-exclamation-circle', title: 'Diagnose', text: 'We identify the gaps unsupported channels, manual re-keying, mismatched data.' },
    { icon: 'pi-wrench', title: 'Fix', text: 'We build the integration against the Linnworks API and test it end to end.' },
    { icon: 'pi-verified', title: 'Confirm', text: 'We confirm it holds against real data and keep it maintained.' },
  ] as OptStep[],
};

export interface OptExample {
  title: string;
  text: string;
}

export const EXAMPLES = {
  title: 'Practical Examples',
  text: 'Typical integration problems we solve, and how each one is resolved.',
  items: [
    { title: 'Unsupported sales channel', text: 'Orders from a channel with no standard connector were keyed in by hand. A custom integration now imports them automatically.' },
    { title: 'Manual courier labels', text: "Labels were created on the carrier's website and copied across. A direct carrier integration now generates labels and tracking inside Linnworks." },
    { title: 'Accounting re-keying', text: 'Orders were re-entered into the accounting system every day. An integration now posts orders and invoices automatically.' },
    { title: 'Tracking not reaching channels', text: 'Tracking numbers were added to marketplaces by hand. They now go back automatically at dispatch.' },
    { title: 'Stock out of sync', text: 'Stock figures differed between Linnworks and the ERP. A scheduled stock sync keeps them aligned.' },
    { title: 'Failed syncs unnoticed', text: 'Errors were found when customers complained. Alerts and monitoring now flag failures straight away.' },
  ] as OptExample[],
  cta: 'Request My Free Audit',
};

export const API_STATS = [
  { value: 630, suffix: '', label: 'Project Completed', icon: 'pi-cog' },
  { value: 28, suffix: '', label: 'IT Specialist', icon: 'pi-headphones' },
  { value: 900, suffix: '+', label: 'Happy Clients', icon: 'pi-heart' },
  { value: 650, suffix: '+', label: 'Smart Solution', icon: 'pi-lightbulb' },
];

export const OUTCOMES = {
  eyebrow: 'Typical Outcomes',
  title: 'What Better Automation Looks Like',
  text: 'From quick wins to deep customisation we build solutions around how your business actually operates.',
  items: [
    { icon: 'pi-pencil', title: 'No Re-Keying', text: 'Data moves between systems automatically' },
    { icon: 'pi-shield', title: 'Fewer Sync Errors', text: 'Orders, stock and tracking stay consistent' },
    { icon: 'pi-send', title: 'Faster Order Flow', text: 'Orders reach dispatch and accounting without manual steps' },
    { icon: 'pi-lock', title: 'Integrations You Can Trust', text: 'Errors are flagged and fixed, not found by customers' },
    { icon: 'pi-plus-circle', title: 'Room to Add Channels', text: 'New channels and systems connect without starting over' },
  ] as OptStep[],
};

export const API_CTA = {
  eyebrow: 'Why Us',
  title: 'Not Sure Which Systems Should Be Talking?',
  text: 'The best way to find out is a quick, no-obligation review. Our Linnworks Efficiency Audit shows exactly where manual re-keying or missing integrations are costing you time, before any work begins.',
  button: 'Book Your Free Efficiency Review',
};
