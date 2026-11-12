import { AboutPoint, HireFaq, ProcessStep } from '../../../models/home.model';

export const INTRO_TEXT =
  'At Rishvi, we provide talented and experienced developers to help you turn your ideas into reality. Whether you’re a startup, small business, or an enterprise, our developers are equipped to deliver tailored solutions that align with your business objectives.';

/** Developer types, taken from the first FAQ. `text` lists the technologies. */
export const DEVELOPER_TYPES: AboutPoint[] = [
  { icon: 'pi-desktop', title: 'Frontend', text: 'React, Angular, Vue.js' },
  { icon: 'pi-server', title: 'Backend', text: 'PHP, Laravel, Node.js, Python' },
  { icon: 'pi-code', title: 'Full-stack', text: 'End-to-end web application developers' },
  { icon: 'pi-shopping-cart', title: 'E-commerce', text: 'Shopify, WooCommerce, Magento, Bigcommerce' },
];

/** Hiring models, taken from the second FAQ. */
export const HIRING_MODELS: AboutPoint[] = [
  { icon: 'pi-clock', title: 'Hourly Basis', text: 'Ideal for short-term tasks or ongoing support.' },
  { icon: 'pi-calendar', title: 'Part-Time', text: 'Perfect for mid-level projects with flexible requirements.' },
  { icon: 'pi-briefcase', title: 'Full-Time', text: 'Best for long-term projects needing dedicated resources.' },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  { title: 'Tell Us Your Requirements', text: 'Share your project details, goals, challenges, timelines, budget, and preferred technologies.' },
  { title: 'Get Matched with Developers', text: 'Based on your requirements, we’ll recommend the best-suited developers for your project.' },
  { title: 'Start Your Project', text: 'Begin with a free consultation, review the roadmap, and kickstart your development.' },
  { title: 'Monitor Progress', text: 'Track progress through regular updates, detailed reports, demos, and thorough testing phases.' },
];

export const HIRE_FAQS: HireFaq[] = [
  {
    question: 'What types of developers can I hire?',
    answer: 'We offer developers specializing in various technologies, including:',
    points: [
      'Frontend (React, Angular, Vue.js)',
      'Backend (PHP, Laravel, Node.js, Python)',
      'Full-stack developers',
      'E-commerce (Shopify, WooCommerce, Magento, Bigcommerce)',
    ],
  },
  {
    question: 'What are your hiring models?',
    answer: 'You can hire developers based on your needs:',
    points: [
      'Hourly Basis: Ideal for short-term tasks or ongoing support.',
      'Part-Time: Perfect for mid-level projects with flexible requirements.',
      'Full-Time: Best for long-term projects needing dedicated resources.',
    ],
  },
  {
    question: 'How do you ensure quality and reliability?',
    answer: 'We follow a strict hiring process, ensuring all developers have:',
    points: [
      'Verified expertise and certifications.',
      'Extensive project experience.',
      'Regular performance reviews and updates to maintain quality.',
    ],
  },
  {
    question: 'What is the process for hiring a developer?',
    answer: 'Hiring a developer takes four simple steps:',
    points: [
      'Step 1: Share your project requirements and goals.',
      'Step 2: We shortlist developers that match your needs.',
      'Step 3: Conduct interviews to evaluate their skills.',
      'Step 4: Select a developer and start your project.',
    ],
  },
  {
    question: 'How do I monitor the progress of my project?',
    answer: 'We ensure transparent communication through:',
    points: [
      'Daily or weekly updates.',
      'Project management tools like Trello, Jira, or Asana.',
      'Regular demo sessions and milestone tracking.',
    ],
  },
  {
    question: 'Can I scale my team later?',
    answer: 'Absolutely! You can scale up or down based on your project requirements. We make the process seamless and flexible.',
  },
  {
    question: 'What if I am not satisfied with the developer?',
    answer: 'Your satisfaction is our priority. If you’re not happy, we can replace the developer with someone more suited to your needs.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply contact us through our form, email, or phone. Share your requirements, and we’ll guide you through the hiring process step by step.',
  },
  {
    question: 'What is the cost of hiring a developer?',
    answer:
      'The cost varies depending on the developer’s expertise, technology, and the hiring model. Contact us for a customized quote tailored to your needs.',
  },
  {
    question: 'Do your developers work in my time zone?',
    answer: 'Yes, our developers can work in your preferred time zone to ensure seamless communication and collaboration, regardless of your location.',
  },
];
