export const HAI_EMAIL = 'info@rishvi.co.uk';
export const HAI_DEMO_LINK = `mailto:${HAI_EMAIL}?subject=${encodeURIComponent('Hyperstock AI demo request')}`;

/** Images for this page. Swap a path here if you add the original photos to src/assest. */
export const HAI_IMAGES = {
  hero: 'assest/DALL·E-2024-05-04-19.58.17-An-advanced-warehouse-with-warehouse-workers-using-compact-AI-models-integrated-into-handheld-devices-for-real-time-inventory-tracking.-The-scene-show.webp',
  teamA: 'assest/pexels-shvets-production-7194619-scaled-1.jpg',
  teamB: 'assest/im-employees.jpg',
  multiTool: 'assest/rear-view-programmer-working-all-night-long-min-scaled-1-2048x1367.jpg',
  contact: 'assest/background-5.png',
};

export const HAI_INTRO = {
  eyebrow: 'Hyperstock AI (HAI)',
  title: 'Hyperstock AI (HAI) By Rishvi, Linnworks Certified Partner',
  text: 'Ask your Linnworks data a question in plain English and get an operational answer in seconds. Hyperstock AI checks stock, orders, sales, purchase orders, suppliers, warehouses and returns for you, then explains what it found.',
  cta: 'Book a Hyperstock AI demo',
  chips: ['Plain-English questions', 'Read-only access', 'Answers in seconds'],
};

export const HAI_PROBLEM = {
  eyebrow: 'Problem and solution',
  title: 'Stop Hunting For The Right Report. Ask The Question Instead.',
  paragraphs: [
    'Linnworks already holds the truth about your inventory, orders and channels. The hard part is getting to it: the right screen, the right filter, the right export, then a spreadsheet to join it all together.',
    'Hyperstock AI sits on top of your Linnworks account and does that legwork. You ask the question the way you would ask a colleague. Hyperstock works out which Linnworks data it needs, retrieves it, combines it and gives you a clear answer you can act on.',
    'It understands everyday ecommerce language, so your team asks about best-sellers, stock cover or orders stuck in the queue, not API endpoints or database fields.',
  ],
  examplesTitle: 'Example questions:',
  questions: [
    'Which products could run out in the next 14 days?',
    'Which open orders are blocked by stock?',
    'What were our top 20 SKUs by revenue last month?',
    'What is the MOQ and lead time for this supplier?',
    "How much cash is tied up in stock that hasn't sold?",
  ],
};

export interface HaiCapability {
  icon: string;
  title: string;
  lead: string;
  points: string[];
  ask: string;
}

export const HAI_CAPS_HEAD = {
  eyebrow: 'Capabilities',
  title: 'What Hyperstock AI can do with your Linnworks data',
  text: 'Six areas of your operation, available in one conversation.',
};

export const HAI_CAPS: HaiCapability[] = [
  {
    icon: 'pi-box',
    title: 'Stock and inventory health',
    lead: 'See what you have, where it is and where problems are building.',
    points: [
      'Stock levels across every location',
      'Low-stock items and quantities required',
      'Consumption, sales velocity and estimated stock cover',
      'Health checks: zero or negative stock, oversold items, missing suppliers, stock held nowhere, inactive items, items below minimum',
      'Dead stock and the capital tied up in it',
    ],
    ask: 'Which products are below minimum and have no supplier set?',
  },
  {
    icon: 'pi-shopping-cart',
    title: 'Orders',
    lead: 'Answer customer service and fulfilment questions without opening five screens.',
    points: ['Open and unfulfilled orders with line items', 'Orders blocked by stock issues', 'Any order by order number or Linnworks order ID', 'Processed order history with revenue and margin'],
    ask: 'How many orders are unfulfilled, and which are blocked?',
  },
  {
    icon: 'pi-chart-line',
    title: 'Sales performance',
    lead: 'Sales analysis without building another spreadsheet.',
    points: ['Top products by units or revenue', 'SKU sales and margin by channel', 'Channel performance comparison', 'Sales trends over any period'],
    ask: 'Which channel made the most margin last month?',
  },
  {
    icon: 'pi-truck',
    title: 'Purchasing and suppliers',
    lead: 'Give buyers the facts they need before they reorder.',
    points: ['Purchase orders with supplier, value and due dates', 'Full purchase order detail with line items', 'Supplier contacts, country and currency', 'Minimum order quantity, pack size and lead time'],
    ask: 'When is the next delivery for SKU ABC-123?',
  },
  {
    icon: 'pi-building',
    title: 'Warehouses',
    lead: 'A clear view of stock across sites and fulfilment centres.',
    points: ['All warehouses and fulfilment-centre status', 'Stock for a product at a specific location', 'Stock movement history with notes'],
    ask: 'Where do we hold stock for SKU ABC-123?',
  },
  {
    icon: 'pi-replay',
    title: 'Returns and shipping',
    lead: 'Spot product and quality issues that sales figures hide.',
    points: ['Returned items and return reasons', 'Refund status', 'Configured shipping services and couriers'],
    ask: 'Which products are returned most, and why?',
  },
];

