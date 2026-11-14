export const DHL_INTRO = {
  eyebrow: 'DHL DE Integration',
  title: 'Efficient Shipping With DHL DE Integration',
  paragraphs: [
    'The DHL DE integration provides the capability to configure shipping services and print shipping labels through Linnworks.',
    'This was created by a member of the Rishvi Ltd customization team as a 3rd Party Integration to showcase external shipping integrations.',
  ],
  note: 'DHL DE integration only supports label printing. Label Cancellation and Manifesting Quotes are not supported.',
};

export interface DhlStep {
  icon: string;
  title: string;
  text: string;
}

export const DHL_LEAD = 'Integrate DHL DE Shipping services with Linnworks';

/** What the integration lets you do, in the order it happens. */
export const DHL_STEPS: DhlStep[] = [
  { icon: 'pi-print', title: 'Print labels', text: 'Print DHL DE shipping labels from Linnworks.' },
  { icon: 'pi-file', title: 'Create manifest', text: 'Create manifest for Printed shipping labels from Linnworks.' },
  { icon: 'pi-send', title: 'Submit manifest', text: 'Submit manifest to DHL DE.' },
];
