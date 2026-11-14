import { AboutPoint } from '../../../models/home.model';

// The FAQ and the three value points on the live page repeat the Shipping Integrations text,
// so they are shared with that page instead of being copied.
export { SHIPPING_FAQS as AUTOMATION_FAQS, SHIPPING_POINTS as AUTOMATION_POINTS } from '../../shipping-integrations/data/shipping-integrations.data';

export const AUTOMATION_INTRO = {
  title: 'Introducing On-Screen Automation For Linnworks:',
  paragraph:
    'Leverage the power of on-screen automation with the latest automation for Linnworks. This innovative tool revolutionizes the way you interact with Linnworks, streamlining your workflows and boosting productivity like never before.',
};

export const AUTOMATION_APPS: AboutPoint[] = [
  {
    icon: 'pi-calendar',
    route: '/linnworks/change-despatch-date',
    title: 'Change Despatch Date',
    text: 'Adjust despatch dates easily for flexible order management.',
  },
  {
    icon: 'pi-box',
    title: 'Package Splitter',
    text: 'Split packages efficiently for streamlined shipping and delivery.',
  },
  {
    icon: 'pi-play',
    title: 'Run Macro',
    text: 'Run Macro enables scheduled or manual execution of automation scripts within Linnworks.',
  },
  {
    icon: 'pi-pencil',
    title: 'Rename SKU',
    text: 'Rename SKU allows automatic renaming of SKUs based on custom rules in Linnworks.',
  },
];

export const AUTOMATION_ABOUT = {
  // On the live page this paragraph starts mid-sentence ("workflows that seamlessly align…"), so the opening is kept as shown.
  paragraph:
    'Workflows that seamlessly align with our clients’ business objectives and operational preferences. With our proven track record and Linnworks certification, businesses can trust us to build robust solutions for channel integration. Our solution not only connects businesses to Linnworks but also facilitates collaboration and growth opportunities. By enabling businesses to open their channels for multiple users to join their selling platform, we foster a collaborative ecosystem that enhances reach and boost sales potential.',
};
