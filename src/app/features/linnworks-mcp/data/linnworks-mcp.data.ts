export const MCP_EMAIL = 'info@rishvi.co.uk';
export const MCP_LINK = `mailto:${MCP_EMAIL}?subject=${encodeURIComponent('Linnworks MCP server enquiry')}`;

/** Images for this page. Swap a path here if you add the original photos to src/assest. */
export const MCP_IMAGES = {
  hero: 'assest/person-using-ai-tool-job-2.jpg',
  whatA: 'assest/automation-screen-robot-2 (2).jpeg',
  whatB: 'assest/DALL·E-2024-05-04-19.58.17-An-advanced-warehouse-with-warehouse-workers-using-compact-AI-models-integrated-into-handheld-devices-for-real-time-inventory-tracking.-The-scene-show.webp',
  raw: 'assest/rear-view-programmer-working-all-night-long-min-scaled-1-2048x1367.jpg',
  contact: 'assest/background-5.png',
};

export const MCP_INTRO = {
  eyebrow: 'Linnworks MCP Server',
  title: 'Linnworks MCP Server Connect AI To Linnworks Safely',
  text: 'Connect AI to Linnworks safely. Our Model Context Protocol (MCP) server turns the Linnworks API into 33 business-ready tools for stock, products, orders, sales, purchasing, warehouses and returns, with write access locked down by default.',
  cta: 'Talk to us about Linnworks MCP',
  chips: ['33 ready-made tools', 'Read-only by default', 'Built by a Linnworks partner'],
};

export const MCP_FACTS = {
  title: 'Key Facts',
  items: [
    { value: 31, label: 'Read Tools Available', icon: 'pi-eye' },
    { value: 2, label: 'Write Tools, Gated', icon: 'pi-lock' },
    { value: 33, label: 'Linnworks MCP tools', icon: 'pi-wrench' },
  ],
};

export const MCP_WHAT = {
  eyebrow: 'Learn More',
  title: 'What Is A Linnworks MCP Server?',
  paragraphs: [
    'A Linnworks MCP server is a connector that lets AI assistants and agents use Linnworks data through a set of defined, permissioned tools.',
    'MCP, the Model Context Protocol, is an open standard for connecting AI models to business systems. Instead of handing an AI raw API access, the MCP server exposes named actions such as get_low_stock_items or get_purchase_orders, each with a clear purpose and clear limits.',
    'The AI chooses which tools to call, the server talks to Linnworks, and the results come back in a form the model can reason over. You decide which tools are switched on.',
  ],
  flow: ['AI client', 'MCP server', 'Linnworks'],
};

export interface McpTool {
  name: string;
  text: string;
  write?: boolean;
}

export interface McpGroup {
  icon: string;
  title: string;
  tools: McpTool[];
}

export const MCP_TOOLS_HEAD = {
  eyebrow: 'Full tool inventory',
  title: 'All 33 Linnworks MCP tools',
  text: 'The complete tool inventory, grouped by operational area. Write operations are marked and are not exposed to the Hyperstock AI chatbot.',
};

export const MCP_GROUPS: McpGroup[] = [
  {
    icon: 'pi-building',
    title: 'Warehouses',
    tools: [
      { name: 'get_locations', text: 'Lists warehouses and locations and resolves location names to IDs.' },
      { name: 'get_location_by_id', text: 'Details for one warehouse, including address and fulfilment-centre status.' },
      { name: 'get_stock_by_location', text: 'Stock quantity for a specific product at a specific warehouse.' },
    ],
  },
  {
    icon: 'pi-tag',
    title: 'Products',
    tools: [
      { name: 'get_inventory_items', text: 'Searches products by SKU, title or barcode.' },
      { name: 'get_inventory_item_by_id', text: 'Full product detail: pricing, dimensions, tax and category.' },
      { name: 'resolve_skus', text: 'Converts SKUs into Linnworks stock item IDs.' },
      { name: 'get_inventory_count', text: 'Total number of inventory items.' },
      { name: 'get_categories', text: 'Product categories with item counts.' },
      { name: 'get_suppliers', text: 'Supplier details: contacts, country and currency.' },
      { name: 'get_supplier_terms', text: 'Supplier minimum order quantity, pack size and lead time.' },
    ],
  },
  {
    icon: 'pi-box',
    title: 'Stock',
    tools: [
      { name: 'get_stock_levels', text: 'Stock levels across all locations.' },
      { name: 'get_low_stock_items', text: 'Products that need replenishing.' },
      { name: 'get_stock_due', text: 'Incoming stock and expected arrival dates.' },
      { name: 'get_stock_consumption', text: 'Consumption, sales velocity and estimated stock cover.' },
      { name: 'get_stock_health', text: 'Flags zero or negative stock, missing suppliers, stock held nowhere, inactivity, incoming stock, oversold and below-minimum items.' },
      { name: 'get_dead_stock', text: 'Products with no sales and the capital tied up in them.' },
      { name: 'get_stock_movement_history', text: 'Stock movements and notes for a location.' },
      { name: 'update_stock_levels', text: 'Updates stock levels. Write operation, not exposed to the chatbot.', write: true },
    ],
  },
  {
    icon: 'pi-shopping-cart',
    title: 'Orders',
    tools: [
      { name: 'get_open_orders', text: 'Open orders, with sorting.' },
      { name: 'get_unfulfilled_orders', text: 'Orders awaiting fulfilment, with line items.' },
      { name: 'get_blocked_orders', text: 'Orders blocked by stock issues.' },
      { name: 'get_order_by_number', text: 'Order detail by human-readable order number.' },
      { name: 'get_order_by_id', text: 'Order detail by Linnworks order ID.' },
      { name: 'search_processed_orders', text: 'Historical processed orders with revenue and margin.' },
    ],
  },
  {
    icon: 'pi-chart-line',
    title: 'Sales',
    tools: [
      { name: 'get_top_products', text: 'Top sellers by units or revenue.' },
      { name: 'get_item_sales_stats', text: 'SKU-level sales and margin by channel.' },
      { name: 'get_channel_performance', text: 'Sales performance by channel.' },
      { name: 'get_sales_trend', text: 'Sales trends over time.' },
    ],
  },
  {
    icon: 'pi-truck',
    title: 'Purchasing and aftersales',
    tools: [
      { name: 'get_purchase_orders', text: 'Purchase orders with supplier, value and due date.' },
      { name: 'get_purchase_order_by_id', text: 'Full purchase order with line items.' },
      { name: 'create_purchase_order', text: 'Creates a purchase order. Write operation, not exposed to the chatbot.', write: true },
      { name: 'get_returns', text: 'Returns and return reasons.' },
      { name: 'get_shipping_services', text: 'Configured shipping services and couriers.' },
    ],
  },
];

