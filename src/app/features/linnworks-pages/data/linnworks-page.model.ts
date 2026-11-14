export type LinnworksPageKind = 'macro' | 'script' | 'shipping' | 'automation';

export interface LinnworksImage {
  src: string;
  alt: string;
  /** Original pixel size, when known. */
  w?: string;
  h?: string;
}

export interface LinnworksGroup {
  title: string;
  paras: string[];
  items: string[];
}

export interface LinnworksSection {
  eyebrow: string;
  title: string;
  paras: string[];
  items: string[];
  groups: LinnworksGroup[];
  images: LinnworksImage[];
  /** Rows of a table on the page; the first row is the header. */
  table: string[][] | null;
}

export interface LinnworksStep {
  title: string;
  notes: string[];
  image: string | null;
  alt: string;
}

export interface LinnworksPage {
  kind: LinnworksPageKind;
  slug: string;
  label: string;
  title: string;
  seoTitle: string;
  description: string;
  headline: string;
  eyebrow: string;
  introLines: string[];
  introParas: string[];
  images: LinnworksImage[];
  sections: LinnworksSection[];
  stepsHead: { eyebrow: string; title: string; intro?: string } | null;
  steps: LinnworksStep[];
}
