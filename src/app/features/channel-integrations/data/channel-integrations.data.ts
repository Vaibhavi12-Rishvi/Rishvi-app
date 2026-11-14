import { AboutPoint, HireFaq } from '../../../models/home.model';

export const CHANNEL_INTRO = {
  title: 'Customizing Channel Integrations With Linnworks: Enhancing Multichannel Selling',
  paragraph:
    'Linnworks, renowned for its robust customization capabilities, extends its prowess to channel integrations, offering businesses unparalleled flexibility and control over their multichannel selling strategies. Let’s explore how Linnworks enables customizations tailored to the unique needs of each channel integration.',
};

export const CHANNEL_APPS: AboutPoint[] = [
  {
    icon: 'pi-headphones',
    route: '/linnworks/bandcamp-channel-integration',
    title: 'Bandcamp',
    text: 'Bandcamp is a platform that allows artists to sell music and merchandise directly to fans, offering flexible pricing and supporting independent musicians worldwide.',
  },
  {
    icon: 'pi-shopping-bag',
    route: '/linnworks/ecwid-channel-integration',
    title: 'Ecwid Channel Integration',
    text: 'The Ecwid Channel Integration enables seamless syncing of orders, inventory, and product listings between Ecwid and Linnworks for efficient multichannel management.',
  },
  {
    icon: 'pi-shop',
    route: '/linnworks/shopware-channel-integration',
    title: 'Shopware Channel Integration',
    text: 'This project enables seamless integration between a Shopware and Linnworks, allowing centralized order, inventory, and product management across multiple channels.',
  },
  {
    icon: 'pi-globe',
    route: '/linnworks/webflow-integration',
    title: 'Webflow Integration',
    text: 'This project enables seamless integration between a Webflow eCommerce store and Linnworks, allowing centralized order, inventory, and product management across multiple channels.',
  },
];

export const CHANNEL_ABOUT = {
  paragraphs: [
    'Linnworks allows businesses to create custom workflows for each channel integration, accommodating specific requirements and optimizing processes. Whether it’s automating order processing, synchronizing inventory updates, or managing product listings, Linnworks empowers users to design workflows that align with their business objectives and operational preferences.',
    'Partner with Rishvi Ltd today to unlock new opportunities, streamline operations, and drive growth in the competitive e-commerce landscape.',
  ],
};

export const CHANNEL_FAQS: HireFaq[] = [
  {
    question: 'What is channel integration?',
    answer:
      'Channel integration refers to the process of connecting different communication channels (like email, social media, chat, etc.) with a central system or platform to ensure seamless communication and data flow between them.',
  },
  {
    question: 'Why should I integrate channels with my platform?',
    answer:
      'Integrating channels allows you to centralize communications, improve customer service, streamline operations, and gain better insights from aggregated data across all your channels.',
  },
  {
    question: 'Which channels can be integrated?',
    answer:
      'Common channels include social media platforms (e.g., Facebook, Twitter, Instagram), email systems, messaging apps (e.g., WhatsApp, Slack), and live chat tools. Specific integrations may vary based on the platform you’re using.',
  },
  {
    question: 'How do I integrate a new channel?',
    answer:
      'Integration typically involves accessing your platform’s settings, selecting the channel you want to integrate, and following the setup instructions. This often includes providing API keys or login credentials for the channel you want to connect.',
  },
  {
    question: 'What are API keys, and why are they needed?',
    answer:
      'API keys are unique identifiers used to authenticate and authorize requests between systems. They are needed to securely connect your platform with external channels, ensuring that data flows only between trusted sources.',
  },
];
