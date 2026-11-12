import { AboutPoint, HireFaq } from '../../../models/home.model';

export const SHIPPING_INTRO = {
  title: 'Seamless Shipping Integrations By Rishvi Ltd: Over 12 Years Of Expertise',
  paragraph:
    'Shipping integration allows Linnworks to connect directly to a shipping service provider to exchange shipment data with the courier. This enables printing shipping labels and submitting consignment data to the courier via Linnworks. Below is a list of shipping integrations available in Linnworks. Each provider has its specifics, and the available features may differ by integration.',
};

export const SHIPPING_APPS: AboutPoint[] = [
  {
    icon: 'pi-truck',
    title: 'DHL DE Integration',
    text: 'The DHL DE integration provides the capability to configure shipping services and print shipping labels through Linnworks.',
  },
  {
    icon: 'pi-send',
    title: 'Stream Integration',
    text: 'The Stream integration enables route assignment and delivery updates through Linnworks for efficient logistics.',
  },
  {
    icon: 'pi-map',
    title: 'Stream Shipping and Planning',
    text: 'The Stream Shipping and Planning integration enables route assignment and delivery updates through Linnworks for efficient logistics management.',
  },
];

export const SHIPPING_ABOUT = {
  title: 'Shipping Integrations',
  paragraphs: [
    'At Rishvi Ltd, our experience as a certified Linnworks customization partner spans more than a decade. We specialize in developing streamlined shipping integrations, with over 5 successful implementations aimed at simplifying the shipping process for Linnworks users.',
    'Whether you’re looking to streamline shipping label generation, automate tracking updates, or enhance overall shipping efficiency, Rishvi Ltd is your trusted partner. With our extensive experience and expertise in Linnworks customization, we’re here to help you harness the power of shipping integrations and achieve your business goals with ease.',
  ],
};

export const SHIPPING_FAQS: HireFaq[] = [
  {
    question: 'What services does Rishvi Ltd provide as a certified Linnworks customization partner?',
    answer:
      'As a certified Linnworks customization partner, Rishvi Ltd offers a range of services including custom workflows, SQL custom scripts, macros, shipping integrations, and more. Our expertise spans over 12 years, during which we’ve developed tailored solutions to meet the diverse needs of Linnworks users.',
  },
  {
    question: 'What advantages do Rishvi Ltd’s shipping integrations offer for Linnworks users?',
    answer:
      'Our shipping integrations enable Linnworks users to generate shipping labels directly from the Linnworks interface without any manual work. We’ve developed more than 5 shipping integrations, allowing users to streamline the entire shipping process, from label creation to tracking details update, and achieve automation and efficiency in their operations.',
  },
  {
    question: 'How can custom workflows benefit my business within Linnworks?',
    answer:
      'Custom workflows in Linnworks allow businesses to automate processes, synchronize data, and optimize operations to align with their specific requirements and objectives. Whether it’s automating order processing, managing inventory, or generating custom reports, we can design workflows that streamline your workflows and enhance efficiency.',
  },
  {
    question: 'Can Rishvi Ltd assist with SQL custom scripts for Linnworks?',
    answer:
      'Absolutely! We’ve developed over 850 SQL custom scripts for Linnworks users to generate customized reports, analyze data, and make informed business decisions. Our scripts are tailored to your specific reporting needs and designed to provide actionable insights to drive growth and efficiency.',
  },
];

/** Three value points shown as stacked cards with a tick. */
export const SHIPPING_POINTS: AboutPoint[] = [
  {
    icon: 'pi-check-circle',
    title: 'Efficiency Through Integration',
    text: 'Our expertise lies in seamlessly integrating shipping carriers into Linnworks, enabling users to generate shipping labels directly from the Linnworks interface without manual intervention. With our custom solutions, users can automate the entire shipping process, from label creation to tracking details update, streamlining operations and saving valuable time.',
  },
  {
    icon: 'pi-check-circle',
    title: 'Tailored Solutions for Automation',
    text: 'We understand that every business has unique shipping requirements. That’s why we work closely with our clients to develop customized shipping integrations that align with their specific needs and workflows. Our solutions are designed to seamlessly connect Linnworks with the user’s preferred shipping carrier, ensuring a smooth and efficient shipping experience.',
  },
  {
    icon: 'pi-check-circle',
    title: 'Empowering Linnworks Users',
    text: 'Our goal is to empower Linnworks users to optimize their shipping processes and drive efficiency. By leveraging our shipping integrations, businesses can reduce manual errors, improve order fulfillment speed, and enhance customer satisfaction. With our proven track record and commitment to delivering high-quality solutions, we’re dedicated to helping Linnworks users connect their shipping carriers seamlessly.',
  },
];
