import { AboutPoint, AboutStat, ClientLogo, VideoItem, VisionCard } from '../../../models/home.model';

export const ABOUT_INTRO_PARAGRAPHS: string[] = [
  'Provide Solutions to improve upon and exploit the weaknesses of businesses to assure increased productivity and efficiency in resources utilization hence a steady growth.',
  'Thank you for visiting our website and we hope it is of interest to you. At Rishvi Ltd we have strong core values and believe that getting to know you and your business is fundamental to achieving successful outcomes.',
];

export const ABOUT_STATS: AboutStat[] = [
  { icon: 'pi-cog', value: '630', label: 'Project Completed' },
  { icon: 'pi-headphones', value: '28', label: 'IT Specialist' },
  { icon: 'pi-heart', value: '900+', label: 'Happy Clients' },
  { icon: 'pi-lightbulb', value: '650+', label: 'Smart Solution' },
];

export const MOTIVE_PARAGRAPHS: string[] = [
  "As the founder of Rishvi Ltd, my mission has always been to empower businesses by simplifying complex digital challenges. We pride ourselves on not just delivering solutions, but building partnerships where your success is our priority. Every script we write and every integration we develop is tailored to meet your unique needs. We're not just a service provider; we're your strategic ally in driving innovation and growth. Let's transform your business together, one solution at a time.",
  "At Rishvi Ltd, our philosophy is simple: 'You Win, We Win.' This principle drives everything we do. We believe in creating solutions that not only meet your needs but also propel your business forward. Our success is intrinsically linked to yours, which is why we approach every project with a deep commitment to your growth and success. Together, we navigate challenges, innovate, and achieve remarkable results. When you succeed, we succeed—because your victory is our greatest reward.",
];

export const VISION_MISSION: VisionCard[] = [
  {
    icon: 'pi-eye',
    title: 'Our Vision',
    text: 'We aim to empower e-commerce businesses by simplifying complexity through automation, smart integrations, and innovative technology.',
  },
  {
    icon: 'pi-flag',
    title: 'Our Mission',
    text: 'Our mission is to deliver bespoke automation, integration, and software solutions that streamline operations and boost growth.',
  },
];

export const WHY_US_POINTS: AboutPoint[] = [
  {
    icon: 'pi-sync',
    title: 'Change Management',
    text: 'Navigate organizational change smoothly with expert guidance and proven change management strategies.',
  },
  {
    icon: 'pi-chart-line',
    title: 'Strategic Marketing',
    text: 'Drive business growth with data-driven strategies and impactful strategic marketing solutions.',
  },
  {
    icon: 'pi-graduation-cap',
    title: 'Training',
    text: 'Empower your team with comprehensive training programs designed to enhance skills and performance.',
  },
];

export const CLIENT_POINTS: AboutPoint[] = [
  {
    icon: 'pi-check-circle',
    title: 'Build Clients For Life',
    text: 'We continually strive to develop software that empowers our clients to excel in their industries through streamlined operations.',
  },
  {
    icon: 'pi-check-circle',
    title: 'Exceptional Customer Experience',
    text: 'Rapid Query Response, On-Time Project Delivery, 24/7 Support',
  },
  {
    icon: 'pi-check-circle',
    title: 'Strong Partnership',
    text: 'Openness, Trust, Communication, and Dedication.',
  },
];

/** Tutorial videos for the "Explore Our Work" slider. Add more by saving the banner image in assets. */
export const WORK_VIDEOS: VideoItem[] = [
  { title: 'How to Install Macros', youtubeId: 'cKra8MTjAo4', thumbnail: 'assest/sddefault.webp' },
  { title: 'How to add new Product / SKU', youtubeId: 'Iqj06AQvngE', thumbnail: 'assest/sddefault-1.webp' },
  { title: 'HyperStock Stock Count', youtubeId: 'mibIsb28FHc', thumbnail: 'assest/sddefault.jpg' },
];

/** Companies shown in the "We work with" logo strip. */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'We Can Source It', image: 'assest/20241107-095825.png' },
  { name: 'Huni', image: 'assest/images-2.webp' },
  { name: 'AutoArt Styling Limited', image: 'assest/AutoArt-Small.jpeg' },
  { name: 'Furnishings For Less', image: 'assest/ffl-logo-smaller-120x91-1.png' },
  { name: 'Bourke Sports', image: 'assest/image_png.webp' },
  { name: 'Stoney Racing', image: 'assest/dLnL6Ib-200x200-1.jpg' },
  { name: 'ASK', image: 'assest/ask-logo-light_9828265a-2a50-4bc8-9f23-801b00246360-1.png' },
  { name: 'LGG', image: 'assest/LGG_Logo.avif' },
  { name: 'Client logo', image: 'assest/png-logo-0B051D.avif' },
  { name: 'Client logo', image: 'assest/OrangeLogo_y.svg' },
];
