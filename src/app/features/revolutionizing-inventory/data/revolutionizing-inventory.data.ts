import { AboutPoint, AboutStat } from '../../../models/home.model';

export const REVO_INTRO = {
  title: 'Revolutionizing Inventory Management',
  paragraphs: [
    'Hyperstock, which helps you maximize your warehouse efficiency through an app where you can track entire inventory in a single dashboard and can see real time analytics which helps you manage inventory levels and make concrete decisions out of it.',
    'Streamline Your Operations: Managing inventory across multiple online sales channels can quickly become a complex and challenging task. Each e-commerce platform, marketplace, or physical store may have different inventory levels and requirements. This is where a single inventory dashboard comes into play.',
  ],
};

/** Channels shown as chips feeding into the "single dashboard" picture in the intro. */
export const REVO_CHANNELS = ['Amazon', 'eBay', 'Shopify', 'Store', 'Marketplace'];

export const EFFICIENT = {
  title: 'Efficient Inventory Management:',
  text: 'As businesses expand and grow, tracking inventory across multiple locations becomes increasingly challenging yet crucial.',
};

/** Shown as a clickable list with a detail panel. */
export const EFFICIENT_POINTS: AboutPoint[] = [
  {
    icon: 'pi-sitemap',
    title: 'Optimized Supply Chain',
    text: 'When your business operates from multiple locations, understanding the inventory at each site allows you to optimize your supply chain, reduce lead times, and efficiently meet customer demands.',
  },
  {
    icon: 'pi-exclamation-triangle',
    title: 'Reduced Stockouts',
    text: 'By having real-time visibility into stock levels across all locations, you can minimize the risk of running out of popular products, which can result in lost sales and frustrated customers.',
  },
  {
    icon: 'pi-heart',
    title: 'Improved Customer Service',
    text: 'Accurate tracking enables you to fulfil orders from the nearest location, reducing shipping costs and delivery times, which leads to improved customer satisfaction.',
  },
  {
    icon: 'pi-wallet',
    title: 'Cost Efficiency',
    text: 'Efficiently managing inventory across multiple locations can reduce storage and carrying costs, ensuring that you only stock what’s necessary where it’s needed.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Data-Driven Decisions',
    text: 'Access to consolidated data across locations empowers you to make data-driven decisions, optimize restocking schedules, and plan for seasonal demand fluctuations.',
  },
  {
    icon: 'pi-pencil',
    title: 'Adding and Updating Item Details',
    text: 'One of the most effective ways to achieve this is by adding and regularly updating item details, including high-quality images.',
  },
];

export const BENEFITS = {
  title: 'Benefits of a single dashboard',
  items: [
    {
      icon: 'pi-th-large',
      title: 'Centralization',
      text: 'A single dashboard consolidates all your inventory information, including product details, stock levels, and pricing. This centralization simplifies tracking and management.',
    },
    {
      icon: 'pi-check-circle',
      title: 'Error Reduction',
      text: 'Manual data entry and management often lead to errors. A single dashboard reduces the risk of inaccuracies, ensuring that your inventory data remains consistent and reliable.',
    },
    {
      icon: 'pi-sync',
      title: 'Real-time Updates',
      text: 'With integration between your sales channels and the dashboard, you can access real-time updates on stock levels. This means you can respond promptly to changes in demand or supply.',
    },
    {
      icon: 'pi-bolt',
      title: 'Efficiency',
      text: 'Reconciling inventory from a single dashboard streamlines your operational processes. You can efficiently manage multiple tasks such as order fulfillment, restocking, and forecasting from one central location.',
    },
  ] as AboutPoint[],
};

export const SLA = {
  eyebrow: 'Inventory Management',
  title: 'Revolutionizing Inventory Management',
  text: 'Work within 1 day SLA providing quick responses. We create a solution that addresses important problems for the benefit of your organisation while considering the perspectives of your end users and their areas of pain. We’ve been there and done for it, we maintain communication with consumers using media and methods that provide performance, accuracy, and transparency while being practical for all time zones worldwide.',
};

/** The five promises, shown as a checklist. */
export const PROMISES: string[] = [
  'We’re chosen by professionals based on our past work history and the results we have delivered.',
  'We know Digital, we have upgraded ourselves with the trends and ideology which works with the market.',
  'We don’t cost the earth; we charge very minimal based on the criteria for your fixes you want. We are open to face any challenge and give you the best.',
  'We understand brand, currently we are working with multiple brands into different categories, and we are delivering our best. So far, none of our clients are disappointed with the type of services we provide.',
  'We’re extremely easy to work with, we believe in Trustability, Efficiency & Transparency.',
];

export const WHY = {
  title: 'Why Choose Us?',
  text: 'We are UK based company who have achieved experience in diversified areas of experience. We are a certified Linnworks partner, gained more than 12+ years of experience in Linnworks by delivering 500+ custom scripts and macros and 100+ customisation for our clients.',
};

export const WHY_STATS: AboutStat[] = [
  { icon: 'pi-calendar', value: '12+', label: 'Years in Linnworks' },
  { icon: 'pi-code', value: '500+', label: 'Custom scripts and macros' },
  { icon: 'pi-sliders-h', value: '100+', label: 'Customisations delivered' },
];
