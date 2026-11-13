export const CONTACT_EMAIL = 'info@rishvi.co.uk';
export const SUPPORT_EMAIL = 'support@rishvi.co.uk';
export const CONTACT_PHONE = '07536677692';
export const CONTACT_IMAGE = 'assest/background-5.png';

export const CONTACT_WAYS = [
  { icon: 'pi-comments', title: 'Chat With US', text: "We've got live experts waiting to help you Monday to Friday from 9am to 6pm UK time.", label: 'Chat With Us', href: 'https://wa.me/442080503432' },
  { icon: 'pi-envelope', title: 'Email Us', text: `Simple drop us an email at ${CONTACT_EMAIL} and you'll receive a reply within 24 hours`, label: 'Email Us', href: `mailto:${CONTACT_EMAIL}` },
  { icon: 'pi-phone', title: 'Give us a call', text: 'Our Experts are standing by Monday to Friday from 9am to 6pm UK time.', label: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
];

export const CONTACT_SERVICES = [
  'Linnworks',
  'Odoo ERP',
  'Website Development',
  'Software Development',
  'Digital Marketing',
  'E-Invoicing',
  'Business Consultation',
  'Other',
];

export const SUPPORT = {
  eyebrow: 'Support',
  title: 'Support & Response Times',
  intro: [
    'Standard support: Monday to Friday, 09:00–18:00 UK time, excluding UK bank holidays.',
    'Premium support: where your signed support agreement includes it, also covers Saturdays, 09:00–18:00 UK time.',
    'Response times below are counted within the support hours that apply to your account.',
  ],
  ticket: 'with your company name, the system affected (for example Linnworks, an integration or an app), what is happening, and any order numbers or screenshots. Please don’t send passwords or full customer data by email.',
  head: ['Priority', 'What it means', 'Example', 'First response'],
  rows: [
    { p: 'P1 – Critical', tone: 'p1', means: 'A core business process has stopped and there is no workaround', example: 'Orders not importing or despatching; an integration fully down', time: 'Within 1 working hour' },
    { p: 'P2 – High', tone: 'p2', means: 'A core process is badly affected, or a workaround exists but is hard to use', example: 'Some channels failing; a macro giving wrong results on live orders', time: 'Within 2 working hours' },
    { p: 'P3 – Normal', tone: 'p3', means: 'A fault that is not urgent; work can continue', example: 'A report showing wrong figures; one rule misbehaving', time: 'Within 1 working day' },
    { p: 'P4 – Low', tone: 'p4', means: 'A minor issue, question or how-to', example: 'A layout tweak; “how do I…?”', time: 'Within 2 working days' },
  ],
  notes: [
    '“First response” means a support engineer has reviewed your ticket and replied. It is not a fix time. We will keep you updated until the ticket is resolved, at least daily for P1 and P2. We set the priority based on business impact; if you think a ticket is more urgent, reply to it and we will review the priority.',
    'Ticket types: incidents (something we built or support has stopped working), change requests, new work, questions and access requests. Change requests and new work are quoted separately or taken from your support hours. Faults in Linnworks itself, marketplaces, carriers or your own devices and networks are outside our support, but we will tell you who to contact and can help for a charge.',
    'Your proposal or support agreement sets out the support that applies to your account. Where it differs from this page, your agreement applies.',
  ],
};

export const LOCATIONS = [
  { region: 'UK', city: 'London', address: 'Suite 1, 1st Floor, 730 Romford Road, London, E12 6BT, United Kingdom' },
  { region: 'India', city: 'Ahemdabad', address: 'Office No.647, Sun Gravitas, Near Shyamal Cross Road, Satellite, Ahmedabad – 380015' },
];
