export const SERVICES_EMAIL = 'info@rishvi.co.uk';

export const FEATURED_HEAD = {
  eyebrow: 'Featured Services',
  title: 'Build Audience and Grow Your Business',
  text: 'Offering tailored solutions to meet your unique needs with our featured services.',
};

export interface FeaturedCard {
  icon: string;
  title: string;
  text: string;
}

/** The large card with the checklist. */
export const FEATURED_MAIN = {
  icon: 'pi-chart-bar',
  title: 'Advanced analytics',
  paragraphs: [
    'Synergistically pursue accurate initiatives without economically sound imperatives.',
    'Professionally architect unique process improvements via optimal.',
  ],
  includedTitle: 'Included with...',
  included: ['High -converting', 'Personal branding', 'Modernized prospecting', 'Clean and modern', 'Showcasing success', 'Bootstrap latest version'],
};

export const FEATURED_SERVICES: FeaturedCard[] = [
  { icon: 'pi-file-export', title: 'Automated Reports', text: 'Synergistically pursue accurate initiatives without economically imperatives.' },
  { icon: 'pi-share-alt', title: 'User Journey Flow', text: 'Quickly productize prospective value before collaborative benefits.' },
  { icon: 'pi-clone', title: 'Compare A/B Testing', text: 'Credibly disintermediate functional processes for team driven action.' },
  { icon: 'pi-sliders-h', title: 'Easy Customization', text: 'Dynamically develop ubiquitous opportunities whereas relationships.' },
];

export const TRIAL = {
  eyebrow: 'Let’s Try! Get Free Support',
  title: 'Start Your 14-Day Free Trial',
  text: 'We can help you to create your dream website for better business revenue.',
  points: ['Free 14-day trial', 'No credit card required', 'Support 24/7'],
  cta: 'Contact With Us',
};

export const TESTIMONIALS_HEAD = {
  eyebrow: 'Testimonials',
  title: 'What Our Customers Say About Us',
  text: 'Read what our clients have to say about their experience and success with us.',
};
