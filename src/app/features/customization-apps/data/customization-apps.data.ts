import { HireFaq } from '../../../models/home.model';

// The three value points on the live page repeat the Shipping Integrations text, so they are shared with that page.
export { SHIPPING_POINTS as CUSTOMIZATION_POINTS } from '../../shipping-integrations/data/shipping-integrations.data';

export const CUSTOMIZATION_INTRO = {
  title: 'Customization Solutions By Rishvi Ltd: Over 12 Years Of Expertise',
  paragraphs: [
    'Third-party apps or customization apps in Linnworks refer to software extensions developed by external parties to enhance the functionality and customization options of the Linnworks platform. At Rishvi Ltd, our experience as a certified Linnworks customization partner spans more than a decade, during which we’ve crafted over 150 tailored solutions to meet the diverse needs of Linnworks users.',
    'Customization apps allow you to tailor software and platforms to meet your specific business needs. These apps enhance functionality, streamline processes, and provide a personalized user experience, ensuring that your tools work exactly how you need them to.',
  ],
};

export const CUSTOMIZATION_ABOUT = {
  paragraphs: [
    'Our focus lies in developing customized solutions that enable businesses to achieve automation and efficiency in their operations. Leveraging our deep understanding of Linnworks’ capabilities and our expertise in software development, we work closely with clients to identify their unique requirements and build solutions that align perfectly with their business goals.',
    'Whether it’s automating order processing, streamlining inventory management, or optimizing product listings, our custom-built apps for Linnworks empower businesses to enhance productivity, reduce manual errors, and drive growth. Each solution is meticulously designed and rigorously tested to ensure seamless integration with Linnworks and maximum effectiveness in real-world scenarios.',
  ],
};

export const CUSTOMIZATION_FAQS: HireFaq[] = [
  {
    question: 'What are customization apps?',
    answer:
      'Customization apps allow users to personalize the appearance, functionality, or settings of their devices or applications. This can include changing themes, wallpapers, icons, fonts, and even customizing the behavior of apps or the home screen.',
  },
  {
    question: 'What types of customization can I do with these apps?',
    answer:
      'Depending on the app, you can customize your home screen layout, app icons, widgets, wallpapers, themes, fonts, notification sounds, and more. Some apps also allow deeper customization like gesture controls and system-wide themes.',
  },
  {
    question: 'Are customization apps available for both Android and iOS?',
    answer:
      'Yes, but the level of customization available may vary. Android generally offers more flexibility with apps like launchers, widgets, and custom themes. iOS also offers customization apps, but with more restrictions compared to Android.',
  },
  {
    question: 'How do I install a customization app?',
    answer:
      'You can install customization apps from your device’s app store (Google Play Store for Android or the Apple App Store for iOS). Simply search for the app, download, and install it like any other application.',
  },
];
