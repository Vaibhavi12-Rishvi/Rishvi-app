// Public website (home, services, footer) models

/** A link target inside the app: a route plus an optional in-page anchor. */
export interface AppLink {
  route: string;
  fragment?: string;
}

// ---- Header navigation ----
export interface NavChild extends AppLink {
  label: string;
}

export interface NavItem {
  key: string;
  label: string;
  /** Present on items that link directly; items with `children` open a dropdown instead. */
  route?: string;
  fragment?: string;
  children?: NavChild[];
}

// ---- Hero ----
export interface HeroSystem {
  name: string;
  status: string;
  busy: boolean;
}

export interface OrbitChip {
  label: string;
  color: string;
  /** 1 is the inner ring, 2 the outer ring. */
  ring: 1 | 2;
  reverse: boolean;
  left: string;
  top: string;
}

// ---- Services ----
export interface ServiceItem {
  /** Used as the in-page anchor on the services page. */
  id: string;
  title: string;
  /** Short text for the featured card. */
  summary: string;
  /** Longer text for the services page. */
  detail: string;
  ctaLabel: string;
  /** PrimeIcons class, for example `pi-box`. */
  icon: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}

// ---- Footer ----
export interface FooterLink extends Partial<AppLink> {
  label: string;
  /** External or mail link; used instead of route when set. */
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  href: string;
}

export interface PartnerBadge {
  alt: string;
  image: string;
}

// ---- About us ----
export interface AboutStat {
  icon: string;
  value: string;
  label: string;
}

export interface AboutPoint {
  title: string;
  text: string;
  /** PrimeIcons class, for example `pi-check-circle`. */
  icon: string;
}

export interface VisionCard {
  icon: string;
  title: string;
  text: string;
}

export interface VideoItem {
  title: string;
  /** YouTube video id. */
  youtubeId: string;
  /** Banner image path under the assets folder. */
  thumbnail: string;
}

export interface ClientLogo {
  name: string;
  /** Logo image path under the assets folder. */
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ---- Technologies, news, certifications ----
export interface TechItem {
  name: string;
  image: string;
}

export interface TechCategory {
  label: string;
  items: TechItem[];
}

export interface NewsItem {
  /** Full path of the article page, for example `/linnworks/some-article`. */
  route: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
}

export interface CertificationItem {
  title: string;
  text: string;
  image: string;
  badge: string;
}

// ---- News articles ----
export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; label: string; text: string };

export interface Article {
  /** First URL segment, for example `linnworks`. */
  category: string;
  /** Second URL segment. */
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  blocks: ArticleBlock[];
}

export interface TocEntry {
  id: string;
  text: string;
  /** 2 for main headings, 3 for sub-headings. */
  level: 2 | 3;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
