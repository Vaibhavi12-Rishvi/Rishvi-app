import { VideoItem } from '../../../models/home.model';

export const HYPERSTOCK_FEATURES: string[] = [
  'Dashboard (Locations, Suppliers, and Categories)',
  'Inventory and their data management',
  'Pick Wave',
  'Purchase Order',
  'Update stock Level by Scan and Manually',
  'Stock Count',
  'Stock in',
  'Sub user and their Permission management',
];

export const INSTALL_INTRO =
  'Hyperstock is designed to allow warehouse managers and staff to manage stock items on a mobile device for Linnworks. To install Hyperstock for Linnworks, you can follow these steps';

/** A screenshot from the app (saved in the assets folder). */
export interface StepImage {
  src: string;
  alt: string;
}

/** One install step: a heading, an optional second line, and one or two app screenshots. */
export interface InstallStep {
  /** Short name shown under the step number in the stepper. */
  label: string;
  title: string;
  text?: string;
  images: StepImage[];
}

export const INSTALL_STEPS: InstallStep[] = [
  {
    label: 'Download',
    title: 'Download the application from App Store or Play Store.',
    text: 'From the Sign-up page Connect to Linnworks.',
    images: [{ src: 'assest/image-1.jpeg', alt: 'Hyperstock start screen with Log in and Connect to Linnworks buttons' }],
  },
  {
    label: 'Welcome',
    title: 'Welcome Page will appear',
    text: 'Welcome to Hyperstock. Manage your stock and Warehouse easily.',
    images: [{ src: 'assest/image-1-1.jpeg', alt: 'Hyperstock welcome screen with a welcome banner illustration' }],
  },
  {
    label: 'Log in',
    title: 'Click on the login page, Enter the email address',
    images: [{ src: 'assest/image-2.jpeg', alt: 'Hyperstock login screen with email and password fields' }],
  },
  {
    label: 'Profile',
    title: 'Set your profile and password.',
    images: [
      { src: 'assest/image-3.jpeg', alt: 'Provide Details screen with name and password fields' },
      { src: 'assest/image-4.jpeg', alt: 'Set Password screen' },
    ],
  },
  {
    label: 'Start',
    title: 'Log in to the application and Start using Hyperstock.',
    images: [{ src: 'assest/image-1-1.webp', alt: 'Hyperstock inventory list screen showing SKUs and stock levels' }],
  },
];

/** Intro video. The thumbnail is YouTube's own cover image for the same video id. */
export const HYPERSTOCK_VIDEO: VideoItem = {
  title: 'HyperStock Inventory || Introduction || Best App To Manage Stock And Inventories || Rishvi Ltd.',
  youtubeId: 'jynUdflvRME',
  thumbnail: 'https://i.ytimg.com/vi/jynUdflvRME/maxresdefault.jpg',
};

export const CONTACT_INTRO = 'Write email to us or call with us if you have any feedback or need any help';
