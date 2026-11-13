export const CONVERT_INTRO = {
  eyebrow: 'Convert Channel Notes',
  title: 'Convert Channel Notes To External Notes',
  text: 'The “Convert Channel Notes to External Notes” is a macro that runs as an action of the Rules Engine. It is designed to modify order notes within the Linnworks platform, specifically targeting notes marked as internal. By iterating through specified orders and their associated notes, this macro identifies internal notes and updates them to be marked as external.',
  lead: 'There are three steps you need to complete to start using the macro:',
};

export const CONVERT_SETUP: string[] = [
  'Go to Apps > Application Store > Convert Channel Notes to External Notes > click Install and follow the on-screen instructions until the installation is complete.',
  'Configure the macro.',
  'Configure the rule in the Rules Engine screen.',
];

export const CONVERT_FUNCTIONS_INTRO = {
  eyebrow: 'Functionality',
  title: 'Our Powerful Functionality',
  text: 'Comprehensive functionality designed for efficiency and ease of use',
};

export interface ConvertFunction {
  icon: string;
  title: string;
  /** One line per entry. */
  lines: string[];
}

export const CONVERT_FUNCTIONS: ConvertFunction[] = [
  {
    icon: 'pi-pencil',
    title: 'Note Modification',
    lines: ['1. Retrieves order notes for each specified order.', '2. Identifies internal notes within the retrieved set of notes.'],
  },
  {
    icon: 'pi-search',
    title: 'Internal Note Detection',
    lines: ['Determines if any of the retrieved notes are marked as internal.'],
  },
  {
    icon: 'pi-sync',
    title: 'Note Update',
    lines: ['Updates internal notes to be marked as external, ensuring broader accessibility and transparency.'],
  },
];

export const CONVERT_CONFIG_INTRO = {
  eyebrow: 'Our App',
  title: 'Configure the macro',
  text: 'Once the Add Convert Channel Notes to External Notes app is installed:',
};

export interface ConfigStep {
  title: string;
  image: string;
  alt: string;
}

export const CONVERT_CONFIG_STEPS: ConfigStep[] = [
  {
    title: 'Go to Apps > Macro Configuration and click + Add new configuration.',
    image: 'assest/AddOrderNoteMacro-AddNew.png',
    alt: 'Linnworks Apps menu with Macro configuration and the Add New Configuration button highlighted',
  },
  {
    title: 'Select the External Notes macro and click Create Configuration.',
    image: 'assest/Screenshot-2024-02-19-154055.png',
    alt: 'Macros list with the ExternalNotes macro and the Create Configuration button highlighted',
  },
  {
    title: 'Save the macro configuration.',
    image: 'assest/Screenshot-2024-02-19-153502.png',
    alt: 'Macro Configuration window for the External Notes application with a Save button',
  },
  {
    title: 'Make sure to enable the macro to continue with the Rules Engine configuration.',
    image: 'assest/Screenshot-2024-02-19-154136.png',
    alt: 'Macro configuration row with the Enabled switch highlighted',
  },
];
