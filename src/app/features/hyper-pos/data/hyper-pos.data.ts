export const POS_INTRO = {
  eyebrow: 'Hyper POS for Linnworks',
  title: 'Seamless Retail Integration With Linnworks Via Hyper POS',
  paragraphs: [
    'Hyper POS by Rishvi Ltd bridges your physical retail operations with Linnworks, enabling real-time inventory sync, live stock lookup, and instant order creation.',
    'This powerful integration is built to help retailers unify sales channels, reduce manual processes, and offer a seamless in-store experience backed by Linnworks automation.',
    'With live stock visibility and order management directly from your POS system, you can confidently manage both ecommerce and in-store transactions from a single source of truth.',
  ],
  chips: ['Real-time sync', 'Live stock lookup', 'Instant orders'],
};

export interface PosFeature {
  icon: string;
  /** Short badge shown on the panel, e.g. "Every 15 min". */
  tag: string;
  title: string;
  text: string;
}

export const POS_FEATURES_HEAD = {
  eyebrow: 'Key Functionalities',
  title: 'Key Functionalities Powered by Hyper POS for Linnworks',
};

export const POS_FEATURES: PosFeature[] = [
  {
    icon: 'pi-sync',
    tag: 'Every 15 min',
    title: 'Inventory Sync Every 15 Minutes',
    text: 'Automatically sync stock from Linnworks to your POS every 15 minutes to ensure accurate inventory at the counter.',
  },
  {
    icon: 'pi-download',
    tag: 'Scheduled',
    title: 'Pull Item Details on Schedule',
    text: 'Fetch product details (SKU, pricing, descriptions) from Linnworks to your POS system automatically every 15 minutes.',
  },
  {
    icon: 'pi-bolt',
    tag: 'Real time',
    title: 'Real-Time Order Creation',
    text: 'POS orders are instantly synced to Linnworks, providing real-time visibility and order tracking for your operations team.',
  },
  {
    icon: 'pi-search',
    tag: 'At checkout',
    title: 'Live Stock Lookup at Checkout',
    text: 'Check actual stock levels in Linnworks instantly when scanning or adding items at POS during checkout.',
  },
  {
    icon: 'pi-truck',
    tag: 'From POS',
    title: 'Assign Shipping Service from POS',
    text: 'Allocate shipping methods directly from the POS during order placement, streamlining fulfilment and delivery workflows.',
  },
  {
    icon: 'pi-check-circle',
    tag: 'Two-way',
    title: 'Update Collected Status & Process in Linnworks',
    text: 'Mark orders as collected in your POS, and sync that status back to Linnworks to initiate processing or dispatch.',
  },
];

export const POS_BENEFITS_HEAD = {
  eyebrow: 'Benefits',
  title: 'Why Choose Hyper POS Integration by Rishvi Ltd?',
};

export interface PosBenefit {
  title: string;
  text: string;
}

export const POS_BENEFITS: PosBenefit[] = [
  { title: 'Retail Meets Automation', text: 'Merge the flexibility of retail checkout with Linnworks automation and backend order control.' },
  { title: 'Live Bi-Directional Sync', text: 'Ensure consistency between POS stock levels, orders, and Linnworks system in real time.' },
  { title: 'Simplified Retail Operations', text: 'Automate everything from stock updates to fulfilment instructions without the need for manual work.' },
  { title: 'Perfect for Multi-Channel Sellers', text: 'Ideal for businesses operating both online and offline with the need to maintain unified inventory and order flow.' },
];
