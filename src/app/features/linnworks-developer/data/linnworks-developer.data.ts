import { AboutPoint, ProcessStep } from '../../../models/home.model';

export const INTRO_PARAGRAPHS: string[] = [
  'Unlock the full potential of Linnworks with Rishvi Ltd’s dedicated Linnworks Developer Services. As a trusted Linnworks Certified Partner, we specialize in creating tailored solutions to streamline your e-commerce operations, boost efficiency, and drive growth.',
  'Rishvi Ltd is a trusted name in e-commerce solutions, offering expertise in Linnworks, inventory management, and integration services. Our team of experienced developers is committed to helping businesses streamline their operations and achieve their growth goals.',
];

/** Small highlights shown under the intro text. */
export const INTRO_HIGHLIGHTS: AboutPoint[] = [
  { icon: 'pi-verified', title: 'Certified Partner', text: 'Linnworks Certified Partner' },
  { icon: 'pi-database', title: '850+', text: 'SQL custom scripts' },
  { icon: 'pi-truck', title: '5+', text: 'Shipping integrations' },
];

export const WHY_CHOOSE_POINTS: AboutPoint[] = [
  {
    icon: 'pi-link',
    title: 'Expertise in Custom Integrations',
    text: 'Connect Linnworks with your existing tools, platforms, or APIs. Whether it’s CRM, ERP, or third-party software, we build integrations that fit your unique requirements.',
  },
  {
    icon: 'pi-cog',
    title: 'Tailored Automation',
    text: 'Eliminate repetitive tasks with custom scripts and workflows designed to optimize your processes, minimize errors, and save time.',
  },
  {
    icon: 'pi-chart-bar',
    title: 'Advanced Reporting Solutions',
    text: 'Gain actionable insights with custom dashboards and reports that help you track key metrics and make data-driven decisions.',
  },
  {
    icon: 'pi-share-alt',
    title: 'Multi-Channel Expertise',
    text: 'Maximize sales by managing your inventory, listings, and orders across multiple sales channels, including Amazon, eBay, Shopify, and more.',
  },
  {
    icon: 'pi-trophy',
    title: 'Proven Track Record',
    text: 'Our success stories and long-standing client relationships speak to our ability to deliver innovative solutions that exceed expectations.',
  },
  {
    icon: 'pi-headphones',
    title: 'Ongoing Support and Maintenance',
    text: 'Enjoy peace of mind with reliable technical support, troubleshooting, and updates to ensure your Linnworks setup stays optimized.',
  },
];

export const HOW_WE_WORK_STEPS: ProcessStep[] = [
  { title: 'Consultation', text: 'We understand your business needs and identify gaps in your current setup.' },
  { title: 'Proposal', text: 'Provide a detailed project plan with timelines, deliverables, and costs.' },
  { title: 'Development', text: 'Design and implement solutions tailored to your requirements.' },
  { title: 'Testing', text: 'Conduct rigorous testing to ensure seamless functionality.' },
  { title: 'Deployment', text: 'Launch the solution and provide comprehensive support to ensure success.' },
];

export const DEVELOPMENT_SERVICES: AboutPoint[] = [
  {
    icon: 'pi-sitemap',
    title: 'Custom Integration Development',
    text: 'We develop robust integrations to connect Linnworks with third-party systems, including Payment Gateways, Shipping Carriers, Marketplaces and Platforms.',
  },
  {
    icon: 'pi-th-large',
    title: 'Plugin and Module Development',
    text: 'Need a specific feature that Linnworks doesn’t offer out of the box? We build custom plugins and modules to expand the platform’s capabilities.',
  },
  {
    icon: 'pi-sync',
    title: 'Workflow Automation',
    text: 'Streamline processes like stock management, order routing, and email notifications using tailored Linnworks workflows and rules.',
  },
  {
    icon: 'pi-arrow-right-arrow-left',
    title: 'Data Migration and Syncing',
    text: 'Switching to Linnworks? We ensure a smooth migration of your data, including inventory, orders, and customer details, with zero disruptions.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Custom Reporting Dashboards',
    text: 'Create insightful, easy-to-use dashboards that consolidate data from various sources, empowering you to make informed decisions.',
  },
  {
    icon: 'pi-box',
    title: 'Inventory Optimization Services',
    text: 'Optimize stock levels with smart inventory management solutions that reduce waste, prevent stockouts, and improve overall efficiency.',
  },
];
