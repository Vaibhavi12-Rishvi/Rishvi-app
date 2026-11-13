import { InstallStep } from '../../hyperstock/data/hyperstock.data';

export const HYPERLOOK_INTRO = {
  eyebrow: 'HyperLook For Linnworks',
  title: 'Optimize Insights With HyperLook For Linnworks',
  text: 'Hyperlook, an app that allows you to view analytical data on a mobile device, is a valuable tool for individuals and businesses looking to access and make informed decisions based on data while on the go.We don’t cost the earth; we charge very minimal based on the criteria for your fixes you want. We are open to face any challenge and give you the best.',
};

export const HYPERLOOK_INSTALL_INTRO =
  'Hyperlook is a third-party app for Linnworks, a multi-channel eCommerce software. To install Hyperlook for Linnworks, you can follow these steps';

/** Six install steps, each with the matching app screen. */
export const HYPERLOOK_STEPS: InstallStep[] = [
  {
    label: 'Open',
    title: 'Open HyperLook and choose how to connect',
    images: [{ src: 'assest/Select-Log-in.jpg', alt: 'HyperLook start screen with Connect to Linnworks and Login buttons' }],
  },
  {
    label: 'Log in',
    title: 'Log in with your email and password',
    images: [{ src: 'assest/Log-in-Page.jpg', alt: 'HyperLook login screen with email and password fields' }],
  },
  {
    label: 'Connect',
    title: 'Connect to Linnworks',
    images: [{ src: 'assest/Log-in-Page-1.jpg', alt: 'HyperLook login screen with the Connect to Linnworks button' }],
  },
  {
    label: 'Welcome',
    title: 'Welcome to HyperLook Analytics',
    text: 'Welcome to Hyperlook Analytics of your stock and orders, check it daily.',
    images: [{ src: 'assest/Welcome-screen.jpg', alt: 'HyperLook welcome screen with a Go to Dashboard button' }],
  },
  {
    label: 'Profile',
    title: 'Set up your profile',
    images: [{ src: 'assest/Edit-Profile.jpg', alt: 'HyperLook edit profile screen' }],
  },
  {
    label: 'Start',
    title: 'Start using HyperLook',
    images: [{ src: 'assest/Home-Page-–-1-1.jpg', alt: 'HyperLook dashboard with sales, orders, locations and top products' }],
  },
];

export const HYPERLOOK_WHY = {
  title: 'Why Choose Us?',
  text: 'We are UK based company who have achieved experience in diversified areas of experience. We are a certified Linnworks partner, gained more than 12+ years of experience in Linnworks by delivering 500+ custom scripts and macros and 100+ customisation for our clients.',
  cards: [
    { icon: 'pi-verified', title: 'Preparing for your success' },
    { icon: 'pi-lightbulb', title: 'We provide truly notable solutions' },
    { icon: 'pi-briefcase', title: '12 + years of experience in Ecommerce' },
  ],
};

export const HYPERLOOK_FEATURES_INTRO = {
  eyebrow: 'Explore HyperLook features',
  title: 'Let’s see what Hyperlook has to offer!',
};

export interface LookFeature {
  title: string;
  text: string;
  image: string;
  icon: string;
}

export const HYPERLOOK_FEATURES: LookFeature[] = [
  { title: 'Dashboard', icon: 'pi-th-large', image: 'assest/Group-6-min.png', text: 'Graphical Representation of AOV, Revenue by day, week, month Hyperlook allows users to create their own dashboards.' },
  { title: 'Open Order', icon: 'pi-inbox', image: 'assest/Group-5-min.png', text: 'Overview of open Orders Users can perform various actions in Open Orders section.' },
  { title: 'Process Order', icon: 'pi-check-square', image: 'assest/Group-4-min.png', text: 'Overview of Processed Orders Users can perform various actions in the Processed Orders section.' },
  { title: 'Total Orders', icon: 'pi-shopping-cart', image: 'assest/Group-1-min.png', text: 'See your total orders for the last 7 days in a chart, with a breakdown by source and subsource.' },
  { title: 'Total Sales', icon: 'pi-chart-line', image: 'assest/Group-2-min.png', text: 'Track your total sales for the last 7 days and see which channels earn the most.' },
  { title: 'Sales by Location', icon: 'pi-globe', image: 'assest/Group-3-min.png', text: 'View orders by country on a map, with the units and sales for each location.' },
];
