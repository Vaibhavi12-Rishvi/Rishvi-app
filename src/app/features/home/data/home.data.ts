import {
  ContactDetail,
  FooterColumn,
  NavItem,
  PartnerBadge,
  ServiceItem,
  SocialLink,
  CertificationItem,
  FaqItem,
  NewsItem,
  TechCategory,
  Testimonial,
} from '../../../models/home.model';
import { ARTICLES, articlePath } from '../../news/data/articles.data';

const HOME = '/home';
const SERVICES = '/services';
const ABOUT = '/about-us';

export const NAV_ITEMS: NavItem[] = [
  {
    key: 'about',
    label: 'About Us',
    children: [
      { label: 'Company Overview', route: ABOUT, fragment: 'company-overview' },
      { label: 'Our Team', route: ABOUT, fragment: 'our-motive' },
      { label: 'Why Choose Us', route: ABOUT, fragment: 'why-choose-us' },
    ],
  },
  {
    key: 'linnworks',
    label: 'Linnworks',
    children: [
      { label: 'Linnworks Integration', route: SERVICES, fragment: 'linnworks' },
      { label: 'Custom Development', route: SERVICES, fragment: 'linnworks' },
      { label: 'Linnworks Support', route: SERVICES, fragment: 'linnworks' },
    ],
  },
  {
    key: 'web',
    label: 'Website Development',
    children: [
      { label: 'Angular Development', route: SERVICES, fragment: 'website-development' },
      { label: 'React Development', route: SERVICES, fragment: 'website-development' },
      { label: 'Custom Web Applications', route: SERVICES, fragment: 'website-development' },
      { label: 'E-commerce Development', route: SERVICES, fragment: 'website-development' },
    ],
  },
  {
    key: 'services',
    label: 'Services',
    children: [
      { label: 'Software Development', route: SERVICES, fragment: 'software-development' },
      { label: 'API Integration', route: SERVICES, fragment: 'software-development' },
      { label: 'ERP Solutions', route: SERVICES, fragment: 'odoo-erp' },
      { label: 'Digital Transformation', route: SERVICES, fragment: 'software-development' },
    ],
  },
  { key: 'odoo', label: 'Odoo Partner', route: SERVICES, fragment: 'odoo-erp' },
  { key: 'contact', label: 'Contact Us', route: HOME, fragment: 'contact' },
  {
    key: 'einvoicing',
    label: 'E-Invoicing',
    children: [
      { label: 'UAE E-Invoicing', route: HOME, fragment: 'uae-e-invoicing' },
      { label: 'UK E-Invoicing', route: HOME, fragment: 'uk-e-invoicing' },
    ],
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'linnworks',
    title: 'Linnworks',
    summary: 'Linnworks automates and integrates your multichannel sales and inventory management seamlessly.',
    detail:
      'Macros, custom scripts, shipping and channel integrations, on-screen automation and tailored Linnworks apps, built by certified Linnworks developers.',
    ctaLabel: 'Explore our Linnworks Services',
    icon: 'pi-box',
    highlights: ['Macros', 'Custom Scripts', 'Shipping Integrations', 'Channel Integrations', 'Linnworks Support'],
  },
  {
    id: 'odoo-erp',
    title: 'Odoo ERP Solutions',
    summary: 'Implement and optimize Odoo ERP to streamline operations, finance, sales, and inventory in one system.',
    detail: 'Odoo implementation and customisation that brings finance, sales and inventory into one connected system.',
    ctaLabel: 'Discover Odoo ERP Solutions',
    icon: 'pi-sitemap',
    highlights: ['Implementation', 'Customisation', 'Finance', 'Sales', 'Inventory'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    summary: "Boost your brand's online presence and drive growth with expert digital marketing strategies.",
    detail: "Strategies that build your brand's online presence and turn attention into growth.",
    ctaLabel: 'Learn About Digital Marketing',
    icon: 'pi-megaphone',
    highlights: ['Online Presence', 'Growth Strategy', 'Multichannel Solutions'],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    summary: 'Transform your ideas into reality with innovative and custom software development solutions.',
    detail: 'Custom software, API integrations and ERP solutions that turn your ideas into working products.',
    ctaLabel: 'Explore Software Development',
    icon: 'pi-code',
    highlights: ['Custom Software', 'API Integration', 'ERP Solutions', 'Digital Transformation', 'Power Automate'],
  },
  {
    id: 'business-consultation',
    title: 'Business Consultation',
    summary: 'Empowering your business with expert advice and strategic insights for sustainable growth.',
    detail: 'Expert advice and strategic insight to help your business grow in a sustainable way.',
    ctaLabel: 'Get Expert Business Consultation',
    icon: 'pi-comments',
    highlights: ['Expert Advice', 'Strategic Insight', 'Sustainable Growth'],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    summary: 'Creating custom, responsive websites that enhance user experience and elevate your online presence.',
    detail: 'Custom, responsive websites across the main commerce and CMS platforms.',
    ctaLabel: 'Discover Website Development',
    icon: 'pi-desktop',
    highlights: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce', 'WordPress'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I struggled to find someone to create us a Macro for Linnworks and was considering paying for Linnworks to do it, but they are very very expensive. We have used Rishvi to create 2 x Linnworks Macros now and they have done great work at a good price. Highly Recommended.',
    author: 'CASE CHIMP LTD',
  },
  {
    quote:
      'Have used Vinod and his team on many occasions and I have been very satisfied every time. They take their time understanding the issue related to Linnworks and marketplaces and come up with bespoke solutions that work saving you a lot of time and effort. Kudos.',
    author: 'P Rai',
  },
  {
    quote:
      "Vinod and the team have delivered some great solutions for our Linnworks setup - features that Linnworks themselves don't offer. Project timelines we were quoted proved to be a little ambitious, but the development work has been solid and to-spec. Many thanks!",
    author: 'JP Fahy',
  },
  {
    quote:
      'Vinod and his team are absolute geniuses when it comes to assisting me with Linnworks and other computer based tasks. From original brief to implementation and the after care service, Vinod ensures things are working smoothly. He has already saved us a lot of time by making sure our Linnworks rules do the hard work for us.',
    author: 'Nick Harmston',
  },
  {
    quote:
      'I get a lot of enquiries from SME and some from enterprises, who would like to expand their business but do not have the time, expertise or resources to scale up their operations. Often their operations are quite complex, I have always referred them to Rishvi LTD and not one customer has been let down',
    author: 'Navik',
  },
  {
    quote:
      "Rishvi Ltd has delivered a fully functional macro. They've conducted a few rounds of iterations to fix minor issues, but the project has been completed on time despite the tight deadline. Moreover, the team has demonstrated responsiveness, and excellent communication.",
    author: 'Jay Burgess',
  },
];

// ---- Footer ----
export const FOOTER_QUICK_LINKS: FooterColumn = {
  title: 'Quick Links',
  links: [
    { label: 'About Us', route: ABOUT },
    { label: 'Services', route: SERVICES },
    { label: 'Portfolio', route: HOME, fragment: 'portfolio' },
    { label: 'Blogs', route: HOME, fragment: 'blogs' },
    { label: 'Contact Us', route: HOME, fragment: 'contact' },
  ],
};

export const FOOTER_SERVICE_LINKS: FooterColumn = {
  title: 'Services',
  links: [
    { label: 'Linnworks Implementation', route: SERVICES, fragment: 'linnworks' },
    { label: 'Odoo Development', route: SERVICES, fragment: 'odoo-erp' },
    { label: 'Website Development', route: SERVICES, fragment: 'website-development' },
    { label: 'Our Documentation', route: HOME, fragment: 'documentation' },
  ],
};

export const FOOTER_CONTACTS: ContactDetail[] = [
  { icon: 'pi-whatsapp', label: '+44 20 8050 3432', href: 'tel:+442080503432' },
  { icon: 'pi-envelope', label: 'info@rishvi.co.uk', href: 'mailto:info@rishvi.co.uk' },
  { icon: 'pi-phone', label: '02080503432', href: 'tel:02080503432' },
];

// TODO: replace the '#' placeholders with the real Rishvi social profile URLs.
export const FOOTER_SOCIALS: SocialLink[] = [
  { label: 'Facebook', icon: 'pi-facebook', href: '#' },
  { label: 'Instagram', icon: 'pi-instagram', href: '#' },
  { label: 'LinkedIn', icon: 'pi-linkedin', href: '#' },
  { label: 'X', icon: 'pi-twitter', href: '#' },
];

export const FOOTER_BADGES: PartnerBadge[] = [
  { alt: 'Linnworks Certified Partner', image: 'assest/white-certified-partner-logo-1536x1536-1.png' },
  { alt: 'Odoo Learning Partner', image: 'assest/odoo_learning_partner_rgb.png' },
];

// ---- FAQ ----
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What services does Rishvi Ltd provide as a certified Linnworks customization partner?',
    answer:
      "Rishvi Ltd: As a certified Linnworks customization partner, Rishvi Ltd offers a range of services including custom workflows, SQL custom scripts, macros, shipping integrations, and more. Our expertise spans over 12 years, during which we've developed tailored solutions to meet the diverse needs of Linnworks users.",
  },
  {
    question: 'Can Rishvi Ltd assist with SQL custom scripts for Linnworks?',
    answer:
      "Rishvi Ltd: Absolutely! We’ve developed over 850 SQL custom scripts for Linnworks users to generate customized reports, analyze data, and make informed business decisions. Our scripts are tailored to your specific reporting needs and designed to provide actionable insights to drive growth and efficiency.",
  },
  {
    question: "What advantages do Rishvi Ltd's shipping integrations offer for Linnworks users?",
    answer:
      'Rishvi Ltd: Our shipping integrations enable Linnworks users to generate shipping labels directly from the Linnworks interface without any manual work. We’ve developed more than 5 shipping integrations, allowing users to streamline the entire shipping process, from label creation to tracking details update, and achieve automation and efficiency in their operations.',
  },
];