export const HAI_MULTI = {
  eyebrow: 'Multi-tool questions',
  title: 'One Question. Several Linnworks Tools Working Together.',
  paragraphs: [
    'Hyperstock is not a set of API lookups with a chat box on top. A real business question usually needs data from more than one place, and Hyperstock joins it up for you.',
  ],
  exampleLabel: 'Example:',
  example: '“Which of my best-selling products are at risk of running out before replacement stock arrives?”',
  steps: [
    { icon: 'pi-trophy', title: 'Find the best-sellers', text: 'ranks products by revenue or units for the period you choose.' },
    { icon: 'pi-warehouse', title: 'Check what’s on hand', text: 'pulls current stock for those SKUs across every warehouse.' },
    { icon: 'pi-gauge', title: 'Measure the burn rate', text: 'uses consumption history to estimate the days of cover left.' },
    { icon: 'pi-calendar', title: 'Compare with incoming stock', text: 'matches open purchase orders and due dates, then flags the gaps.' },
  ],
};

export const HAI_STATS = [
  { value: 33, suffix: '', label: 'Business-level MCP tools', icon: 'pi-wrench' },
  { value: 31, suffix: '', label: 'Read tools for the assistant', icon: 'pi-eye' },
  { value: 0, suffix: '', label: 'Write actions exposed to the chatbot', icon: 'pi-lock' },
  { value: 6, suffix: '', label: 'Areas of your operation covered', icon: 'pi-th-large' },
];

export const HAI_FAQ_HEAD = {
  eyebrow: "FAQ's",
  title: 'Hyperstock AI for Linnworks: Questions and Answers',
};

export const HAI_FAQS = [
  {
    question: 'What is Hyperstock AI for Linnworks?',
    answer:
      'Hyperstock AI (HAI) is an AI inventory and operations assistant from Rishvi Ltd that connects to your authorised Linnworks data. Your team can ask plain-English questions about stock, products, orders, sales, purchase orders, suppliers, warehouses and returns, and get clear answers in seconds.',
  },
  {
    question: 'Can AI connect to Linnworks?',
    answer:
      'Yes. Linnworks provides an API for integrations. Hyperstock AI connects through Rishvi’s Linnworks MCP server, which turns the API into 33 business-level tools, with 31 read tools available to the assistant.',
  },
  {
    question: 'What can I ask Hyperstock about my Linnworks inventory?',
    answer:
      'You can ask about stock across warehouses, low-stock items, incoming stock and due dates, consumption and estimated stock cover, stock health issues such as negative or oversold stock, and dead stock with the capital tied up in it.',
  },
  {
    question: 'Can Hyperstock AI tell me when stock will run out?',
    answer:
      'Yes. Hyperstock analyses consumption and sales velocity to estimate each product’s days of cover. It then compares that with incoming purchase orders to show which products may run out before replacement stock arrives.',
  },
  {
    question: 'Can Hyperstock analyse Linnworks sales and margin?',
    answer:
      'Yes. It retrieves top products by units or revenue, SKU-level sales and margin by channel, channel performance and sales trends, and searches processed orders by date range.',
  },
  {
    question: 'Can Hyperstock check Linnworks purchase orders and suppliers?',
    answer:
      'Yes. It retrieves purchase orders with supplier, value and due dates, full PO line items, supplier contact details, and supplier terms including minimum order quantity, pack size and lead time.',
  },
  {
    question: 'Can Hyperstock AI change my Linnworks account?',
    answer:
      'No. The assistant only has access to read tools. The two write operations on the MCP server, update_stock_levels and create_purchase_order, are not exposed to the chatbot.',
  },
  {
    question: 'Does Hyperstock replace Linnworks?',
    answer:
      'No. Linnworks remains your operations platform. Hyperstock adds a dashboard and a conversational layer on top, so your team can investigate Linnworks data faster.',
  },
  {
    question: 'Does Hyperstock work with multiple Linnworks warehouses?',
    answer:
      'Yes. It lists warehouses and fulfilment centres, shows stock for a product at any location, and retrieves stock movement history for a location.',
  },
];

export const HAI_CONTACT = {
  eyebrow: 'Contact Us',
  title: 'Your Linnworks Data Already Has The Answers. Let Your Team Find Them Faster.',
  text: 'See Hyperstock AI working on real Linnworks questions in a 30-minute demo with a Rishvi Linnworks specialist.',
  cta: 'Book a Hyperstock AI demo',
};
