export const AUTO_INTRO = {
  eyebrow: 'Linnworks Automation & Rules Engine',
  title: "Automate The Work That's Slowing You Down",
  paragraphs: [
    "The Linnworks Rules Engine and macros are powerful but only when they're built correctly. Complex, half-finished or conflicting rules are one of the most common problems power users bring to us. As a Linnworks Certified Partner with 12+ years' experience, we review, rebuild and extend your automation so the right thing happens to every order, automatically with no daily manual intervention.",
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
    { icon: 'pi-search', title: 'Review', text: "We audit your current Rules Engine, macros and on-screen automations to see what's actually running." },
    { icon: 'pi-exclamation-circle', title: 'Diagnose', text: 'We identify rules firing in the wrong order, conflicting conditions, and manual steps that should be automatic.' },
    { icon: 'pi-wrench', title: 'Fix', text: 'We rebuild and extend your rules and macros so they run cleanly and predictably.' },
    { icon: 'pi-verified', title: 'Confirm', text: 'We test the changes against real orders before handing back.' },
  ] as OptStep[],
};

export interface OptExample {
  title: string;
  text: string;
}

export const EXAMPLES = {
  title: 'Practical Examples',
  text: 'Real Rules Engine and macro problems we fix, and how each one is resolved.',
  items: [
    { title: 'Conflicting rules', text: 'Rules fired in the wrong order and cancelled each other out. They are reordered and rewritten so each order follows one clear path.' },
    { title: 'Manual payment assignment', text: 'Payment methods were assigned by hand. Rules and macros now assign them automatically.' },
    { title: 'Manual manifesting', text: 'Manifests were filed manually each day automated with an Auto File Manifest routine.' },
    { title: 'Problem orders slipping through', text: 'Orders needing holds or flags were checked by eye rules now flag and hold them automatically.' },
    { title: 'Repetitive on-screen actions', text: 'Despatch dates and package splits were done manually replaced with one-click on-screen automations.' },
    { title: 'Wrong shipping service picked', text: 'Service was chosen manually per order — rules now assign it by channel, weight or value.' },
  ] as OptExample[],
  cta: 'Request My Free Audit',
};

export const AUTO_STATS = [
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
    { icon: 'pi-users', title: 'Less Manual Processing', text: 'Hours handed back to your team every week' },
    { icon: 'pi-shield', title: 'Fewer Errors', text: 'Automation removes the mistakes manual steps create' },
    { icon: 'pi-lock', title: 'Rules You Can Trust', text: 'No more second-guessing what the engine will do' },
    { icon: 'pi-send', title: 'Faster, Consistent Dispatch', text: 'Orders processed the same way every time' },
    { icon: 'pi-arrow-up-right', title: 'Automation That Scales', text: 'A setup that copes as volume and channels grow' },
  ] as OptStep[],
};

export const AUTO_CTA = {
  eyebrow: 'Why Us',
  title: 'Not Sure Which Rules Are Costing You Time?',
  text: 'The best way to find out is a quick, no-obligation review. Our Linnworks Efficiency Audit shows exactly where a rebuilt Rules Engine or new automation would save you hours before any work begins.',
  button: 'Book Your Free Efficiency Review',
};
