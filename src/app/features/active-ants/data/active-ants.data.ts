export const ANTS_INTRO = {
  eyebrow: 'Active Ants Fulfilment',
  title: 'Seamless Fulfilment Automation With Active Ants Integration By Rishvi Ltd',
  text: 'At Rishvi Ltd, our certified Linnworks integration expertise enables seamless connectivity with Active Ants, helping ecommerce businesses automate fulfilment operations with confidence. Whether you need to sync orders, track deliveries, or maintain accurate stock levels, our tailored integration ensures that your fulfilment process runs smoothly and efficiently.',
};

export const ANTS_FEATURES_INTRO = {
  eyebrow: 'Key Functionalities',
  title: 'Fulfilment Features Powered by Active Ants Integration',
};

export const ANTS_ORDER_SYNC = {
  title: 'Order Syncing',
  lines: [
    'Automatically sync orders from selected sales channels such as eBay, Amazon, or Magento to Active Ants at configurable intervals.',
    'Apply specific rules and filters to ensure only eligible orders are sent, based on:',
  ],
  filters: ['Channel', 'Stock location', 'Order status'],
};

export interface AntsFeature {
  title: string;
  lines: string[];
}

export const ANTS_FEATURES: AntsFeature[] = [
  {
    title: 'Tracking Information Update',
    lines: [
      'Seamlessly update Linnworks with tracking numbers once an order is processed by Active Ants.',
      'Frequency is configurable to comply with marketplace policies (e.g. same-day tracking for eBay).',
    ],
  },
  {
    title: 'Stock Synchronisation',
    lines: [
      'Keep your stock levels accurate by synchronising inventory from Active Ants back to Linnworks.',
      'Configure update frequency to align with your business requirements and prevent overselling.',
    ],
  },
];

export const ANTS_BENEFITS_INTRO = {
  eyebrow: 'Benefits',
  title: 'Why Choose Active Ants Integration by Rishvi Ltd?',
};

export interface AntsBenefit {
  icon: string;
  title: string;
  text: string;
}

export const ANTS_BENEFITS: AntsBenefit[] = [
  { icon: 'pi-bolt', title: 'Reduced Manual Effort', text: 'Automate repetitive tasks and eliminate the need for manual entry.' },
  { icon: 'pi-check-circle', title: 'Improved Accuracy', text: 'Minimise errors in order dispatching, inventory levels, and tracking updates.' },
  { icon: 'pi-shield', title: 'Better Marketplace Compliance', text: 'Stay aligned with policies from platforms like eBay and Amazon.' },
  { icon: 'pi-heart', title: 'Enhanced Customer Experience', text: 'Faster order fulfilment and accurate tracking keep your customers happy and informed.' },
];
