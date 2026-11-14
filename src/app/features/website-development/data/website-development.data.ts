export const WEB_EMAIL = 'info@rishvi.co.uk';

export const WEB_IMAGE = 'assest/1_6shfwxStGryrWDbZbv7rfg.jpg';

export const WEB_INTRO = {
  eyebrow: 'Website Development',
  title: 'Custom, Responsive Website Development.',
  text: 'Website development involves designing and creating custom websites that align with your business objectives. We focus on crafting visually appealing, user-friendly sites that provide a seamless experience across all devices. Our approach includes integrating robust features and functionality to enhance performance and drive engagement. From initial design concepts to final deployment, we ensure your website is optimized for both user experience and search engine visibility.',
  chips: ['Responsive on every device', 'User-friendly design', 'Search-engine ready'],
};

export interface WebService {
  /** Page this service opens, when it has one. */
  route?: string;
  icon: string;
  title: string;
  text: string;
}

export const WEB_SERVICES_HEAD = {
  eyebrow: 'Services',
  title: 'Website Development Services',
};

export const WEB_SERVICES: WebService[] = [
  { icon: 'pi-shopping-bag', route: '/shopify-development', title: 'Shopify Development', text: 'Custom Shopify development for a unique, optimized online store.' },
  { icon: 'pi-server', route: '/magento-services', title: 'Magento Services', text: 'Customized Magento services for scalable eCommerce solutions.' },
  { icon: 'pi-shopping-cart', route: '/woocommerce-development', title: 'Woocommerce Development', text: 'Tailored WooCommerce development for powerful and flexible online stores.' },
  { icon: 'pi-th-large', route: '/bigcommerce', title: 'Big-Commerce', text: 'Robust BigCommerce solutions for scalable and growth-driven online businesses.' },
  { icon: 'pi-globe', route: '/wordpress-development', title: 'Wordpress Development', text: 'Custom WordPress development for dynamic, user-friendly websites.' },
];

export const WEB_TESTIMONIALS_HEAD = {
  eyebrow: 'Testimonials',
  title: 'What Our Customers Say About Us',
  text: 'Read what our clients have to say about their experience and success with us.',
};
