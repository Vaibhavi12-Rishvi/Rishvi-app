export interface SupportPlan {
  title: string;
  icon: string;
  tagline: string;
  price: string;
  cta: string;
}

export interface SupportFaq {
  question: string;
  answer: string;
  points?: string[];
}

export const SUPPORT_INTRO = {
  eyebrow: 'Support',
  title: 'Ready To Optimize Your Linnworks Experience?',
  text: 'Maximize your e-commerce potential with Rishvi Ltd’s professional Linnworks support services. As Linnworks Certified Partners, we specialize in seamless integrations, inventory management, and tailored support plans designed to keep your business running smoothly.',
  images: [
    { src: 'assest/Support-1.jpg', alt: 'Rishvi support team helping a customer' },
    { src: 'assest/Support-2.jpg', alt: 'Linnworks support agent on a call' },
  ],
};

export const PLANS_HEAD = {
  eyebrow: 'Our Plans',
  title: 'Tailored Monthly and Hourly Support Plans',
  text: 'We understand that every business is unique. Whether you need consistent support or occasional assistance, our flexible plans are designed to meet your specific needs:',
};

export const SUPPORT_PLANS: SupportPlan[] = [
  {
    title: 'Hourly Support Plans',
    icon: 'pi-clock',
    tagline: 'Perfect for businesses requiring occasional or one-time expert support.',
    price: 'Call for Discuss',
    cta: 'Book Now',
  },
  {
    title: 'Monthly Support Plans',
    icon: 'pi-calendar',
    tagline: 'Perfect for ongoing Linnworks setup optimization and integration support.',
    price: 'Call for Discuss',
    cta: 'Book Now',
  },
];

export const PLAN_FEATURES: string[] = [
  'Inventory Management Assistance',
  'Order Management & Fulfillment',
  'Shipping Integration Support',
  'Marketplace Integrations',
  'Custom Automation Workflows',
  'Configuration & Optimization',
  'Troubleshooting and Error',
  'Reporting & Analytics',
];

export const SUPPORT_FAQS: SupportFaq[] = [
  {
    question: 'How can I book a free Linnworks consultation?',
    answer:
      'You can book your free consultation by visiting our Booking page or contacting us directly. Our Linnworks experts will assess your needs and provide tailored guidance.',
  },
  {
    question: 'What types of Linnworks support plans do you offer?',
    answer:
      'We offer both monthly support plans for ongoing needs and hourly support plans for one-time assistance or occasional tasks.',
  },
  {
    question: 'Can you help with integrating Linnworks with my e-commerce platforms?',
    answer:
      'Yes! We assist with integrating Linnworks with platforms like Amazon, eBay, Shopify, WooCommerce, and more. We also troubleshoot sync errors and optimize the integration for efficiency.',
  },
  {
    question: 'What issues can you resolve in Linnworks?',
    answer: 'We handle a variety of issues, including:',
    points: [
      'Stock discrepancies',
      'Order sync errors',
      'Shipping label generation problems',
      'Automation rule errors',
      'API connection issues',
    ],
  },
  {
    question: 'Do you offer custom Linnworks configurations?',
    answer:
      'Absolutely! We can set up custom workflows, automation rules, and integrations based on your unique business requirements.',
  },
  {
    question: 'How do I know which support plan is right for my business?',
    answer:
      'During your free consultation, we will evaluate your needs and recommend the most suitable support plan, whether it’s a monthly plan for continuous support or an hourly plan for specific tasks.',
  },
  {
    question: 'What are the benefits of Linnworks support from Rishvi Ltd?',
    answer: 'The benefits include:',
    points: [
      'Certified Expertise: Our team is Linnworks Certified.',
      'Flexible Plans: Choose what works best for you.',
      'Efficient Problem-Solving: Quick turnaround for issues.',
      'E-commerce Optimization: Improve efficiency and accuracy.',
    ],
  },
  {
    question: 'How do I get started with your Linnworks support services?',
    answer: 'Simply book your free consultation or contact us via our Contact page, and we’ll help you get started.',
  },
];
