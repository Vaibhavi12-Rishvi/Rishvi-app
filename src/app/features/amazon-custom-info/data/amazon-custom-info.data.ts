export const AMAZON_INFO_INTRO = {
  eyebrow: 'Description',
  title: 'Amazon Custom Information To Notes',
};

export interface AmazonStep {
  /** Short heading, shown in bold. */
  title: string;
  /** What happens in this step. */
  text: string;
}

/** The eight steps of the script, in order. */
export const AMAZON_STEPS: AmazonStep[] = [
  { title: 'Check Open Orders', text: 'Start by reviewing all open orders in the system.' },
  { title: 'Identify Orders with Source Equal to Amazon', text: 'Filter out orders that have "Amazon" as the source.' },
  {
    title: 'Check if Customization Info is Available in XML',
    text: 'For the identified Amazon orders, check whether customization information (like customer-specific details) is present in the XML data.',
  },
  { title: 'Retrieve URL from XML', text: 'Extract the URL from the XML that contains the customization details.' },
  {
    title: 'Extract Data from URL (like name, date, age, etc.)',
    text: 'Access the URL to obtain the customer-specific information, such as their name, date, or other requested customizations.',
  },
  {
    title: 'Remove Any Extra Code within the Details',
    text: 'Clean up the retrieved data by removing any unnecessary or irrelevant code that may be included.',
  },
  {
    title: 'Save Customization Details as a Note in the Open Order',
    text: 'Record the cleanedup customization details as a note within the open order.',
  },
  {
    title: 'Mark the Note as an External Note',
    text: 'Ensure the note is marked as an external note, making it accessible for further processing.',
  },
];
