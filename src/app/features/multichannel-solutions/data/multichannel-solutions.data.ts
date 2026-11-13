export const MC_EMAIL = 'info@rishvi.co.uk';
export const mcLink = (subject: string): string => `mailto:${MC_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const MC_INTRO = {
  eyebrow: 'Multichannel Solutions',
  title: 'Services That Help Your Organisation Perform and Grow',
  text: 'From people and performance to change and marketing, our multichannel services give your organisation the structure, skills and strategy it needs to move forward with confidence.',
};

export const MC_SERVICES = [
  { icon: 'pi-heart', title: 'Services For Non Profit Organisation', text: 'Empower your mission with tailored services designed for non-profit organizations.' },
  { icon: 'pi-users', title: 'Strategic Human Resource Management', text: 'Align your workforce with business goals through strategic human resource management.' },
  { icon: 'pi-chart-line', title: 'Appraising Organizational Performance', text: 'Assess and enhance efficiency by appraising organizational performance effectively.' },
  { icon: 'pi-sync', title: 'Change Management', text: 'Guide your organization through transitions smoothly with effective change management strategies.' },
  { icon: 'pi-megaphone', title: 'Strategic Marketing', text: 'Drive growth and market presence with targeted and strategic marketing initiatives.' },
  { icon: 'pi-graduation-cap', title: 'Training', text: 'Enhance skills and knowledge with comprehensive, tailored training programs.' },
];
