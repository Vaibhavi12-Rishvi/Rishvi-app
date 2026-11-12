import { AboutPoint, HireFaq, VideoItem } from '../../../models/home.model';

export const MACRO_INTRO = {
  title: 'Macro Automation Solutions By Rishvi Ltd: Over 12 Years Of Expertise',
  paragraphs: [
    'At Rishvi Ltd, our proficiency as a certified Linnworks customization partner spans more than a decade, during which we’ve developed over 500 macros to streamline processes and enhance automation within Linnworks.',
    'With our custom solutions, users can automate the entire shipping process, from label creation to tracking details update, streamlining operations and saving valuable time.',
  ],
};

export const MACRO_APPS: AboutPoint[] = [
  {
    icon: 'pi-envelope',
    title: 'Missing Phone Number and Email',
    text: 'Identify and manage orders with missing phone numbers and emails efficiently.',
  },
  {
    icon: 'pi-print',
    title: 'Print Shipping Label And Save In FTP',
    text: 'Automatically print shipping labels and save them directly to FTP for easy access.',
  },
  {
    icon: 'pi-credit-card',
    title: 'Assign Payment Method By Source and SubSource',
    text: 'Assign payment methods based on source and subsource for precise transaction management.',
  },
  {
    icon: 'pi-pencil',
    title: 'Shipping Delivery Note',
    text: 'Generate accurate shipping delivery notes for clear and efficient order fulfillment.',
  },
  {
    icon: 'pi-check-circle',
    title: 'Mark Order Process Shipping Label Printed',
    text: 'Mark orders as ‘Shipping Label Printed’ for streamlined tracking and processing.',
  },
  {
    icon: 'pi-inbox',
    title: 'Auto Archive Inventory',
    text: 'Automatically archive inventory for streamlined and up-to-date records management.',
  },
  {
    icon: 'pi-percentage',
    title: 'Reduce Item’s Discount',
    text: 'Efficiently manage pricing by reducing item discounts as needed.',
  },
  {
    icon: 'pi-file-edit',
    title: 'IOSS Note',
    text: 'Include IOSS notes for smooth cross-border EU transactions and compliance.',
  },
  {
    icon: 'pi-file-export',
    title: 'Auto File Manifest',
    text: 'Automatically file manifests to streamline your shipping process.',
  },
  {
    icon: 'pi-amazon',
    title: 'Amazon Customisation',
    text: 'Amazon Customisation enables tailored listings and automated order handling in Linnworks.',
  },
  {
    icon: 'pi-language',
    title: 'Order Address Character Replacement',
    text: 'Order Address Character Replacement auto-corrects invalid characters in addresses.',
  },
];

export const MACRO_TYPES = {
  title: 'Macro Automation Solutions',
  text: 'Linnworks macros are small snippets of code or scripts written in C# that automate tasks within the Linnworks system. Linnworks provides an API (Application Programming Interface) that allows developers to interact with and manipulate data within the Linnworks platform. Macros leverage this API to perform various actions such as updating orders, managing inventory, generating reports, and more.',
  lead: 'They are of two types:',
  types: [
    'Rules Engine macros allowing users to run a snippet of the C# code on every open and paid order that gets downloaded into the system.',
    'Scheduled Macros allow users to run the custom C# code on the user defined schedules.',
  ],
};

export const MACRO_FAQS: HireFaq[] = [
  {
    question: 'Can Rishvi Ltd provide assistance with troubleshooting and resolving issues related to macros in Linnworks?',
    answer:
      'Yes, we offer troubleshooting and support services to help users resolve issues related to macros in Linnworks. Whether you encounter errors, encounter unexpected behavior, or need assistance with macro functionality, our team is here to help diagnose and address any issues.',
  },
  {
    question: 'How do Linnworks macros integrate with existing workflows within my business?',
    answer:
      'Linnworks macros can seamlessly integrate with your existing workflows within the platform. Whether you’re managing orders, updating inventory, or generating reports, macros can be applied to automate tasks and improve efficiency without disrupting your current processes.',
  },
  {
    question: 'Can Rishvi Ltd assist with optimizing and fine-tuning existing macros for better performance?',
    answer:
      'Yes, we offer optimization and fine-tuning services for existing macros to ensure they continue to perform efficiently. Our team can review and analyze your current macros, identify areas for improvement, and make any necessary adjustments to enhance performance and functionality.',
  },
  {
    question: 'How does Rishvi Ltd ensure that macros developed for Linnworks are user-friendly and intuitive?',
    answer:
      'We prioritize usability and user experience when developing macros for Linnworks. Our team focuses on creating macros that are intuitive to use, with clear instructions and user-friendly interfaces. We also provide training and support to help users become proficient in using macros effectively.',
  },
];

export const MACRO_BENEFITS: AboutPoint[] = [
  { icon: 'pi-bolt', title: 'Streamline with macros', text: 'Crafting Linnworks macros for efficient automation and productivity gains.' },
  {
    icon: 'pi-cog',
    title: 'Custom automation',
    text: 'Tailored Linnworks macro solutions for precise automation aligned with client objectives.',
  },
  {
    icon: 'pi-users',
    title: 'Partner with Rishvi Ltd',
    text: 'Unlock automation potential with Rishvi Ltd’s tailored macro solutions for Linnworks.',
  },
];

/** Tutorial video. The thumbnail is YouTube's own cover image for the same video id. */
export const MACRO_VIDEO: VideoItem = {
  title: 'Amazon Customization Information || Introduction || by Rishvi Ltd. || Linnworks Certified Partner',
  youtubeId: '-0fOul2ImxQ',
  thumbnail: 'https://i.ytimg.com/vi_webp/-0fOul2ImxQ/maxresdefault.webp',
};
