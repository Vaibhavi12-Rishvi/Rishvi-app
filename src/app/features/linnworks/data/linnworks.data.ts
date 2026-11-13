import { AboutPoint, AboutStat, HireFaq } from '../../../models/home.model';

export const INTRO_TEXT =
  'Rishvi Ltd is proud to be recognized as a Linnworks Certified Partner, demonstrating our expertise and commitment to excellence in providing tailored solutions for Linnworks users.';

export const LINNWORKS_SERVICES: AboutPoint[] = [
  { icon: 'pi-bolt', title: 'Macros', route: '/linnworks/macros', text: 'Automate repetitive tasks and boost efficiency with custom macros tailored to your needs.' },
  { icon: 'pi-code', title: 'Custom Scripts', route: '/linnworks/custom-scripts', text: 'Enhance workflows and efficiency with custom scripts tailored to your specific needs.' },
  { icon: 'pi-truck', title: 'Shipping Integrations', route: '/linnworks/shipping-integrations', text: 'Seamlessly connect and optimize your shipping processes with robust integrations.' },
  { icon: 'pi-desktop', title: 'On Screen Automation', route: '/linnworks/on-screen-automation', text: 'Automate repetitive tasks with on-screen automation for increased efficiency.' },
  { icon: 'pi-share-alt', title: 'Channel Integrations', route: '/linnworks/channel-integrations', text: 'Unify your sales channels with seamless and efficient channel integrations.' },
  { icon: 'pi-sliders-h', title: 'Customization Apps', route: '/linnworks/customization-apps', text: 'Enhance your systems with tailored customization apps for unique business needs.' },
  {
    icon: 'pi-box',
    title: 'HyperStock Inventory Management',
    route: '/linnworks/hyperstock-inventory-management',
    text: 'Optimize stock levels and prevent shortages with HyperStock Inventory Management.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Revolutionizing Inventory Management',
    route: '/linnworks/revolutionizing-inventory-management',
    text: 'Transform your inventory control with revolutionary solutions for efficiency and accuracy.',
  },
  { icon: 'pi-eye', title: 'HyperLook For Linnworks', text: 'Gain deep insights and optimize performance with HyperLook for Linnworks.', route: '/linnworks/hyperlook-for-linnworks' },
  {
    icon: 'pi-send',
    title: 'DHL DE Integration',
    route: '/linnworks/shipping-integrations',
    text: 'Streamline your shipping with seamless DHL DE integration for efficient delivery management.',
  },
  {
    icon: 'pi-arrow-right-arrow-left',
    title: 'Convert Channel Notes to External Notes',
    route: '/linnworks/convert-channel-notes-to-external-notes',
    text: 'Effortlessly convert channel notes to external notes for consistent communication.',
  },
];

export const EXPERIENCE_STATS: AboutStat[] = [
  { icon: 'pi-th-large', value: '65+', label: 'Linnworks Apps Live' },
  { icon: 'pi-users', value: '550+', label: 'Customers' },
  { icon: 'pi-calendar', value: '12+', label: 'Industry Experience' },
];

export const ACHIEVEMENTS: AboutPoint[] = [
  {
    icon: 'pi-database',
    title: '400+ Scripts Developed',
    text: 'Over 400+ scripts developed, Rishvi Ltd has empowered users with custom SQL scripts to generate insightful reports, analyze data, and make informed business decisions.',
  },
  {
    icon: 'pi-bolt',
    title: '300+ Macros Created',
    text: 'Rishvi Ltd has developed 589 macros, enabling automation and efficiency within Linnworks to streamline processes and enhance productivity for users.',
  },
  {
    icon: 'pi-share-alt',
    title: '8+ Channel Integrations',
    text: 'Our team has successfully integrated Linnworks with 8+ different channels, allowing businesses to expand their reach and manage multiple sales channels seamlessly.',
  },
  {
    icon: 'pi-truck',
    title: '3 Shipping Integrations',
    text: 'Rishvi Ltd has implemented 3 shipping integrations, enabling users to generate shipping labels, update tracking details, and streamline the entire shipping process directly from Linnworks.',
  },
  {
    icon: 'pi-mobile',
    title: '3 Mobile Apps Developed',
    text: 'With 3 mobile apps developed, Rishvi Ltd has provided Linnworks users with convenient access to key functionalities on-the-go, empowering them to manage their business anytime, anywhere',
  },
  {
    icon: 'pi-sliders-h',
    title: '150 Customization Apps Built',
    text: 'Rishvi Ltd has created 150 custom apps tailored to the unique needs of Linnworks users, enhancing functionality, automating processes, and optimizing workflows within the platform.',
  },
  {
    icon: 'pi-desktop',
    title: '10 On-Screen Automations Implemented',
    text: 'By implementing 10 on-screen automations, Rishvi Ltd has simplified user interactions within Linnworks, reducing manual effort and improving user experience.',
  },
  {
    icon: 'pi-trophy',
    title: '15+ Years of Experience in E-commerce Industry',
    text: 'Drawing on over 15 years of experience in the e-commerce industry, Rishvi Ltd brings extensive domain knowledge and insights to every project, ensuring innovative solutions that drive success for our clients',
  },
];

export const LINNWORKS_FAQS: HireFaq[] = [
  {
    question: 'What services does Rishvi Ltd provide as a certified Linnworks customization partner?',
    answer:
      'As a certified Linnworks customization partner, Rishvi Ltd offers a range of services including custom workflows, SQL custom scripts, macros, shipping integrations, and more. Our expertise spans over 12 years, during which we’ve developed tailored solutions to meet the diverse needs of Linnworks users.',
  },
  {
    question: 'Can Rishvi Ltd assist with SQL custom scripts for Linnworks?',
    answer:
      'Absolutely! We’ve developed over 850 SQL custom scripts for Linnworks users to generate customized reports, analyze data, and make informed business decisions. Our scripts are tailored to your specific reporting needs and designed to provide actionable insights to drive growth and efficiency.',
  },
  {
    question: 'What advantages do Rishvi Ltd\'s shipping integrations offer for Linnworks users?',
    answer:
      'Our shipping integrations enable Linnworks users to generate shipping labels directly from the Linnworks interface without any manual work. We’ve developed more than 5 shipping integrations, allowing users to streamline the entire shipping process, from label creation to tracking details update, and achieve automation and efficiency in their operations.',
  },
  {
    question: 'How can custom workflows benefit my business within Linnworks?',
    answer:
      'Custom workflows in Linnworks allow businesses to automate processes, synchronize data, and optimize operations to align with their specific requirements and objectives. Whether it’s automating order processing, managing inventory, or generating custom reports, we can design workflows that streamline your workflows and enhance efficiency',
  },
  {
    question: 'How can macros developed by Rishvi Ltd benefit my business within Linnworks?',
    answer:
      'Macros developed by Rishvi Ltd are designed to automate repetitive tasks, streamline processes, and enhance efficiency within Linnworks. With over 500 macros developed, we can help you achieve automation and efficiency gains, allowing you to focus on strategic initiatives and driving business growth.',
  },
  {
    question: 'How can I get started with Rishvi Ltd\'s services for Linnworks customization?',
    answer:
      'Getting started is easy! Simply reach out to us for a consultation, and we’ll work with you to assess your needs and develop tailored solutions to meet your specific requirements. Our team is here to answer any questions you may have and guide you through the process from start to finish.',
  },
];
