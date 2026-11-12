import { AboutPoint, HireFaq, ScriptCategory, ScriptItem } from '../../../models/home.model';

export const SCRIPTS_INTRO = {
  title: 'Harnessing Data Insights With Custom Scripts By Rishvi Ltd',
  paragraphs: [
    'At Rishvi Ltd, our certified Linnworks customization expertise spans over a decade, during which we’ve developed over 850 custom scripts / Query Data tailored to empower Linnworks users with actionable insights.',
    'Whether you’re looking to automate order processing, streamline inventory management, or enhance reporting capabilities, Rishvi Ltd is your trusted partner for macro automation solutions. With our proven track record and commitment to delivering high-quality solutions, we’re here to help.',
  ],
};

/** Filter chips. The first one shows every script. */
export const SCRIPT_CATEGORIES: ScriptCategory[] = [
  { key: 'all', label: 'All Scripts', icon: 'pi-th-large' },
  { key: 'orders', label: 'Orders & Sales', icon: 'pi-shopping-cart' },
  { key: 'inventory', label: 'Inventory & Stock', icon: 'pi-box' },
  { key: 'channels', label: 'Channels', icon: 'pi-sitemap' },
  { key: 'products', label: 'Products & SKUs', icon: 'pi-tags' },
];

export const SCRIPTS: ScriptItem[] = [
  {
    category: 'orders',
    icon: 'pi-print',
    title: 'Order Invoice Printing History',
    text: 'Track and review order invoice printing history for accurate records and auditing.',
  },
  {
    category: 'orders',
    icon: 'pi-chart-bar',
    title: 'Sales By Sub Source Channels',
    text: 'Track sales performance by sub-source channels for detailed insights.',
  },
  {
    category: 'orders',
    icon: 'pi-shopping-cart',
    title: 'Ebay Orders with Item Details',
    text: 'View eBay orders with comprehensive item details for accurate processing.',
  },
  {
    category: 'orders',
    icon: 'pi-chart-line',
    title: 'Sales Analysis of Processed Orders',
    text: 'Analyze sales data from processed orders to identify trends and improve strategies.',
  },
  {
    category: 'orders',
    icon: 'pi-chart-pie',
    title: 'Inventory Sales Analysis by Category',
    text: 'Analyze inventory sales by category to identify trends and optimize stock levels.',
  },
  {
    category: 'inventory',
    icon: 'pi-map-marker',
    title: 'Channel Inventory Report by Location',
    text: 'Generate inventory reports by location for accurate management.',
  },
  {
    category: 'inventory',
    icon: 'pi-database',
    title: 'Aggregation by Source and Subsources',
    text: 'Aggregate channel inventory by source and subsources for comprehensive stock management.',
  },
  {
    category: 'inventory',
    icon: 'pi-amazon',
    title: 'Active FBA Inventory Analysis',
    text: 'Analyze active FBA inventory for optimal stock levels and fulfillment efficiency.',
  },
  {
    category: 'inventory',
    icon: 'pi-truck',
    title: 'FBA Shipment Task Details',
    text: 'Track and manage FBA shipment task details for efficient fulfillment and logistics.',
  },
  {
    category: 'inventory',
    icon: 'pi-warehouse',
    title: 'SKUs with Invalid Bin Rack in Aisle',
    text: 'Identify SKUs with invalid bin rack placements in aisles for accurate inventory management.',
  },
  {
    category: 'channels',
    icon: 'pi-percentage',
    title: 'Multi-Channel Price Comparison Description',
    text: 'Compare prices across multiple channels for optimized pricing strategies and competitiveness.',
  },
  {
    // The live page shows only the end of this title ("… Report"), so the wording is a best guess.
    category: 'channels',
    icon: 'pi-link',
    title: 'eBay Channel Linking Report',
    text: 'Generate reports to link and manage eBay channel integrations effectively.',
  },
  {
    // The live page does not show this title, so the wording is a best guess.
    category: 'channels',
    icon: 'pi-share-alt',
    title: 'Channel Linkages Report',
    text: 'Generate reports to track and manage all channel linkages efficiently.',
  },
  {
    category: 'channels',
    icon: 'pi-sync',
    title: 'Retrieve Linked Channel SKUs',
    text: 'Retrieve linked channel SKUs to ensure accurate product synchronization and management.',
  },
  {
    category: 'products',
    icon: 'pi-box',
    title: 'Stock Item Dimensions and Packaging',
    text: 'Manage stock item dimensions and packaging details for efficient inventory handling.',
  },
  {
    category: 'products',
    icon: 'pi-barcode',
    title: 'Product Commodity Codes',
    text: 'Assign and manage product commodity codes for streamlined classification and compliance.',
  },
  {
    category: 'products',
    icon: 'pi-list',
    title: 'SKU Details: Size, Colour, and Quantity',
    text: 'View SKU details including size, color, and quantity for precise inventory management.',
  },
  {
    category: 'products',
    icon: 'pi-replay',
    title: 'Retrieve Linked SKUs and Replace',
    text: 'Retrieve and replace linked SKUs to ensure accurate inventory and product data.',
  },
];

export const TAILORED = {
  title: 'Tailored Automation With Custom Scripts',
  text: 'Rishvi Ltd specializes in custom SQL scripts for Linnworks, extracting vital data for sales, inventory, and orders. Our scripts are finely tuned to deliver actionable insights, aiding strategic decision-making. Collaborating closely with clients, we tailor solutions for precise reporting needs. Trust our expertise to unlock your Linnworks data’s full potential, driving growth in the e-commerce landscape. Partner with Rishvi Ltd for high-quality, impactful solutions that fuel success.',
};

export const SCRIPT_FAQS: HireFaq[] = [
  {
    question: 'What types of custom scripts can Rishvi Ltd develop for Linnworks users?',
    answer: 'We can develop a wide range of custom scripts tailored to your specific needs, including SQL scripts for generating custom reports.',
  },
  {
    question: 'Can Rishvi Ltd assist with troubleshooting and debugging custom scripts?',
    answer:
      'Yes, we offer troubleshooting and debugging services to help identify and resolve any issues with custom scripts. Our team of experts has extensive experience in script development and debugging, ensuring smooth operation and optimal performance.',
  },
  {
    question: 'How long does it typically take to develop a custom script with Rishvi Ltd?',
    answer:
      'The development timeline for a custom script depends on factors such as complexity, scope, and requirements. We work closely with our clients to establish clear timelines and milestones, ensuring timely delivery while maintaining the highest quality standards.',
  },
  {
    question: 'Are custom scripts developed by Rishvi Ltd scalable for future growth and changes?',
    answer:
      'Yes, we design our custom scripts with scalability in mind, allowing them to adapt to your business’s evolving needs and growth. Whether you’re expanding your operations, adding new features, or integrating with additional systems, our custom scripts can scale to accommodate your requirements.',
  },
];

export const SCRIPT_BENEFITS: AboutPoint[] = [
  {
    icon: 'pi-bolt',
    title: 'Streamlining Operations with Macros',
    text: 'Empowering efficiency and productivity through automated macros tailored for Linnworks.',
  },
  {
    icon: 'pi-cog',
    title: 'Tailored Solutions for Automation',
    text: 'Tailoring custom automation solutions in Linnworks to meet clients’ unique needs and drive tangible business outcomes.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Driving Efficiency and Productivity',
    text: 'Enhance operational efficiency and growth by leveraging macro-driven automation, reducing errors, and focusing on strategic development.',
  },
];