// ---- Technologies ----
// SQL Server is on the live site but its logo is not in assets yet; add it to Database when saved.
export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', image: 'assest/images.png' },
      { name: 'CSS', image: 'assest/CSS3_logo_and_wordmark.svg' },
      { name: 'JavaScript', image: 'assest/image-4-1.png' },
      { name: 'React', image: 'assest/react_original_wordmark_logo_icon_146375.png' },
      { name: 'Bootstrap', image: 'assest/bootstrap-original-wordmark.png' },
      { name: 'Angular', image: 'assest/angular.png' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'C#', image: 'assest/Csharp_Logo.png' },
      { name: 'Node.js', image: 'assest/twitter_thumb_201604_node.png' },
      { name: 'PHP', image: 'assest/PHP-logo.svg' },
      { name: 'Python', image: 'assest/Python-Symbol-2048x1152.png' },
      { name: 'Java', image: 'assest/java-4-logo.svg' },
      { name: 'WordPress', image: 'assest/wordpress-logo-wordpress-icon-transparent-free-png.webp' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MySQL', image: 'assest/672dfced5422c158fb5a6002_mysql-logo.png' },
      { name: 'MongoDB', image: 'assest/mongodb_thumbnail.png' },
      { name: 'MariaDB', image: 'assest/images-1.png' },
    ],
  },
];

// ---- Latest news (built from the article pages) ----
export const NEWS_ITEMS: NewsItem[] = ARTICLES.map((a) => ({
  route: articlePath(a),
  tag: a.tag,
  title: a.title,
  excerpt: a.excerpt,
  image: a.image,
}));

// ---- Certifications ----
export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'ISO/IEC 27001:2022',
    badge: 'Information security',
    text: 'We are ISO/IEC 27001:2022 certified, ensuring world-class information security management.',
    image: 'assest/9138d2_05c1b6701b7b4277a30a1bfc8b2ce527mv2-1.webp',
  },
  {
    title: 'CMMI Level 3',
    badge: 'Process quality',
    text: 'We are a CMMI Level 3 certified organization, committed to continuous process improvement and quality delivery.',
    image: 'assest/CMMI-3-2048x1075.webp',
  },
];