export const MCP_RAW = {
  eyebrow: 'MCP vs raw API',
  title: 'Why Not Just Use The Linnworks API?',
  text: 'You can, and we build on it. But a raw API is built for developers, not for AI. Rishvi’s MCP layer adds what an AI needs to answer business questions reliably:',
  points: [
    { icon: 'pi-briefcase', title: 'Business-level tools', text: '“dead stock” or “blocked orders” is one call, not five endpoints and a join.' },
    { icon: 'pi-search', title: 'Built-in resolution', text: 'SKUs and warehouse names are resolved to Linnworks IDs automatically.' },
    { icon: 'pi-calculator', title: 'Analysis included', text: 'consumption, stock cover and stock health are calculated for the model.' },
    { icon: 'pi-shield', title: 'Guardrails', text: 'write operations are separated and kept away from conversational AI.' },
  ],
};

export const MCP_FAQ_HEAD = { eyebrow: "FAQ's", title: 'Linnworks MCP: questions and answers' };

export const MCP_FAQS = [
  { question: 'What is MCP?', answer: 'MCP, the Model Context Protocol, is an open standard for connecting AI models to external systems. An MCP server exposes named tools that an AI client can discover and call, each doing one defined job.' },
  { question: 'What is the Linnworks MCP server?', answer: 'It is an MCP server built by Rishvi Ltd that connects AI to Linnworks through 33 tools covering warehouses, products, stock, orders, sales, purchasing and aftersales. 31 tools read data and 2 write data.' },
  { question: 'Is this an official Linnworks product?', answer: 'No. The Linnworks MCP server is built and supported by Rishvi Ltd, a Linnworks Certified Partner, using the Linnworks API. It works with your existing Linnworks account.' },
  { question: 'Can the Linnworks MCP server change my data?', answer: 'Only two tools can: update_stock_levels and create_purchase_order. They are not exposed to the Hyperstock AI chatbot and are only enabled for approved workflows you agree with us. All other tools are read-only.' },
  { question: 'Which AI clients work with the Linnworks MCP?', answer: 'Any AI client that supports the Model Context Protocol can connect, subject to your setup. The fastest route is Hyperstock AI, Rishvi’s ready-made assistant that already uses the server.' },
  { question: 'What Linnworks data can the MCP server access?', answer: 'Warehouses and locations, products, categories, suppliers and supplier terms, stock levels, low stock, incoming stock, consumption, stock health, dead stock and stock movements. It also covers open, unfulfilled, blocked and processed orders, sales statistics, channel performance, purchase orders, returns and shipping services.' },
  { question: 'Can you add custom tools for our Linnworks setup?', answer: 'Yes. Rishvi has built Linnworks customisations for over 12 years, including more than 850 custom SQL scripts. We can add tools for your own reports, fields and workflows.' },
];

export const MCP_CONTACT = {
  eyebrow: 'Contact Us',
  title: 'Give Your AI Safe, Structured Access To Linnworks',
  paragraphs: [
    'Rishvi’s Linnworks MCP server gives AI assistants and agents 33 tools for stock, orders, sales, purchasing, warehouses and returns, with write access locked down.',
    'Talk to a Rishvi Linnworks specialist about connecting the MCP server, choosing tools or building custom ones.',
  ],
  cta: 'Talk to us about Linnworks MCP',
};
