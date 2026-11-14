// Generated from the live Linnworks pages on rishvi.co.uk. Text is kept as published.
import { LinnworksPage } from './linnworks-page.model';

export const LINNWORKS_PAGES: LinnworksPage[] = [
  {
    "title": "Missing Phone Number and Email",
    "headline": "RIS-RM-1013 Missing Phone Number and Email",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > Missing Phone Number and Email > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The Missing Phone Number and Email application contains a macro that runs as the Rules Engine action. This macro automatically fills in the shipping address phone number and email in the open order details with the default one from the preset configuration if it was initially empty.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/missing-phone-number-and-email/people-business-meeting-high-angle_23-2148911819.avif",
        "alt": "Missing Phone Number and Email 1",
        "w": "626",
        "h": "418"
      },
      {
        "src": "assest/linnworks/missing-phone-number-and-email/240_F_373514790_fvPkgwLkD95dJlj4Z1aYvbhUtybDRDXw.jpg",
        "alt": "Missing Phone Number and Email 2",
        "w": "360",
        "h": "240"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Parameter Input",
            "paras": [
              "1. OrderIds: List of OrderIds representing the open orders for which the phone numbers and email addresses need to be checked and potentially updated. 2. DefaultPhoneNumber: Default phone number to be used if the shipping address phone number is initially empty. 3. DefaultEmailAddress: Default email address to be used if the shipping address email is initially empty."
            ],
            "items": []
          },
          {
            "title": "Rules Engine Integration",
            "paras": [
              "The macro operates within a Rules Engine environment, allowing it to be triggered based on predefined conditions or scheduled intervals."
            ],
            "items": []
          },
          {
            "title": "Data Check and Update",
            "paras": [
              "1. For each order in the provided list (OrderIds), the macro examines the shipping address details. 2. If the phone number or email address is initially empty, the macro fills in the missing information with the default phone number or email address specified in the configuration."
            ],
            "items": []
          },
          {
            "title": "Logging and Error Handling",
            "paras": [
              "The macro incorporates logging mechanisms to record its actions, ensuring transparency and facilitating troubleshooting in case of errors."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "1. OrderIds: List of OrderIds representing open orders where phone numbers and email addresses need to be checked and potentially updated. 2. DefaultPhoneNumber: Default phone number to be used if the shipping address phone number is empty. 3. DefaultEmailAddress: Default email address to be used if the shipping address email is empty."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. The macro is configured to run within a Rules Engine environment, either triggered by specific events or scheduled to execute at defined intervals. 2. Upon execution, it takes the provided list of OrderIds and default values for phone numbers and email addresses as input. 3. The macro iterates through each order, checks the shipping address details, and updates them if phone number or email address fields are empty."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. Orders that originally had empty shipping address phone numbers or email addresses now have them filled with default values. 2. The macro helps ensure completeness and accuracy of shipping address information, which is crucial for communication and order processing. 3. Through logging, administrators can track the macro's actions and monitor changes made to orders."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the Missing Phone Number and Email app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/missing-phone-number-and-email/spaces_FRkrZGowwT8Xbb5HKclZ_uploads_Om2kGSH0cvUuTV2JdLyC_phn-and-email-1.webp",
        "alt": "Missingnumber-step1"
      },
      {
        "title": "Select the MissingPhonenumberandEmail macro and click Create Configuration. .",
        "notes": [],
        "image": "assest/linnworks/missing-phone-number-and-email/phn-and-email-2.png",
        "alt": "Missingnumber-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/missing-phone-number-and-email/spaces_FRkrZGowwT8Xbb5HKclZ_uploads_gj9mhePWWY53VffOfsCf_phn-and-email-3.webp",
        "alt": "Missingnumber-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/missing-phone-number-and-email/spaces_FRkrZGowwT8Xbb5HKclZ_uploads_tZ5k2GFxOnm0UA4fmiXB_PHONEEMAIL4-1.webp",
        "alt": "Missingnumber-step4"
      }
    ],
    "kind": "macro",
    "slug": "missing-phone-number-and-email",
    "label": "Missing Phone Number and Email",
    "seoTitle": "Missing Phone Number and Email",
    "description": "Rishvi Ltd provides solutions for handling missing phone number and email addresses."
  },
  {
    "title": "Print Shipping Label And Save In FTP",
    "headline": "RIS-SM-1017 Shipping label Print To FTP",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store >ShippingLabelAndSaveInFTP > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the screen."
    ],
    "introParas": [
      "The ShippingLabelAndSaveInFTP application contains a macro that runs as the Rules Engine action.In this macro user will be able to set the macro to print the order shipping label and save it with Linnworks orderId as the label name in the FTP location.It is a schedule macro.",
      "This macro facilitates the automation of shipping label generation and distribution by seamlessly integrating with FTP servers, streamlining the shipping process for businesses.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/print-shipping-label-and-save-in-ftp/create-print-shipping-labels-B-1035781-Q421.webp",
        "alt": "Print Shipping Label And Save In FTP",
        "w": "960",
        "h": "540"
      },
      {
        "src": "assest/linnworks/print-shipping-label-and-save-in-ftp/BLOG-1-16-610x445-1.png",
        "alt": "Print Shipping Label And Save In FTP 2",
        "w": "610",
        "h": "445"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Generate Shipping Label",
            "paras": [
              "The macro generates a shipping label based on the provided identifier."
            ],
            "items": []
          },
          {
            "title": "FTP Connection",
            "paras": [
              "It establishes a connection to the specified FTP server using the provided credentials."
            ],
            "items": []
          },
          {
            "title": "Save Label",
            "paras": [
              "Once the connection is established, the macro uploads the generated shipping label to the designated file path on the FTP server."
            ],
            "items": []
          },
          {
            "title": "Scheduled Execution",
            "paras": [
              "The macro can be scheduled to run at specified intervals or times as per the requirements."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "1. identifier: Unique identifier for the shipping label. 2. FTPServer: FTP server address. 3. FTPUserName: Username for FTP authentication. 4. FTPPassword: Password for FTP authentication. 5. FTPSSL: Boolean flag indicating whether SSL is enabled for the FTP connection. 6. FTPPort: Port number for the FTP connection. 7. FTPFilePath: Path where the shipping label will be saved on the FTP server."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. The macro is invoked with the specified parameters, such as the identifier for the shipping label and FTP server details. 2. It processes the shipping label generation and FTP upload procedures. 3. The execution can be either manual or scheduled based on the requirements of the shipping process."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. Upon successful execution, the shipping label associated with the provided identifier is generated and saved onto the specified FTP server at the designated file path. 2. If any errors occur during the process, appropriate error handling mechanisms should be implemented to notify users or log issues for debugging purposes."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro"
    },
    "steps": [
      {
        "title": "Once the ShippingLabelAndSaveInFTP app is installed:",
        "notes": [],
        "image": null,
        "alt": ""
      },
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/print-shipping-label-and-save-in-ftp/ftp-1-1.png",
        "alt": ""
      },
      {
        "title": "Select the ShippingLabelAndSaveInFTP macro and click Create Configuration. .",
        "notes": [],
        "image": "assest/linnworks/print-shipping-label-and-save-in-ftp/ftp-2.png",
        "alt": "Print-Shipping-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/print-shipping-label-and-save-in-ftp/ftp-3.png",
        "alt": "Print-Shipping-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the schedule Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/print-shipping-label-and-save-in-ftp/ftp-4.png",
        "alt": "Print-Shipping-step4"
      }
    ],
    "kind": "macro",
    "slug": "print-shipping-label-and-save-in-ftp",
    "label": "Print Shipping Label And Save In FTP",
    "seoTitle": "Print Shipping Label and Save in FTP",
    "description": "Print shipping labels and save them to FTP automatically in Linnworks with Rishvi Ltd&#039;s macro, for faster shipping and secure archiving."
  },
  {
    "title": "Assign Payment Method By Source and Sub Source",
    "headline": "RIS-RM-1027 Assign Payment Method By Source and Sub Source",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > Assign Payment Method > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “Assign Payment Method By Source and SubSource” is a macro that runs as an action of the Rules Engine. It is designed to automate the assignment of payment methods to orders based on their specified source and subsource within the Linnworks platform. This macro provides users with a convenient way to streamline payment method assignment, enhancing order processing efficiency.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/assign-payment-method-by-source-and-sub-source/AdobeStock_315697840-scaled-1.jpeg",
        "alt": "Assign Payment Method By Source and Sub Source",
        "w": "2560",
        "h": "1554"
      },
      {
        "src": "assest/linnworks/assign-payment-method-by-source-and-sub-source/online-payment-1200-sixteen_nine.avif",
        "alt": "Assign Payment Method By Source and Sub Source 2",
        "w": "948",
        "h": "533"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Payment Method Assignment",
            "paras": [
              "Automatically assigns payment methods to orders based on their defined source and subsource."
            ],
            "items": []
          },
          {
            "title": "Source and SubSource Matching",
            "paras": [
              "Matches orders with specified source and subsource criteria to ensure accurate payment method assignment."
            ],
            "items": []
          },
          {
            "title": "Payment Method Lookup",
            "paras": [
              "Retrieves available payment methods from the Linnworks platform for selection."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Input Parameters (In Sequential Order):",
            "paras": [
              "1. OrderIds: Array of order IDs to process. 2. Source: Comma-separated list of source values to match against orders. 3. SubSource: Comma-separated list of subsource values to match against orders. 4. PaymentMethods: Comma-separated list of payment method names to assign to matching orders."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "Call the macro with the necessary input parameters to initiate the payment method assignment process."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. The macro iterates through the specified orders and matches them with the provided source and subsource criteria. 2. If a match is found, the corresponding payment method from the provided list is assigned to the order."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the Assign Payment Method app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/assign-payment-method-by-source-and-sub-source/ftp-1.png",
        "alt": "Print-Shipping-step1"
      },
      {
        "title": "Select the Assign Payment Method macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/assign-payment-method-by-source-and-sub-source/payment-method-2.png",
        "alt": "Assign-Payment-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/assign-payment-method-by-source-and-sub-source/payment-method-3.png",
        "alt": "Assign-Payment-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/assign-payment-method-by-source-and-sub-source/img_v3_029p_c69237f7-b93b-42de-8cc1-3e001e75870h.png",
        "alt": "Assign-Payment-step4"
      }
    ],
    "kind": "macro",
    "slug": "assign-payment-method-by-source-and-sub-source",
    "label": "Assign Payment Method By Source and Sub Source",
    "seoTitle": "Assign Payment Method by Source and Sub Source",
    "description": "Assign payment methods automatically by source and sub-source in Linnworks with Rishvi Ltd&#039;s custom macro, saving time on every order."
  },
  {
    "title": "Shipping Delivery Note",
    "headline": "RIS-RM-1032 Shipping Delivery Note",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > UpdateDeliveryNote > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “ShippingDeliveryNote” macro is a tool within the Linnworks platform designed to automate the process of appending delivery notes to orders. This macro streamlines the order fulfillment process by automatically adding relevant delivery notes based on specified parameters.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/shipping-delivery-note/istockphoto-1234427871-612x612-1.jpg",
        "alt": "Shipping Delivery Note",
        "w": "612",
        "h": "408"
      },
      {
        "src": "assest/linnworks/shipping-delivery-note/istockphoto-598134820-612x612-1.jpg",
        "alt": "Shipping Delivery Note 2",
        "w": "612",
        "h": "406"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Delivery Note Appending",
            "paras": [
              "Automatically appends delivery notes to orders based on predefined criteria."
            ],
            "items": []
          },
          {
            "title": "Parameterized Configuration",
            "paras": [
              "Allows users to specify parameters such as OrderId and AppendNotes to customize the behavior of the macro."
            ],
            "items": []
          },
          {
            "title": "Rules Engine Integration",
            "paras": [
              "Can be integrated with the Rules Engine or scheduled for execution at specific times."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "1. OrderId: Identifier for the order to which the delivery note will be appended. 2. AppendNotes: Text of the delivery note to be added to the specified order."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. Configure the macro by providing the required parameters. 2. Optionally, integrate the macro with the Rules Engine or schedule it for execution at specific intervals."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. When executed, the macro will automatically append the specified delivery note to the order identified by the provided OrderId. 2. The appended delivery note will contain the text specified in the AppendNotes parameter. 3. This streamlines the order fulfillment process by ensuring that relevant delivery information is included with each order."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the UpdateDeliveryNote app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/shipping-delivery-note/spaces_FRkrZGowwT8Xbb5HKclZ_uploads_0x2XnyJtoSUQCTvsnKqW_AddOrderNoteMacro-AddNew.webp",
        "alt": "Shipping-notes-step1"
      },
      {
        "title": "Select the UpdateDeliveryNote macro and click Create Configuration .",
        "notes": [],
        "image": "assest/linnworks/shipping-delivery-note/image-7.avif",
        "alt": "Shipping-notes-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/shipping-delivery-note/image-8.avif",
        "alt": "Shipping-notes-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/shipping-delivery-note/image-9.avif",
        "alt": "Shipping-notes-step4"
      }
    ],
    "kind": "macro",
    "slug": "shipping-delivery-note",
    "label": "Shipping Delivery Note",
    "seoTitle": "Shipping Delivery Note Linnworks Macro | Rishvi Ltd",
    "description": "Rishvi Ltd offers solutions for managing and generating shipping delivery notes, ensuring accurate documentation and streamlined shipping processes."
  },
  {
    "title": "Mark Order Process Shipping Label Printed",
    "headline": "RIS-SM-1016 Mark Order Process Shipping Label Printed",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > MarkOrderProcessShippingLabel > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “MarkOrderProcessShippingLabel” macro automates the process of marking orders as “Shipping Label Printed” within the system. This macro is particularly useful in streamlining order processing workflows by indicating that shipping labels have been generated for specific orders.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/mark-order-process-shipping-label-printed/main-qimg-d431460a40d7dcbfc42ba4969b993daf-pjlq.jpeg",
        "alt": "Mark Order Process Shipping Label Printed 2",
        "w": "602",
        "h": "430"
      },
      {
        "src": "assest/linnworks/mark-order-process-shipping-label-printed/iStock-901093308.jpg",
        "alt": "Mark Order Process Shipping Label Printed",
        "w": "1600",
        "h": "900"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Parameter Input",
            "paras": [
              "This macro does not require any input parameters."
            ],
            "items": []
          },
          {
            "title": "Rules Engine Integration",
            "paras": [
              "Seamlessly integrates with the Rules Engine, allowing it to be invoked based on predefined conditions or scheduled intervals."
            ],
            "items": []
          },
          {
            "title": "Marking Orders",
            "paras": [
              "Automatically marks orders as \"Shipping Label Printed\" to indicate that shipping labels have been generated for them."
            ],
            "items": []
          },
          {
            "title": "Workflow Optimization",
            "paras": [
              "Facilitates the smooth flow of order processing by providing a clear indication that shipping labels are ready for fulfillment."
            ],
            "items": []
          },
          {
            "title": "Logging and Error Handling",
            "paras": [
              "Implements logging mechanisms to record actions for transparency and facilitate troubleshooting in case of errors."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "This macro does not require any input parameters."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. Execute the macro within the Rules Engine interface. 2. Trigger the marking process manually or schedule it to run at specified intervals."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. Automatically marks orders as “Shipping Label Printed” within the system. 2. Provides a clear indication to fulfillment staff that shipping labels are ready for orders, optimizing workflow efficiency. 3. Offers confirmation upon completion of the marking process and delivers any pertinent status updates or notifications."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the MarkOrderProcessShippingLabel app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/mark-order-process-shipping-label-printed/mark-1.png",
        "alt": "Mark Oder Step 1"
      },
      {
        "title": "Select the Mark Order Process Shipping Label macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/mark-order-process-shipping-label-printed/mark-2-1024x337-1.png",
        "alt": "Mark-Order-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/mark-order-process-shipping-label-printed/mark-3-1024x541-1.png",
        "alt": "Mark-Order-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/mark-order-process-shipping-label-printed/mark-4-1024x32-1.png",
        "alt": "Mark-Order-step4"
      }
    ],
    "kind": "macro",
    "slug": "mark-order-process-shipping-label-printed",
    "label": "Mark Order Process Shipping Label Printed",
    "seoTitle": "Mark Order Process Shipping Label Printed",
    "description": "Automatically mark Linnworks orders as &quot;Shipping Label Printed&quot; with Rishvi Ltd&#039;s macro, for accurate status updates and faster order processing."
  },
  {
    "title": "Auto Archive Inventory",
    "headline": "RIS-SM-1033 Auto Archive Inventory",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > AutoArchiveInventory > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “AutoArchiveInventory” macro automates the process of archiving inventory items within the system based on a specified suffix or prefix. This functionality helps streamline inventory management by automatically categorizing and organizing items for archival purposes.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/auto-archive-inventory/data-archive-and-records-management-in-Pakistan.jpg",
        "alt": "Auto Archive Inventory 2",
        "w": "960",
        "h": "638"
      },
      {
        "src": "assest/linnworks/auto-archive-inventory/file-storage.webp",
        "alt": "Auto Archive Inventory",
        "w": "1280",
        "h": "667"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Parameter Input",
            "paras": [
              "Suffix Or Prefix: Specifies whether the items to be archived should have a particular suffix or prefix in their names."
            ],
            "items": []
          },
          {
            "title": "Rules Engine Integration",
            "paras": [
              "Seamlessly integrates with the Rules Engine, enabling it to be invoked based on predefined conditions or scheduled intervals."
            ],
            "items": []
          },
          {
            "title": "Inventory Archiving",
            "paras": [
              "1. Automatically identifies inventory items that match the specified suffix or prefix. 2. Archives these items to streamline inventory management and declutter the active inventory list."
            ],
            "items": []
          },
          {
            "title": "Logging and Error Handling",
            "paras": [
              "Implements logging mechanisms to record actions for transparency and facilitate troubleshooting in case of errors."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "suffixOrPrefix: Specifies whether the items to be archived should have a particular suffix or prefix in their names."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. Execute the macro within the Rules Engine interface. 2. Trigger the inventory archiving process manually or schedule it to run at specified intervals."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. Automatically archives inventory items based on the specified suffix or prefix, decluttering the active inventory list. 2. Improves inventory management efficiency by organizing items for archival purposes. 3. Provides confirmation upon completion of the archiving process and delivers any pertinent status updates or notifications."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro"
    },
    "steps": [
      {
        "title": "Once the AutoArchiveInventory app is installed:",
        "notes": [],
        "image": null,
        "alt": ""
      },
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-archive-inventory/image-17.avif",
        "alt": "Auto-Inventory-step1"
      },
      {
        "title": "Select the AutoArchiveInventory macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-archive-inventory/image-18.avif",
        "alt": "Auto-Inventory-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/auto-archive-inventory/Capture3.png",
        "alt": "Auto-Inventory-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-archive-inventory/Capture4.png",
        "alt": "Auto-Inventory-step4"
      }
    ],
    "kind": "macro",
    "slug": "auto-archive-inventory",
    "label": "Auto Archive Inventory",
    "seoTitle": "Auto Archive Inventory Linnworks Macro | Rishvi Ltd",
    "description": "Rishvi Ltd offers Auto Archive Inventory solutions to automate the process of archiving inactive or outdated inventory."
  },
  {
    "title": "Reduce Item's Discount",
    "headline": "RIS-SM-1015 Reduce Item’s Discount",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > Reduce Item's Discount > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “Reduce Item’s Discount” is a macro that runs as an action of the Rules Engine. This macro allows for the manual reduction of discounts by a specified value provided by the client. This macro facilitates the modification of discounts for items in the item line of order with a 100% discount applied.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/reduce-items-discount/discount-clothes-lede.jpg",
        "alt": "Reduce Item's Discount",
        "w": "2123",
        "h": "1412"
      },
      {
        "src": "assest/linnworks/reduce-items-discount/discount-offers.png",
        "alt": "Reduce Item's Discount 2",
        "w": "600",
        "h": "400"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Discount Application",
            "paras": [
              "1. Iterates through specified orders and evaluates each order item’s value. 2. Applies a discount to order items with a value of zero and a 100% discount already applied."
            ],
            "items": []
          },
          {
            "title": "Discount Calculation",
            "paras": [
              "Calculates the discount value based on the provided discount percentage."
            ],
            "items": []
          },
          {
            "title": "Order Item Update",
            "paras": [
              "Updates order items with the newly applied discounts to reflect the changes in pricing."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Input Parameters",
            "paras": [
              "1. OrderIds: Array of order IDs to process. 2. discountValue: The discount percentage to apply to order items with a value of zero."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "Call the macro with the desired order IDs and discount value to initiate the discount application process."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. The macro evaluates each order and applies discounts to qualifying order items as specified by the provided parameters. 2. Order items with a value of zero and a 100% discount applied are updated with the new discount value."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the Reduce Item’s Discount app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/reduce-items-discount/DISC-1.png",
        "alt": "Reduce-Discount-step1"
      },
      {
        "title": "Select the Reduce Item’s Discount macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/reduce-items-discount/DISC-2-1024x451-1.png",
        "alt": "Reduce-Discount-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/reduce-items-discount/DISC-3.png",
        "alt": "Reduce-Discount-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/reduce-items-discount/Screenshot-2024-02-16-232940.png",
        "alt": "Reduce-Discount-step4"
      }
    ],
    "kind": "macro",
    "slug": "reduce-items-discount",
    "label": "Reduce Item's Discount",
    "seoTitle": "Reduce Item&#039;s Discount Linnworks Macro | Rishvi Ltd",
    "description": "Rishvi Ltd offers solutions to efficiently reduce item&#039;s discount, allowing for precise adjustments and better discount management."
  },
  {
    "title": "IOSS Note",
    "headline": "RIS-RM-1028 IOSS Note",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > IOSS Note > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The IOSS Note macro is designed to streamline the process of adding notes to open orders based on the presence of specific extended properties related to IOSS (Import One Stop Shop). It checks whether an open order has an extended property associated with IOSS or containing a number. If the condition is met, the macro concatenates a note and saves it as a note for that order.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/ioss-note/bayonne-france-circa-january-notes-app-icon-apple-iphone-screen-notes-app-icon-apple-iphone-screen-206938138.webp",
        "alt": "IOSS Note 2",
        "w": "800",
        "h": "640"
      },
      {
        "src": "assest/linnworks/ioss-note/1092644.jpg",
        "alt": "Customization Apps 2",
        "w": "1600",
        "h": "1067"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Parameter Input",
            "paras": [
              "OrderIds: List of OrderIds for which the IOSS note needs to be checked and potentially added."
            ],
            "items": []
          },
          {
            "title": "Rules Engine Integration",
            "paras": [
              "The macro operates within a rules engine environment, enabling scheduled checks or event-triggered actions based on specified criteria."
            ],
            "items": []
          },
          {
            "title": "Note Concatenation",
            "paras": [
              "1. It scans each order in the provided list to check for the presence of an order extended property related to IOSS or containing a number. 2. If such a property is found, the macro generates a note containing relevant information."
            ],
            "items": []
          },
          {
            "title": "Note Saving",
            "paras": [
              "After creating the note, the macro saves it as a note for the corresponding order."
            ],
            "items": []
          },
          {
            "title": "Logging and Error Handling",
            "paras": [
              "The macro includes logging mechanisms to track its actions and handle any errors encountered during the process."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "OrderIds: List of OrderIds for which the presence of IOSS-related extended properties needs to be checked."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. The macro is executed within a rules engine environment, either scheduled to run at specific intervals or triggered by predefined events. 2. It takes the list of OrderIds as input and processes each order sequentially. 3. For each order, it checks for the presence of IOSS-related extended properties and generates a note accordingly. 4. The note is then saved for the corresponding order."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. Orders with relevant IOSS-related extended properties have notes appended to them, providing additional context or information for further processing. 2. The macro enhances the efficiency of order management processes by automatically adding notes based on specific criteria, reducing manual effort and potential oversights."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "There are three steps you need to complete to start using the macro:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/ioss-note/ioss-note-1-1024x276-1.png",
        "alt": "IOSS-Notes-step1"
      },
      {
        "title": "Select the IOSS Note macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/ioss-note/IOSS-2-1024x413-1.png",
        "alt": "IOSS-Notes-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/ioss-note/IOSS-3-1024x647-1.png",
        "alt": "IOSS-Notes-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/ioss-note/IOSS-4-1024x30-1.png",
        "alt": "IOSS-Notes-step4"
      }
    ],
    "kind": "macro",
    "slug": "ioss-note",
    "label": "IOSS Note",
    "seoTitle": "IOSS Note Linnworks Macro | Rishvi Ltd",
    "description": "Rishvi Ltd provides essential information and guidance on IOSS notes, helping businesses comply with IOSS regulations."
  },
  {
    "title": "Auto File Manifest",
    "headline": "RIS-SM-2040 Auto File Manifest",
    "eyebrow": "",
    "introLines": [
      "1. Go to Apps > Application Store > AutoFileManifest > click Install and follow the on-screen instructions until the installation is complete.",
      "2. Configure the macro.",
      "3. Configure the rule in the Rules Engine screen."
    ],
    "introParas": [
      "The “AutoFileManifest” macro automates the process of filing manifests for shipping accounts integrated with Linnworks. It enables seamless generation of manifests and facilitates email notifications with manifest attachments to designated recipients.",
      "There are three steps you need to complete to start using the macro:"
    ],
    "images": [
      {
        "src": "assest/linnworks/auto-file-manifest/data-archive-and-records-management-in-Pakistan.jpg",
        "alt": "Auto Archive Inventory 2",
        "w": "960",
        "h": "638"
      },
      {
        "src": "assest/linnworks/auto-file-manifest/file-storage.webp",
        "alt": "Auto Archive Inventory",
        "w": "1280",
        "h": "667"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive functionality designed for efficiency and ease of use"
        ],
        "items": [],
        "groups": [
          {
            "title": "Manifest Filing",
            "paras": [
              "1. Retrieves a list of shipping accounts from Linnworks. 2. For each account, initiates the filing of a manifest via the Linnworks API. 3. Monitors manifest status and ensures pending manifests are processed."
            ],
            "items": []
          },
          {
            "title": "Email Notification",
            "paras": [
              "1. Generates a PDF label for each successfully filed manifest. 2. Sends an email notification to the specified recipient containing the manifest PDF attachment. 3. Handles errors gracefully and logs progress for monitoring purposes."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Parameters",
            "paras": [
              "1. Vendor: Identifier for the shipping service provider. 2. AccountId: Unique identifier for the shipping account within Linnworks. 3. email: Email address of the recipient for notification."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "1. Configuration - Set up the email server details (ServerName, port, username, password, useSSL) within the code. - Ensure the Linnworks API endpoint (https://eu-ext.linnworks.net/api/ShippingService/) is accessible and authorized. 2. Scheduling - Configure the macro to run on a predefined schedule using a rules engine or scheduling mechanism. 3. Execution - At the scheduled time, the macro automatically triggers the Execute method. - The method fetches shipping account information from Linnworks. - For each account, it attempts to file a manifest using the ApiPost method. - Upon successful filing, it generates a PDF label for the manifest."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "1. The macro ensures timely filing of manifests for all configured shipping accounts. 2. Email notifications are sent to the specified recipient, containing the manifest PDF attachments. 3. Logs are maintained to track the progress and handle any errors encountered during execution."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the AutoFileManifest app is installed:"
    },
    "steps": [
      {
        "title": "Go to Apps > Macro Configuration and click + Add new configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-file-manifest/automap-1.png",
        "alt": "Auto-Manifest-step1"
      },
      {
        "title": "Select the AutoFileManifest macro and click Create Configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-file-manifest/2.png",
        "alt": "Auto-Manifest-step2"
      },
      {
        "title": "In the Macro Configuration screen, specify the below details and click Save:",
        "notes": [],
        "image": "assest/linnworks/auto-file-manifest/spaces_8F9q54HvUwEItWYCPOkm_uploads_GeREapEvCEna0KXu5nVH_Capture2.webp",
        "alt": "Auto-Manifest-step3"
      },
      {
        "title": "Make sure to enable the macro to continue with the Rules Engine configuration.",
        "notes": [],
        "image": "assest/linnworks/auto-file-manifest/Capture3-1.png",
        "alt": "Auto-Manifest-step4"
      }
    ],
    "kind": "macro",
    "slug": "auto-file-manifest",
    "label": "Auto File Manifest",
    "seoTitle": "Auto File Manifest | Automated Manifest Solutions by Rishvi Ltd",
    "description": "Rishvi Ltd provides Auto File Manifest solutions to automate the process of filing shipment manifests, ensuring accuracy and efficiency."
  },
  {
    "title": "Amazon Customisation",
    "headline": "Seamless Order Personalisation Automation with Amazon Customisation by Rishvi Ltd",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "At Rishvi Ltd, our certified Linnworks automation experts help you manage personalised Amazon orders effortlessly.",
      "Our Amazon Customisation Macro automatically fetches customisation details from Amazon XML, checks eligibility, extracts relevant data, and saves it to Linnworks order notes — ensuring your fulfilment team never misses a customer-specific instruction.",
      "With over a decade of Linnworks expertise, Rishvi Ltd enables ecommerce businesses to simplify complex order processing and deliver a precise, personalised experience."
    ],
    "images": [
      {
        "src": "assest/linnworks/amazon-customisation/Amazon-Customisation.webp",
        "alt": "",
        "w": "1024",
        "h": "1024"
      }
    ],
    "sections": [
      {
        "eyebrow": "Key Functionalities",
        "title": "Key Functionalities Powered by Amazon Customisation Automation",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Order Validation",
            "paras": [
              "Automatically checks incoming orders for Amazon channel origin and the presence of customisation fields."
            ],
            "items": []
          },
          {
            "title": "Customisation Extraction from XML",
            "paras": [
              "Parses Amazon XML data to retrieve personalised text, options, or gift messages provided by the customer."
            ],
            "items": []
          },
          {
            "title": "Automation-Based Parsing",
            "paras": [
              "Processes the extracted details using robust logic to convert XML into readable and usable information."
            ],
            "items": []
          },
          {
            "title": "Save to Linnworks Order Notes",
            "paras": [
              "Automatically attaches the customisation details to the corresponding Linnworks order as internal notes — visible to fulfilment teams for packing or printing."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Benefits",
        "title": "Why Choose Amazon Customisation Integration by Rishvi Ltd?",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Hands-Free Custom Order Handling",
            "paras": [
              "No more manual checks or copy-pasting from Amazon — everything is fetched and stored automatically."
            ],
            "items": []
          },
          {
            "title": "Improved Fulfilment Accuracy",
            "paras": [
              "Reduce miscommunication and errors in processing personalised items."
            ],
            "items": []
          },
          {
            "title": "Operational Efficiency",
            "paras": [
              "Save time for your operations team by integrating automation where it matters most."
            ],
            "items": []
          },
          {
            "title": "Better Customer Satisfaction",
            "paras": [
              "Deliver exactly what the customer expects — boosting brand loyalty and reducing returns."
            ],
            "items": []
          }
        ],
        "images": [
          {
            "src": "assest/linnworks/amazon-customisation/Amazon-Customisation-1.webp",
            "alt": ""
          }
        ],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "macro",
    "slug": "amazon-customisation",
    "label": "Amazon Customisation",
    "seoTitle": "Amazon Customisation Automation for Linnworks Orders | Rishvi Ltd",
    "description": "Automatically extract and sync Amazon customisation details into Linnworks order notes using Rishvi Ltd&#039;s automation macro."
  },
  {
    "title": "Order Address Character Replacement",
    "headline": "Prevent Shipping Errors with Order Address Character Replacement Automation",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "At Rishvi Ltd, we’ve developed a smart automation macro for Linnworks that scans open orders and replaces unsupported characters in address lines with valid alternatives.",
      "This tool is essential for preventing label printing failures caused by special or non-standard characters, ensuring smooth despatch across all couriers and platforms.",
      "Customizable to your requirements, the macro allows you to define which characters to remove or replace — ensuring flexibility and control over your order data."
    ],
    "images": [
      {
        "src": "assest/linnworks/order-address-character-replacement/Order-Address-Character-Replacement-3.webp",
        "alt": "",
        "w": "1130",
        "h": "615"
      },
      {
        "src": "assest/linnworks/order-address-character-replacement/Order-Address-Character-Replacement.webp",
        "alt": "",
        "w": "860",
        "h": "394"
      }
    ],
    "sections": [
      {
        "eyebrow": "Key Functionalities",
        "title": "Key Functionalities of the Address Character Replacement Macro",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Scan All Address Lines in Open Orders",
            "paras": [
              "Automatically reviews address fields (Line 1, Line 2, City, Region, etc.) in all open orders within Linnworks."
            ],
            "items": []
          },
          {
            "title": "Prevents Label Printing Failures",
            "paras": [
              "Avoid courier label generation issues by ensuring clean and valid address data before despatch."
            ],
            "items": []
          },
          {
            "title": "Replace or Remove Unsupported Characters",
            "paras": [
              "Replaces predefined unsupported characters (e.g., ©, ®, ñ, /, &, etc.) with safe alphabetic equivalents or removes them altogether."
            ],
            "items": []
          },
          {
            "title": "Custom Character List by Parameter",
            "paras": [
              "Easily manage the list of characters to target — add or remove based on marketplace or courier label standards."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Benefits",
        "title": "Why Use Order Address Replacement by Rishvi Ltd?",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Reduces Fulfilment Delays",
            "paras": [
              "Fixes potential address issues before they cause disruptions in the shipping process."
            ],
            "items": []
          },
          {
            "title": "Fully Customizable Logic",
            "paras": [
              "You decide what gets replaced or removed, with parameters tailored to your shipping partner’s rules."
            ],
            "items": []
          },
          {
            "title": "Automation That Saves Time",
            "paras": [
              "Eliminate the need to manually correct address formatting errors — let the macro handle it automatically."
            ],
            "items": []
          },
          {
            "title": "Better Shipping Success Rates",
            "paras": [
              "Ensure more labels get printed correctly, especially for carriers with strict formatting requirements."
            ],
            "items": []
          }
        ],
        "images": [
          {
            "src": "assest/linnworks/order-address-character-replacement/Order-Address-Character-Replacement-1.webp",
            "alt": ""
          }
        ],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "macro",
    "slug": "order-address-character-replacement",
    "label": "Order Address Character Replacement",
    "seoTitle": "Order Address Character Replacement Macro for Linnworks",
    "description": "Order Address Character Replacement automatically replaces unsupported characters in open order addresses in Linnworks to prevent label printing errors."
  },
  {
    "title": "HyperShip AI",
    "headline": "HyperShip AI Packaging Optimisation for Linnworks",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "HyperShip AI is an intelligent packaging optimisation solution for Linnworks, powered by Rishvi AI. It automatically analyses each order to determine the most efficient and cost-effective way to package and ship it.",
      "The system retrieves SKU dimensions and weights, applies carrier-specific constraints, and calculates complete shipping costs including volumetric weight, fuel surcharges, oversize thresholds, and multi-parcel pricing. It simulates multiple packaging scenarios across configured carriers to identify the most suitable and compliant shipping option.",
      "Based on the optimised result, HyperShip AI can split orders into multiple parcels, apply packaging overrides where necessary, assign the best-fit carrier, and update Linnworks with relevant tracking notes all with minimal manual intervention.",
      "HyperShip AI helps reduce shipping costs, improve fulfilment accuracy, and automate carrier selection directly within Linnworks."
    ],
    "images": [
      {
        "src": "assest/linnworks/hypership-ai/ecommerce-automation-hero-1.webp",
        "alt": "",
        "w": "1024",
        "h": "683"
      },
      {
        "src": "assest/linnworks/hypership-ai/Warehouse-picking-software.webp",
        "alt": "HyperShip AI Packaging Optimisation for Linnworks",
        "w": "1200",
        "h": "800"
      }
    ],
    "sections": [
      {
        "eyebrow": "Functionality",
        "title": "Our Powerful Functionality",
        "paras": [
          "Comprehensive optimisation designed for automation, cost reduction, and fulfilment accuracy."
        ],
        "items": [],
        "groups": [
          {
            "title": "Intelligent Packaging Optimisation",
            "paras": [
              "Automatically analyses order items using SKU dimensions and weight to determine the most efficient packaging configuration."
            ],
            "items": []
          },
          {
            "title": "Carrier Constraint Application",
            "paras": [
              "Applies carrier-specific rules including dimension limits, weight thresholds, volumetric calculations, and surcharge structures."
            ],
            "items": []
          },
          {
            "title": "Cost Simulation Engine",
            "paras": [
              "Simulates multiple packaging scenarios across configured carriers to identify the most cost-effective shipping option."
            ],
            "items": []
          },
          {
            "title": "Multi-Parcel Order Handling",
            "paras": [
              "Automatically splits orders into multiple parcels when required to maintain compliance and optimise cost."
            ],
            "items": []
          },
          {
            "title": "Best-Fit Carrier Assignment",
            "paras": [
              "Selects and assigns the most suitable carrier based on optimisation results and configured rules."
            ],
            "items": []
          },
          {
            "title": "Linnworks Order Updates",
            "paras": [
              "Updates orders with selected carrier details, packaging decisions, overrides, and tracking notes automatically."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Usage",
        "title": "Usage of App",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Input Parameters (In Sequential Order):",
            "paras": [
              "HyperShip AI is triggered through the Linnworks Rules Engine to automatically analyse orders and determine the most cost-effective packaging and carrier selection."
            ],
            "items": []
          },
          {
            "title": "Execution",
            "paras": [
              "Call the HyperShip AI macro through the Rules Engine with the required OrderIds to initiate the automated packaging optimisation and carrier selection process."
            ],
            "items": []
          },
          {
            "title": "Outcome",
            "paras": [
              "The macro analyses each specified order using SKU dimensions and weight data, applies configured carrier constraints and cost parameters, determines the most efficient packaging configuration, assigns the optimal carrier, and updates the order in Linnworks with the final shipping details."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once HyperShip AI is installed:"
    },
    "steps": [
      {
        "title": "Access Macro Configuration",
        "notes": [
          "Go to Apps and open Macro Configuration to manage and create new HyperShip AI configurations."
        ],
        "image": "assest/linnworks/hypership-ai/image-2-1.webp",
        "alt": "HyperShip AI step 1"
      },
      {
        "title": "Create New Configuration",
        "notes": [
          "Click “Add New Configuration” and select HyperShip AI from the available applications."
        ],
        "image": "assest/linnworks/hypership-ai/image-3-1.webp",
        "alt": "HyperShip AI step 2"
      },
      {
        "title": "Configure Optimisation Settings",
        "notes": [
          "Enter carrier rules, cost parameters, packaging logic, and required configuration details."
        ],
        "image": "assest/linnworks/hypership-ai/image-4-1.webp",
        "alt": "HyperShip AI step 3"
      },
      {
        "title": "Save and Enable",
        "notes": [
          "Save the configuration and enable it to activate automated packaging optimisation within Linnworks."
        ],
        "image": "assest/linnworks/hypership-ai/image-5-1.webp",
        "alt": "HyperShip AI step 4"
      }
    ],
    "kind": "macro",
    "slug": "hypership-ai",
    "label": "HyperShip AI",
    "seoTitle": "HyperShip AI: AI Shipping Automation | Rishvi Ltd",
    "description": "HyperShip AI optimises packaging for Linnworks: automated carrier selection, cost simulation and multi-parcel shipping to cut costs."
  },
  {
    "title": "Order Invoice Printing History",
    "headline": "RIS-SC-1001 Order Invoice Printing History",
    "eyebrow": "",
    "introLines": [
      "1. Select the Order Invoice Printing History report in the Query type drop-down menu.",
      "2. Click the calendar icon to select From and To dates.",
      "3. Click the Generate Report button.",
      "4. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about orders where an invoice has been printed within a specific time range. It includes the order ID, history note, timestamp of the action, and the user.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/order-invoice-printing-history/featured-image-3.jpg",
        "alt": "Order Invoice Printing History",
        "w": "2000",
        "h": "1333"
      },
      {
        "src": "assest/linnworks/order-invoice-printing-history/featured-image-6.jpg",
        "alt": "Order Invoice Printing History 2",
        "w": "2000",
        "h": "1333"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "nOrderId",
            "The ID of the order."
          ],
          [
            "HistoryNote",
            "Notes or comments associated with the order's history."
          ],
          [
            "DateStamp",
            "Timestamp of the action (when the invoice was printed)."
          ],
          [
            "UpdatedBy",
            "User who updated the order."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @fromDate: Specifies the start date and time from which the query should retrieve data. The default value is '2022/11/07 00:00:00.000'.",
          "2. @toDate: Specifies the end date and time until which the query should retrieve data. The default value is '2022/11/07 18:00:00.000'."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches order details where an invoice has been printed between the specified start and end dates. It provides essential information such as the order ID, relevant notes, timestamp of the action, and the user responsible for updating the order. The data retrieved can be useful for tracking invoice printing activities within a given time frame."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "order-invoice-printing-history",
    "label": "Order Invoice Printing History",
    "seoTitle": "Order Invoice Printing History",
    "description": "Rishvi Ltd provides a comprehensive overview of order invoice printing history, offering detailed records of all printed invoices."
  },
  {
    "title": "Sales By Sub Source Channels",
    "headline": "RIS-SC-1002 Sales By Sub Source Channels",
    "eyebrow": "",
    "introLines": [
      "1. Select the Sales By Sub Source Channels report in the Query type drop-down menu.",
      "2. Click the calendar icon to select Start and End dates.",
      "3. Click the Generate Report button.",
      "4. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves stock item information with their associated images and quantities for a specified date range. It pivots the data based on the sub-source of the items. The image URLs are constructed dynamically using the item’s image ID and a hash of the database name.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/sales-by-sub-source-channels/images-1.jpg",
        "alt": "Sales By Sub Source Channels",
        "w": "318",
        "h": "159"
      },
      {
        "src": "assest/linnworks/sales-by-sub-source-channels/1540907517917.jpg",
        "alt": "Sales By Sub Source Channels 2",
        "w": "600",
        "h": "396"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Image",
            "URL of the stock item's image."
          ],
          [
            "Product Type",
            "Type of the product."
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "Title",
            "Title or name of the item."
          ],
          [
            "InStock",
            "Quantity of the item in stock."
          ],
          [
            "[Subsource]",
            "Quantities of the item for each sub-source."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @startDate: Specifies the start date of the date range. The default value is ’01 Sep 2020′.",
          "2. @endDate: Specifies the end date of the date range. The default value is ’20 Sep 2020′."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query retrieves detailed information about stock items including their images, product types, SKUs, titles, and quantities in stock within a specified date range. It dynamically constructs image URLs using a hash of the database name and the item’s image ID. The data is pivoted based on sub-sources, providing a comprehensive view of stock quantities across different sources."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "sales-by-sub-source-channels",
    "label": "Sales By Sub Source Channels",
    "seoTitle": "Sales by Sub Source Channels",
    "description": "Rishvi Ltd provides detailed analysis of sales by sub source channels, offering insights into performance across different channels."
  },
  {
    "title": "Channel Inventory Report by Location",
    "headline": "RIS-SC-1004 Channel Inventory Report by Location",
    "eyebrow": "",
    "introLines": [
      "1. Select the Channel Inventory Report by Location in the Query type drop-down menu.",
      "2. Select your subsource,Source,Name from the dropdown.",
      "3. Click the Generate Report button.",
      "4. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves inventory information for items based on specified parameters such as source, subsource, and location. It fetches data including Linnworks SKU, barcode number, channel SKU, channel title, channel reference ID, price, fulfillment network, and quantity.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/channel-inventory-report-by-location/iStock-1049186608-1.jpg",
        "alt": "Channel Inventory Report by Location",
        "w": "1600",
        "h": "1068"
      },
      {
        "src": "assest/linnworks/channel-inventory-report-by-location/Top-8-Benefits-of-a-Warehouse-Management-System.png",
        "alt": "Channel Inventory Report by Location 2",
        "w": "600",
        "h": "450"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "LW SKU",
            "The SKU of the item in Linnworks."
          ],
          [
            "Barcode Number",
            "The barcode number associated with the item."
          ],
          [
            "Channel SKU",
            "The SKU of the item on the channel."
          ],
          [
            "Channel Title",
            "The title of the item on the channel."
          ],
          [
            "Channel Reference Id",
            "The reference ID of the item on the channel."
          ],
          [
            "Price",
            "The price of the item."
          ],
          [
            "Fulfillment Network",
            "The fulfillment network of the item."
          ],
          [
            "Quantity",
            "The quantity of the item in stock."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @Subsource: The subsource parameter for filtering inventory items.",
          "2. @Source: The source parameter for filtering inventory items.",
          "3. @Name: The name parameter for filtering inventory items."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query retrieves inventory information for items based on specified parameters such as source, subsource, and location. It fetches data including Linnworks SKU, barcode number, channel SKU, channel title, channel reference ID, price, fulfillment network, and quantity. The results are ordered by quantity in descending order."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "channel-inventory-report-by-location",
    "label": "Channel Inventory Report by Location",
    "seoTitle": "Channel Inventory Report by Location",
    "description": "Rishvi Ltd&#039;s Channel Inventory Report by Location gives you precise data on how your inventory is distributed across locations."
  },
  {
    "title": "Multi-Channel Price Comparison",
    "headline": "RIS-SC-1005 Multi-Channel Price Comparison",
    "eyebrow": "",
    "introLines": [
      "1. Select the Multi-Channel Price Comparison report in the Query type drop-down menu.",
      "2. Write your Amazon, eBay, Etsy, and Website links in the textbox.",
      "3. Click the Generate Report button.",
      "4. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query compares prices of products listed on different channels (Amazon, eBay, Etsy, and a website) for a given keyword. It determines which channel offers the cheapest price for each product and provides comments based on the price comparisons.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/multi-channel-price-comparison-description/voodoo_big.jpg",
        "alt": "Multi-Channel Price Comparison Description 3",
        "w": "800",
        "h": "600"
      },
      {
        "src": "assest/linnworks/multi-channel-price-comparison-description/price-comparison-apps.avif",
        "alt": "Multi-Channel Price Comparison Description 2",
        "w": "1680",
        "h": "840"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "LWSKU",
            "Stock Keeping Unit (SKU) from Linnworks."
          ],
          [
            "ItemTitle",
            "Title of the item."
          ],
          [
            "BarcodeNumber",
            "Barcode number of the item."
          ],
          [
            "Amazon1.Price",
            "Price of the item on Amazon."
          ],
          [
            "Ebay1.Price",
            "Price of the item on eBay."
          ],
          [
            "Website.Price",
            "Price of the item on the website."
          ],
          [
            "Etsy1.Price",
            "Price of the item on Etsy."
          ],
          [
            "Comments",
            "Comment indicating the channel with the cheapest price for each item."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @Amazon1: Specifies the sub-source for Amazon.",
          "2. @Ebay1: Specifies the sub-source for eBay.",
          "3. @Etsy1: Specifies the sub-source for Etsy.",
          "4. @keyWord: Allows partial trailing match for an SKU to search for specific products."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query retrieves price information for products listed on different channels and compares them to determine the channel offering the cheapest price for each product. It allows searching for products based on a keyword and provides comments indicating which channel has the best price. The data can be useful for pricing strategy and competitive analysis across multiple sales channels."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "multi-channel-price-comparison-description",
    "label": "Multi-Channel Price Comparison Description",
    "seoTitle": "Multi-Channel Price Comparison",
    "description": "Rishvi Ltd offers multi-channel price comparison services to analyze and compare prices across various sales channels."
  },
  {
    "title": "Stock Item Dimensions and Packaging",
    "headline": "RIS-SC-1006 Stock Item Dimensions and Packaging",
    "eyebrow": "",
    "introLines": [
      "1. Select the Amazon Channel Linking Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about stock items including their SKU, dimensions (depth, width, height), weight, packaging group name, and bin rack number. It filters out composite items and selects only active items from the default location.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/stock-item-dimensions-and-packaging/71870864-deliveryman-standing-in-room-glue-tape-box-and-takes-parcel-in-hands-and-smiling-postman-european.jpg",
        "alt": "Stock Item Dimensions and Packaging 2",
        "w": "450",
        "h": "300"
      },
      {
        "src": "assest/linnworks/stock-item-dimensions-and-packaging/SCB07168-scaled-1.jpg",
        "alt": "Stock Item Dimensions and Packaging",
        "w": "2560",
        "h": "1707"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "DimDepth",
            "Depth dimension of the item."
          ],
          [
            "DimWidth",
            "Width dimension of the item."
          ],
          [
            "DimHeight",
            "Height dimension of the item."
          ],
          [
            "Weight",
            "Weight of the item."
          ],
          [
            "PackagingGroupName",
            "Name of the packaging group."
          ],
          [
            "BinRackNumber",
            "Bin rack number where the item is stored."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches details of stock items, including their dimensions, weight, packaging group name, and storage location. It excludes composite items and retrieves only active items from the default location. The data can be useful for inventory management and tracking stock item characteristics."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "stock-item-dimensions-and-packaging",
    "label": "Stock Item Dimensions and Packaging",
    "seoTitle": "Stock Item Dimensions and Packaging",
    "description": "Rishvi Ltd provides detailed information on stock item dimensions and packaging, ensuring accurate and efficient inventory management."
  },
  {
    "title": "Ebay Orders with Item Details",
    "headline": "RIS-SC-1007 Ebay Orders with Item Details",
    "eyebrow": "",
    "introLines": [
      "1. Select the Ebay Orders with Item Details Report in the Query type drop-down menu.",
      "2. Click the calendar icon to select From and To dates.",
      "3. Click the Generate Report button.",
      "4. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves order details from the database for eBay transactions within a specified date range. It includes information such as order IDs, order dates, processed dates, buyer details, shipping information, line item details, and associated tags.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/ebay-orders-with-item-details/5dc98c3a3afd3716e56fa9a6.webp",
        "alt": "Ebay Orders with Item Details",
        "w": "1211",
        "h": "885"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Linnworks OrderId",
            "Linnworks-specific order ID"
          ],
          [
            "Channel OrderId",
            "Channel-specific order ID (e.g., eBay)"
          ],
          [
            "Ebay.SiteID",
            "eBay site ID (if available in XML)"
          ],
          [
            "Ebay.ItemNumber",
            "eBay item number (if available in XML)"
          ],
          [
            "Order Date",
            "Date when the order was placed"
          ],
          [
            "Processed Date",
            "Date when the order was processed"
          ],
          [
            "Source",
            "Source of the order (e.g., eBay)"
          ],
          [
            "Subsource",
            "Subsource of the order (e.g., eBay1)"
          ],
          [
            "Order Total",
            "Total charge of the order"
          ],
          [
            "Tax",
            "Tax amount applied to the order"
          ],
          [
            "Currency",
            "Currency used for the order"
          ],
          [
            "Tax Rate",
            "Tax rate applicable to the order"
          ],
          [
            "Full Name",
            "Buyer's full name"
          ],
          [
            "Address Line 1",
            "First line of the buyer's address"
          ],
          [
            "Address Line 2",
            "Second line of the buyer's address"
          ],
          [
            "Address Line 3",
            "Third line of the buyer's address"
          ],
          [
            "City",
            "City of the buyer's address"
          ],
          [
            "Post Code",
            "Postal code of the buyer's address"
          ],
          [
            "Region",
            "Region of the buyer's address"
          ],
          [
            "Country",
            "Country of the buyer's address"
          ],
          [
            "Contact Number",
            "Buyer's contact number"
          ],
          [
            "Email Address",
            "Buyer's email address"
          ],
          [
            "Buyer Id",
            "Buyer's ID on the channel"
          ],
          [
            "Order Tag",
            "Tag associated with the order (if any)"
          ],
          [
            "Shipping Carrier",
            "Shipping carrier used for the order"
          ],
          [
            "Shipping Service",
            "Shipping service used for the order"
          ],
          [
            "Tracking Number",
            "Tracking number for the order shipment"
          ],
          [
            "Channel SKU",
            "SKU associated with the order on the channel"
          ],
          [
            "Line Item SKU",
            "SKU of the line item in the order"
          ],
          [
            "Line Item Title",
            "Title of the line item in the order"
          ],
          [
            "Line Item Price",
            "Price per unit of the line item"
          ],
          [
            "Postage Cost",
            "Cost of postage for the order"
          ],
          [
            "Line Item Qty",
            "Quantity of the line item ordered"
          ],
          [
            "Barcode",
            "Barcode associated with the line item (if any)"
          ],
          [
            "Bin Rack",
            "Bin rack number associated with the line item"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @startDate: The start date of the order processing period.",
          "2. @endDate: The end date of the order processing period."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query retrieves comprehensive order details for eBay transactions within a specified date range, including order IDs, buyer information, shipping details, and line item specifics. It’s designed to provide a detailed overview of eBay orders processed within the given timeframe."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "ebay-orders-with-item-details",
    "label": "Ebay Orders with Item Details",
    "seoTitle": "Ebay Orders with Item Details",
    "description": "Rishvi Ltd provides detailed reports on eBay orders with item details, offering comprehensive insights into your order data."
  },
  {
    "title": "Product Commodity Codes",
    "headline": "RIS-SC-1008 Product Commodity Codes",
    "eyebrow": "",
    "introLines": [
      "1. Select the Product Commodity Codes Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves the SKU (ItemNumber) and Commodity Code for stock items that match certain criteria. It joins the StockItem table with the Stockitem_ExtendedProperties table to retrieve the Commodity Code associated with each stock item.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/product-commodity-codes/beeld-internationaal-importeren-dit-zijn-hs-codes-en-zo-zoek-je-ze-op.jpg",
        "alt": "Product Commodity Codes 2",
        "w": "1920",
        "h": "1080"
      },
      {
        "src": "assest/linnworks/product-commodity-codes/com-codes.webp",
        "alt": "Product Commodity Codes",
        "w": "2560",
        "h": "1707"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "SKU",
            "The SKU / Item Number of the stock item."
          ],
          [
            "CommodityCode",
            "The commodity code associated with the stock item."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query selects the ItemNumber (SKU) and CommodityCode from the StockItem table, joined with the Stockitem_ExtendedProperties table to fetch the Commodity Code. It filters the results to include only active and non-archived items with SKU starting with ‘BL-‘ and having a non-null Commodity Code."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "product-commodity-codes",
    "label": "Product Commodity Codes",
    "seoTitle": "Linnworks Product Commodity Codes Report | Rishvi Ltd",
    "description": "Rishvi Ltd provides comprehensive solutions for managing and classifying product commodity codes."
  },
  {
    "title": "Active FBA Inventory Analysis",
    "headline": "RIS-SC-1009 Active FBA Inventory Analysis",
    "eyebrow": "",
    "introLines": [
      "1. Select the Active FBA Inventory Analysis Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about Amazon SKUs from a stock channel, specifically targeting ASINs and various Prime-related attributes. It checks for FBA status and the presence of different Prime templates (Nationwide Prime, SFP Small and Light, and Custom Orders – Prime). Additionally, it fetches the price from the ‘download’ schema based on the provided source and subsource parameters.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/active-fba-inventory-analysis/shipping-to-an-amazon-fba-warehouse-1024x576-1.webp",
        "alt": "Active FBA Inventory Analysis 2",
        "w": "1024",
        "h": "576"
      },
      {
        "src": "assest/linnworks/active-fba-inventory-analysis/Why-Selling-Books-on-Amazon-with-FBA-Justifies-Higher-Price-Points-2.jpg",
        "alt": "Active FBA Inventory Analysis",
        "w": "1240",
        "h": "822"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Amazon.SKU",
            "Amazon SKU (ChannelSKU) of the item."
          ],
          [
            "ASIN",
            "ASIN associated with the item."
          ],
          [
            "FBA ASIN",
            "Indicates whether the item is fulfilled by Amazon (FBA)."
          ],
          [
            "Nationwide Prime",
            "Indicates whether the item is under the 'Nationwide Prime' template."
          ],
          [
            "SFP Small and Light",
            "Indicates whether the item is under the 'SFP Small and Light' template."
          ],
          [
            "Custom Orders - Prime",
            "Indicates whether the item is under the 'Custom Orders - Prime' template."
          ],
          [
            "Amazon.Price",
            "Amazon.Price"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. Source: The source of the items (e.g., ‘Amazon’).",
          "2. Subsource: The subsource of the items (e.g., ‘Trimming Shop’).",
          "3. PrimeTemplate1: The name of the first Prime template.",
          "4. PrimeTemplate2: The name of the second Prime template.",
          "5. PrimeTemplate3: The name of the third Prime template."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches Amazon SKUs from a stock channel, extracting ASINs and various Prime-related attributes. It specifically checks for FBA status and the presence of different Prime templates (Nationwide Prime, SFP Small and Light, and Custom Orders – Prime). Additionally, it retrieves the price of the items from the ‘download’ schema based on the provided source and subsource parameters. The final result includes only items that are FBA ASINs and fall under at least one of the specified Prime templates, ordered by Amazon SKU."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "active-fba-inventory-analysis",
    "label": "Active FBA Inventory Analysis",
    "seoTitle": "Active FBA Inventory Analysis",
    "description": "Rishvi Ltd offers Active FBA Inventory Analysis to optimize fulfillment inventory management."
  },
  {
    "title": "Sales Analysis of Processed Orders",
    "headline": "RIS-SC-1010 Sales Analysis of Processed Orders",
    "eyebrow": "",
    "introLines": [
      "1. Select the Sales Analysis of Processed Orders Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves data related to stock items including their category, SKU, current and minimum levels, units sold, orders, total sales, and bin rack number. It calculates the minimum level as half of the total units sold in the last 6 months. The data is filtered based on certain conditions such as order processing date, composite parent row ID, property name, and company name exclusion.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/sales-analysis-of-processed-orders/Businessperson-hand-analyzing-graph-2-Oct-12-2022-05-33-54-74-PM.webp",
        "alt": "Inventory Sales Analysis by Category",
        "w": "1920",
        "h": "1080"
      },
      {
        "src": "assest/linnworks/sales-analysis-of-processed-orders/guide-to-sales-orders-rossum-intelligent-document-processing.jpg",
        "alt": "Sales Analysis of Processed Orders 2",
        "w": "1200",
        "h": "628"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "RN",
            "Row number within each category ordered by total units sold in descending order."
          ],
          [
            "pCategory",
            "Category of the stock item."
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "Current Level",
            "Current stock level of the item."
          ],
          [
            "Minimum Level",
            "Minimum stock level calculated as half of the total units sold in the last 6 months."
          ],
          [
            "Units Sold in last 6 months",
            "Total units sold in the last 6 months."
          ],
          [
            "Orders in last 6 months",
            "Count of orders containing the item in the last 6 months."
          ],
          [
            "Total Sales in 6 months",
            "Total sales revenue generated by the item in the last 6 months."
          ],
          [
            "BinRackNumber",
            "Bin rack number associated with the item."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query aggregates information about stock items including their category, SKU, current and minimum levels, units sold, orders, total sales, and bin rack number. It calculates the minimum level as half of the total units sold in the last 6 months. The data is filtered based on specific conditions such as the processing date of orders, absence of composite parent row ID, property name (‘pCategory’), and exclusion of certain company names (e.g., ‘Amazon Fulfillment Center’). The result set is grouped by SKU, current level, category, and bin rack number."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "sales-analysis-of-processed-orders",
    "label": "Sales Analysis of Processed Orders",
    "seoTitle": "Sales Analysis of Processed Orders",
    "description": "Rishvi Ltd provides in-depth sales analysis of processed orders, offering detailed insights into sales performance and order processing."
  },
  {
    "title": "Channel Inventory Aggregation by Source and Subsources",
    "headline": "RIS-SC-1012 Channel Inventory Aggregation by Source and Subsources",
    "eyebrow": "",
    "introLines": [
      "1. Select the Channel Inventory Aggregation by Source and Subsources Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves data from the Stock_ChannelList table, including information about linked SKUs, channel titles, listing IDs, and corresponding SKUs from the StockItem table. It allows filtering by source and subsource parameters.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/channel-inventory-aggregation-by-source-and-subsources/social-virtual-warehouse.jpg",
        "alt": "Channel Inventory Aggregation by Source and Subsources",
        "w": "1200",
        "h": "630"
      },
      {
        "src": "assest/linnworks/channel-inventory-aggregation-by-source-and-subsources/18_Dec_2020_virtual-warehouse-728at2x.jpg",
        "alt": "Channel Inventory Aggregation by Source and Subsources 2",
        "w": "2280",
        "h": "1456"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Linked SKU Custom Label",
            "Custom label associated with the linked SKU."
          ],
          [
            "Channel Title",
            "Title of the item on the channel."
          ],
          [
            "Listing Id",
            "ID of the listing on the channel."
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "Source",
            "Source of the item (e.g., 'AMAZON')."
          ],
          [
            "Subsource",
            "Subsource of the item (e.g., 'Trimming Shop', 'Wedding Decor - UK')."
          ],
          [
            "rownum",
            "Row number within the result set."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @Source: The source parameter for filtering inventory items.",
          "2. @SubSource1: The first subsource parameter for filtering inventory items.",
          "3. @SubSource2: The second subsource parameter for filtering inventory items."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query retrieves data from the Stock_ChannelList table, including information about linked SKUs, channel titles, listing IDs, and corresponding SKUs from the StockItem table. It allows filtering by source and subsource parameters, and the result set is grouped by source, subsource, SKU, linked SKU custom label, channel title, listing ID, and row number."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "channel-inventory-aggregation-by-source-and-subsources",
    "label": "Channel Inventory Aggregation by Source and Subsources",
    "seoTitle": "Channel Inventory Aggregation by Source and Subsources",
    "description": "Discover Rishvi Ltd&#039;s channel inventory aggregation services, designed to unify and analyze inventory data from multiple sources and subsources."
  },
  {
    "title": "Ebay Channel Linking Report",
    "headline": "RIS-SC-1013 Ebay Channel Linking Report",
    "eyebrow": "",
    "introLines": [
      "1. Select the Ebay Channel Linking Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves data related to stock items from the Stock_ChannelList table for two different subsources (‘Etsy-TS’ and ‘Etsy-WD’). It selects information such as the linked SKU custom label, channel title, listing ID, SKU, source, and subsource. The data is filtered based on specific conditions related to the source and subsource fields.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/ebay-channel-linking-report/Gear-GL-Podcast-632514200.webp",
        "alt": "Ebay Channel Linking Report",
        "w": "1800",
        "h": "1800"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Linked SKU Custom Label",
            "Custom label associated with the linked SKU."
          ],
          [
            "Channel Title",
            "Title of the item on the channel."
          ],
          [
            "Listing Id",
            "ID of the listing on the channel."
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "Source",
            "Source of the item (always 'ETSY' in this case)."
          ],
          [
            "Subsource",
            "Subsource of the item (e.g., 'Etsy-TS', 'Etsy-WD')."
          ],
          [
            "rownum",
            "Row number within the result set."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @startDate: The start date of the order processing period.",
          "2. @endDate: The end date of the order processing period."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches data from the Stock_ChannelList table for subsources ‘Etsy-TS’ and ‘Etsy-WD’, including information about linked SKU custom labels, channel titles, listing IDs, SKUs, sources, and subsources. The result set is combined using UNION ALL to include data for both subsources. Each row in the result set is assigned a row number ordered by NULL, effectively giving an arbitrary order."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "ebay-channel-linking-report",
    "label": "Ebay Channel Linking Report",
    "seoTitle": "Ebay Channel Linking Report",
    "description": "Rishvi Ltd provides comprehensive eBay channel linking reports, offering detailed insights into your eBay integration and channel connections."
  },
  {
    "title": "Channel Linking Report",
    "headline": "RIS-SC-1015 Channel Linking Report",
    "eyebrow": "",
    "introLines": [
      "1. Select the Channel Linking Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves data related to stock items from the Stock_ChannelList table for two different sources (‘CDISCOUNT’ and ‘MAGENTO’) and their respective subsources. It selects information such as the linked SKU custom label, channel title, listing ID, SKU, source, and subsource. The data is filtered based on specific conditions related to the source and subsource fields.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/channel-linking-report/business-information-report.jpg",
        "alt": "Channel Linking Report 2",
        "w": "1000",
        "h": "563"
      },
      {
        "src": "assest/linnworks/channel-linking-report/writing-report.jpg",
        "alt": "Channel Linking Report",
        "w": "1132",
        "h": "750"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Linked SKU Custom Label",
            "Custom label associated with the linked SKU."
          ],
          [
            "Channel Title",
            "Title of the item on the channel."
          ],
          [
            "Listing Id",
            "ID of the listing on the channel."
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "Source",
            "Source of the item (e.g., 'CDISCOUNT', 'MAGENTO')."
          ],
          [
            "Subsource",
            "Subsource of the item."
          ],
          [
            "rownum",
            "Row number within the result set."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches data from the Stock_ChannelList table for sources ‘CDISCOUNT’ and ‘MAGENTO’, including information about linked SKU custom labels, channel titles, listing IDs, SKUs, sources, and subsources. The result set is combined using UNION ALL to include data for both sources and their respective subsources. Each row in the result set is assigned a row number ordered by NULL, effectively giving an arbitrary order."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "channel-linking-report",
    "label": "Channel Linking Report",
    "seoTitle": "Linnworks Channel Linking Report | Rishvi Ltd",
    "description": "Discover Rishvi Ltd&#039;s channel linking reports, designed to give you a clear view of how your sales channels are linked and interact."
  },
  {
    "title": "SKU Details: Size, Colour, and Quantity",
    "headline": "RIS-SC-1016 SKU Details: Size, Colour, and Quantity",
    "eyebrow": "",
    "introLines": [
      "1. Select the SKU Details: Size, Colour, and Quantity Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about stock items from the StockItem table based on a search parameter for the item number (SKU). It selects columns such as SKU, item title, size, color, and pack/quantity. The query also joins with the Stockitem_ExtendedProperties table to fetch additional properties like size, color, and pack/quantity based on their respective property names.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/sku-details-size-colour-and-quantity/5fe112435e8ad8faa4c3354f_sku_number.jpg",
        "alt": "SKU Details: Size, Colour, and Quantity",
        "w": "1440",
        "h": "1028"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item."
          ],
          [
            "ItemTitle",
            "Title of the item."
          ],
          [
            "Size",
            "Size of the item (if available)."
          ],
          [
            "Colour",
            "Color of the item (if available)."
          ],
          [
            "Pack/Qty",
            "Pack or quantity information of the item (if available)."
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @search: A search parameter used to filter stock items based on their item number (SKU). It is expected to be provided as a string with wildcard characters (%)."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This query fetches data from the StockItem table for items matching a provided search parameter for the item number (SKU). It retrieves additional information such as item title, size, color, and pack/quantity by joining with the Stockitem_ExtendedProperties table based on their respective property names. The results are filtered to exclude logically deleted and archived items and are sorted by SKU."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "sku-details-size-colour-and-quantity",
    "label": "SKU Details: Size, Colour, and Quantity",
    "seoTitle": "SKU Details: Size, Colour, and Quantity",
    "description": "Rishvi Ltd offers detailed SKU Details including size, colour, and quantity."
  },
  {
    "title": "FBA Shipment Task Details",
    "headline": "RIS-SC-1017 FBA Shipment Task Details",
    "eyebrow": "",
    "introLines": [
      "1. Select the FBA Shipment Task Details Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information related to warehouse transfers. It includes details such as transfer name, due date, followers, assignee, and subtasks associated with a specific transfer ID.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/fba-shipment-task-details/amazon-fba-key-metrics-5.jpg",
        "alt": "FBA Shipment Task Details 2",
        "w": "800",
        "h": "500"
      },
      {
        "src": "assest/linnworks/fba-shipment-task-details/dl.beatsnoop.com-1645633126-e1683980494990.jpg",
        "alt": "FBA Shipment Task Details",
        "w": "1024",
        "h": "512"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Name",
            "Name of the transfer or subtask"
          ],
          [
            "Due Date",
            "Due date of the transfer or subtask"
          ],
          [
            "Followers",
            "Email addresses of followers for the transfer"
          ],
          [
            "Assignee",
            "Email address of the assignee responsible"
          ],
          [
            "Subtask Of",
            "Parent transfer ID for subtasks"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @transferId: Unique identifier for the warehouse transfer.",
          "2. @followers: Email addresses of followers for the warehouse transfer.",
          "3. @assignee: Email address of the assignee responsible for the warehouse transfer."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query retrieves detailed information about a warehouse transfer specified by the transfer ID. It includes the transfer name, due date, followers, assignee, and subtasks associated with the transfer. The query provides a comprehensive overview of the transfer and its related tasks."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "fba-shipment-task-details",
    "label": "FBA Shipment Task Details",
    "seoTitle": "FBA Shipment Task Details",
    "description": "Rishvi Ltd offers detailed reports on FBA shipment task details, providing comprehensive insights into your shipment processes."
  },
  {
    "title": "Inventory Sales Analysis by Category",
    "headline": "RIS-SC-1019 Inventory Sales Analysis by Category",
    "eyebrow": "",
    "introLines": [
      "1. Inventory Sales Analysis by Category Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves data related to stock items, including their category, SKU, current and minimum levels, units sold, orders, and total sales within the last 6 months. It utilizes various tables such as StockItem, OrderItem, Order, StockItem_ExtendedProperties, StockLevel, and StockLocation.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/inventory-sales-analysis-by-category/18_Dec_2020_virtual-warehouse-728at2x.jpg",
        "alt": "Channel Inventory Aggregation by Source and Subsources 2",
        "w": "2280",
        "h": "1456"
      },
      {
        "src": "assest/linnworks/inventory-sales-analysis-by-category/Businessperson-hand-analyzing-graph-2-Oct-12-2022-05-33-54-74-PM.webp",
        "alt": "Inventory Sales Analysis by Category",
        "w": "1920",
        "h": "1080"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "RN",
            "Row number over partition by PropertyValue ordered by sum of Quantity sold descending"
          ],
          [
            "pCategory",
            "Category of the stock item"
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item"
          ],
          [
            "Current Level",
            "Current level of the stock item in the default location"
          ],
          [
            "Minimum Level",
            "Minimum level of the stock item (half of units sold in the last 6 months)"
          ],
          [
            "Units Sold in last 6 months",
            "Total units sold for the item in the last 6 months"
          ],
          [
            "Orders in last 6 months",
            "Number of orders containing the item in the last 6 months"
          ],
          [
            "Total Sales in 6 months",
            "Total sales value for the item in the last 6 months"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query provides insights into stock item performance, including its category, SKU, current and minimum levels, units sold, orders, and total sales within the last 6 months. It calculates minimum level as half of the units sold in the last 6 months and retrieves data from various related tables. The query is designed to offer comprehensive analysis of stock item activity over a specified period."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "inventory-sales-analysis-by-category",
    "label": "Inventory Sales Analysis by Category",
    "seoTitle": "Inventory Sales Analysis by Category",
    "description": "Rishvi Ltd provides detailed inventory sales analysis by category, offering insights into sales performance across different inventory categories."
  },
  {
    "title": "SKUs with Invalid Bin Rack in Aisle",
    "headline": "RIS-SC-1020 SKUs with Invalid Bin Rack in Aisle",
    "eyebrow": "",
    "introLines": [
      "1. Select the SKUs with Invalid Bin Rack in Aisle Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves the SKU (Stock Keeping Unit) and corresponding Bin Rack numbers for stock items stored in the inventory. It filters out items with Bin Rack numbers containing ‘A’ but not exactly four characters in length. Additionally, it excludes items that contain composites, are archived, or have been logically deleted.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/skus-with-invalid-bin-rack-in-aisle/Warehouse-bins-after.jpg",
        "alt": "SKUs with Invalid Bin Rack in Aisle",
        "w": "800",
        "h": "600"
      },
      {
        "src": "assest/linnworks/skus-with-invalid-bin-rack-in-aisle/How-to-Choose-a-Fulfillment-Company-When-You-Have-a-High-SKU-Count-1144x763-1.jpg",
        "alt": "SKUs with Invalid Bin Rack in Aisle 2",
        "w": "1144",
        "h": "763"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU) of the item"
          ],
          [
            "BinRack",
            "Bin Rack number associated with the item"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query extracts SKU and Bin Rack number data for stock items from the database. It filters out items based on specific criteria such as Bin Rack number pattern, composite item status, archival status, and logical deletion. The query is designed to provide relevant information about stock items and their storage locations within the inventory."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "skus-with-invalid-bin-rack-in-aisle",
    "label": "SKUs with Invalid Bin Rack in Aisle",
    "seoTitle": "SKUs with Invalid Bin Rack in Aisle",
    "description": "Rishvi Ltd provides solutions for managing SKUs with invalid bin racks in aisles."
  },
  {
    "title": "Retrieve Linked SKUs and Replace",
    "headline": "RIS-SC-1021 Retrieve Linked SKUs and Replace",
    "eyebrow": "",
    "introLines": [
      "1. Select the Retrieve Linked SKUs and Replace Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about stock items, including their old SKU, linked SKU custom label, source, sub-source, and channel reference ID. It also modifies the SKU by replacing ‘CORG’ with ‘ORG’ in the SKU column for items with an ItemNumber starting with ‘oz-sh-corg%’.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/retrieve-linked-skus-and-replace/ecommerce-fulfillment-1024x576-1.webp",
        "alt": "Retrieve Linked SKUs and Replace",
        "w": "1024",
        "h": "576"
      },
      {
        "src": "assest/linnworks/retrieve-linked-skus-and-replace/360_F_586348875_OGgzYy1XRxcjDGM0Po0zYZNLoCTlb0aJ.jpg",
        "alt": "Retrieve Linked SKUs and Replace 2",
        "w": "540",
        "h": "360"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "Old SKU",
            "Original Stock Keeping Unit (SKU)"
          ],
          [
            "Linked SKU Custom Label",
            "Custom label linked to the SKU"
          ],
          [
            "Source",
            "Source of the stock item"
          ],
          [
            "SubSource",
            "Sub-source of the stock item"
          ],
          [
            "ChannelReferenceId",
            "Reference ID associated with the channel"
          ],
          [
            "SKU",
            "Modified Stock Keeping Unit (SKU)"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query retrieves information about stock items and their linked custom labels from the database. It also performs a transformation on the SKU by replacing ‘CORG’ with ‘ORG’ for items with a specific ItemNumber pattern. The query is designed to provide insights into stock items and their associated data, facilitating inventory management and tracking."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "retrieve-linked-skus-and-replace",
    "label": "Retrieve Linked SKUs and Replace",
    "seoTitle": "Retrieve Linked SKUs and Replace",
    "description": "Rishvi Ltd offers advanced solutions for Retrieve Linked SKUs and Replace."
  },
  {
    "title": "Retrieve Linked Channel SKUs",
    "headline": "RIS-SC-1023 Retrieve Linked Channel SKUs",
    "eyebrow": "",
    "introLines": [
      "1. Select the Retrieve Linked Channel SKUs Report in the Query type drop-down menu.",
      "2. Click the Generate Report button.",
      "3. Select the Time Zone and click the Download (CSV file) button when downloading the report."
    ],
    "introParas": [
      "This query retrieves information about stock items based on a specified SKU prefix. It selects the SKU, linked SKU custom label, source, and sub-source from the StockItem table, while also generating a new SKU by replacing ‘LLC’ with ‘LLCPRP’ in the ItemNumber column. The search criteria limit results to items with an ItemNumber starting with ‘DB-RBN’ followed by ‘LLC-‘.",
      "How to generate the report: a step-by-step guide"
    ],
    "images": [
      {
        "src": "assest/linnworks/retrieve-linked-channel-skus/How-to-Choose-a-Fulfillment-Company-When-You-Have-a-High-SKU-Count-1144x763-1.jpg",
        "alt": "SKUs with Invalid Bin Rack in Aisle 2",
        "w": "1144",
        "h": "763"
      },
      {
        "src": "assest/linnworks/retrieve-linked-channel-skus/stock-keeping-unit-sku-m.jpg",
        "alt": "Retrieve Linked Channel SKUs 2",
        "w": "750",
        "h": "420"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Reported Values",
        "paras": [
          "The report returns the following values:"
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": [
          [
            "Column Name",
            "Description"
          ],
          [
            "SKU",
            "Stock Keeping Unit (SKU)"
          ],
          [
            "Linked SKU Custom Label",
            "Custom label linked to the SKU"
          ],
          [
            "Source",
            "Source of the stock item"
          ],
          [
            "SubSource",
            "Sub-source of the stock item"
          ],
          [
            "New SKU",
            "Modified Stock Keeping Unit (SKU)"
          ]
        ]
      },
      {
        "eyebrow": "",
        "title": "Parameters",
        "paras": [],
        "items": [
          "1. @SKU: The SKU prefix used as a filter criterion."
        ],
        "groups": [],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "This SQL query retrieves information about stock items with a specific SKU prefix from the database. It generates a new SKU by replacing ‘LLC’ with ‘LLCPRP’ in the ItemNumber column, facilitating data manipulation or updates. The query is designed to provide relevant details about stock items and their associated data, aiding in inventory management tasks."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "script",
    "slug": "retrieve-linked-channel-skus",
    "label": "Retrieve Linked Channel SKUs",
    "seoTitle": "Retrieve Linked Channel SKUs",
    "description": "Rishvi Ltd provides solutions for retrieve linked channel SKUs, streamlining your SKU management across various sales channels."
  },
  {
    "title": "Stream Shipping Integration",
    "headline": "Automate Shipping, Delivery Planning and Tracking with Stream",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "The Stream integration connects the Linnworks Order Management System with the Stream logistics platform to automate shipment processing, route planning, shipping label generation, and delivery tracking.",
      "This integration enables orders created in Linnworks to be automatically sent to Stream for shipment processing. Once shipments are created, Stream synchronizes shipment details, tracking numbers, and delivery updates back to Linnworks.",
      "By connecting these systems, businesses can streamline their fulfillment workflow, reduce manual operations, and gain full visibility of shipment processing."
    ],
    "images": [
      {
        "src": "assest/linnworks/stream-shipping-integration/stream-logo-stacked-black-1.webp",
        "alt": "Stream Shipping Integration",
        "w": "1112",
        "h": "1047"
      }
    ],
    "sections": [
      {
        "eyebrow": "How It Works",
        "title": "How the Stream Integration Works in Linnworks",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "1. Integration Overview",
            "paras": [
              "The Stream integration provides seamless communication between Linnworks and the Stream logistics platform through secure API services.",
              "Orders managed in Linnworks can be automatically transferred to Stream for shipment creation and delivery planning. After shipments are processed in Stream, the integration synchronizes shipment information back to Linnworks.",
              "Key Capabilities:",
              "This integration helps businesses manage shipping operations efficiently while maintaining accurate order records in Linnworks."
            ],
            "items": [
              "Automated order synchronization",
              "Shipment creation in Stream",
              "Delivery route planning",
              "Shipping label generation",
              "Tracking number synchronization",
              "Real-time delivery status updates"
            ]
          },
          {
            "title": "2. System Architecture",
            "paras": [
              "The Stream integration uses a service-based architecture to connect Linnworks and the Stream platform.",
              "Core Components",
              "Data Flow",
              "This architecture ensures reliable communication and real-time synchronization between both platforms."
            ],
            "items": [
              "Linnworks Order Management System : Handles order management, inventory control, and dispatch processes.",
              "Stream Logistics Platform : Processes shipments, manages delivery routes, and handles shipment tracking.",
              "Integration Service Layer : Acts as a middleware service that synchronizes data between Linnworks and Stream using API communication.",
              "1. Orders are created in Linnworks.",
              "2. Orders are sent to the Stream platform through the integration service.",
              "3. Stream processes shipments and assigns delivery runs.",
              "4. Shipment information and tracking numbers are generated.",
              "5. Shipment updates are synchronized back to Linnworks."
            ]
          },
          {
            "title": "3. Installation and Setup",
            "paras": [
              "Before configuring the Stream integration, the following prerequisites must be available.",
              "Prerequisites",
              "Integration Setup Steps",
              "Once configured, the integration will automatically process orders and shipments."
            ],
            "items": [
              "Active Linnworks account",
              "Access to the Stream platform",
              "Stream API credentials",
              "Warehouse configuration in Linnworks",
              "Sender address configuration",
              "1. Configure API credentials for Stream.",
              "2. Connect the Stream integration service.",
              "3. Configure warehouse details.",
              "4. Set up sender address information.",
              "5. Map shipping services between Linnworks and Stream.",
              "6. Enable order synchronization."
            ]
          },
          {
            "title": "4. Service Configuration",
            "paras": [
              "Shipping services define how orders are processed and delivered through the Stream platform.",
              "Each shipping service configuration includes:",
              "This configuration allows different shipping methods in Linnworks to be mapped to corresponding services in Stream.",
              "Businesses can configure multiple shipping services depending on their delivery requirements."
            ],
            "items": [
              "Service name",
              "Service identifier",
              "Delivery method",
              "Label generation settings",
              "Warehouse mapping",
              "Service options"
            ]
          },
          {
            "title": "5. Label Configuration",
            "paras": [
              "The Stream integration supports on-demand shipping label generation during the dispatch process.",
              "Shipping labels can be configured with several options to match warehouse requirements.",
              "Label Configuration Options",
              "Labels can be generated directly from Linnworks when orders are dispatched, allowing warehouse staff to print labels quickly during the fulfillment process."
            ],
            "items": [
              "Label format",
              "Number of label copies",
              "Printing configuration",
              "Label generation method"
            ]
          },
          {
            "title": "6. Order Synchronization",
            "paras": [
              "Order synchronization ensures that orders created in Linnworks are automatically transferred to the Stream platform for shipment processing.",
              "Order Sync Features",
              "Orders are validated before being sent to Stream to ensure that shipment data such as delivery address and service information is accurate.",
              "This prevents processing errors and ensures smooth shipment creation."
            ],
            "items": [
              "Automatic order transfer",
              "Dispatch synchronization",
              "Configurable order lookback period",
              "Validation checks before submission"
            ]
          },
          {
            "title": "7. Identifiers and Order Status",
            "paras": [
              "The integration uses identifiers to track the status of orders and shipments during processing.",
              "Identifier Types",
              "These identifiers help manage logistics workflows and delivery planning."
            ],
            "items": [
              "Sent to Stream : Indicates that the order has been successfully transferred to the Stream platform.",
              "Error from Stream : Indicates that the order failed validation or encountered processing errors.",
              "Run Identifier : Defines the delivery route assigned to the shipment.",
              "Day Identifier : Specifies the delivery day for the shipment.",
              "Sequence Identifier : Controls the delivery order within a route."
            ]
          },
          {
            "title": "8. Delivery Runs, Days and Sequence Configuration",
            "paras": [
              "Stream supports delivery route management using configurable runs, days, and sequences.",
              "These configurations help logistics teams optimize delivery planning and route management."
            ],
            "items": [
              "Delivery Runs : A delivery run represents a specific delivery route used for dispatching shipments.",
              "Day Configuration : Each shipment can be assigned to a specific delivery day depending on scheduling requirements.",
              "Sequence Configuration : Sequences determine the order in which shipments are delivered along a route."
            ]
          },
          {
            "title": "9. Tracking and Shipment Updates",
            "paras": [
              "Once shipments are created in Stream, the integration synchronizes shipment information with Linnworks.",
              "Shipment Updates Include",
              "Shipment updates may be delivered through API responses or webhook notifications, ensuring real-time updates in Linnworks.",
              "This allows teams to monitor shipment progress directly within the order management system."
            ],
            "items": [
              "Shipment creation confirmation",
              "Tracking number assignment",
              "Dispatch status updates",
              "Delivery completion status"
            ]
          },
          {
            "title": "10. Troubleshooting",
            "paras": [
              "During integration usage, certain issues may occasionally occur.",
              "Proper configuration and validation checks help prevent most integration issues."
            ],
            "items": [
              "Orders Not Sending to Stream : Verify API credentials and confirm that shipping services are correctly configured.",
              "Validation Errors : Check that order details such as shipping address, service selection, and warehouse configuration are valid.",
              "Missing Tracking Numbers : Ensure that shipments were successfully created in Stream.",
              "Webhook Issues : Verify webhook endpoints and ensure that update notifications are enabled."
            ]
          },
          {
            "title": "11. Best Practices",
            "paras": [
              "To ensure optimal performance of the Stream integration, the following practices are recommended.",
              "Following these practices helps maintain reliable and efficient shipping operations."
            ],
            "items": [
              "Configure shipping services carefully to match Stream delivery options.",
              "Validate order data before dispatching shipments.",
              "Regularly monitor shipment synchronization logs.",
              "Ensure webhook endpoints are active for tracking updates.",
              "Test shipment creation and label generation before using the integration in production."
            ]
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Why Us",
        "title": "Why Choose Rishvi for Stream Integration",
        "paras": [
          "Rishvi provides professional Linnworks integration services designed to help businesses automate logistics workflows and improve fulfillment operations.",
          "Our team assists businesses with:",
          "We ensure that the Stream integration is configured correctly and operates seamlessly within your Linnworks environment."
        ],
        "items": [
          "Stream integration setup",
          "Shipping service configuration",
          "Logistics workflow optimization",
          "Integration testing and validation",
          "Ongoing technical support"
        ],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Linnworks: Installation & Initial Setup"
    },
    "steps": [
      {
        "title": "Access Integration Settings",
        "notes": [
          "Log in to your Linnworks account and navigate to the integration configuration area.",
          "Open Linnworks Admin Panel",
          "Navigate to Settings",
          "Locate the Shipping Integrations or Custom Integrations section",
          "Select Stream Integration",
          "This is where the Stream service configuration will be added."
        ],
        "image": "assest/linnworks/stream-shipping-integration/1-1.png",
        "alt": ""
      },
      {
        "title": "Configure API Credentials",
        "notes": [
          "To enable communication between Linnworks and Stream, the integration must be connected using Stream API credentials.",
          "You will need to enter:",
          "Stream API Endpoint",
          "API Key",
          "Authentication Token",
          "Account Identifier (if required)",
          "These credentials allow the integration service to securely send and receive shipment data."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-2.png",
        "alt": ""
      },
      {
        "title": "Configure Sender Address",
        "notes": [
          "The sender address represents the warehouse or business location from which shipments will be dispatched.",
          "Provide the following details:",
          "Sender name",
          "Company name",
          "Warehouse address",
          "City",
          "Postal code",
          "Country",
          "Contact phone number",
          "This information is used by Stream when generating shipments and shipping labels."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-3.png",
        "alt": ""
      },
      {
        "title": "Configure Warehouse Mapping",
        "notes": [
          "Warehouses in Linnworks must be mapped to the corresponding shipment locations used in the Stream platform.",
          "This ensures that orders dispatched from specific warehouses are correctly processed in Stream.",
          "During configuration:",
          "Select the Linnworks warehouse",
          "Assign the corresponding Stream depot or location",
          "Save the mapping configuration",
          "This mapping allows shipments to be processed from the correct logistics location."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-4.png",
        "alt": ""
      },
      {
        "title": "Configure Shipping Services",
        "notes": [
          "Shipping services must be mapped between Linnworks and Stream so that orders use the correct delivery method.",
          "For each shipping service you should configure:",
          "Service name",
          "Service identifier",
          "Delivery method",
          "Label generation settings",
          "Default warehouse configuration",
          "Multiple services can be configured depending on the delivery options offered to customers."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-5.png",
        "alt": ""
      },
      {
        "title": "Configure Label Settings",
        "notes": [
          "The integration allows shipping labels to be generated automatically during dispatch.",
          "Configure label settings including:",
          "Label format",
          "Number of label copies",
          "Printing preferences",
          "Label generation trigger",
          "This ensures that warehouse staff can generate labels quickly during order fulfillment."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-6.png",
        "alt": ""
      },
      {
        "title": "Enable Order Synchronization",
        "notes": [
          "Once services and warehouses are configured, order synchronization can be activated.",
          "Enable:",
          "Automatic order transfer",
          "Dispatch synchronization",
          "Order lookback period",
          "Orders assigned with Stream as the shipping vendor will automatically be sent to the Stream platform for shipment processing."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-7.png",
        "alt": ""
      },
      {
        "title": "Configure Delivery Runs and Routing",
        "notes": [
          "Stream supports delivery planning using delivery runs.",
          "During configuration you may define:",
          "Delivery run identifiers",
          "Delivery day assignments",
          "Delivery sequence rules",
          "This helps organize shipments into optimized delivery routes."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-8.png",
        "alt": ""
      },
      {
        "title": "Enable Tracking Synchronization",
        "notes": [
          "Tracking synchronization allows shipment tracking numbers and delivery updates to be automatically returned to Linnworks.",
          "Configure:",
          "Shipment tracking updates",
          "Webhook notifications",
          "Delivery status synchronization",
          "This ensures order records remain up to date."
        ],
        "image": "assest/linnworks/stream-shipping-integration/image-11.png",
        "alt": ""
      },
      {
        "title": "Test the Integration",
        "notes": [
          "Before using the integration in production, run test orders to verify the setup.",
          "Testing should confirm:",
          "Orders are successfully sent to Stream",
          "Shipments are created correctly",
          "Labels generate properly",
          "Tracking numbers sync back to Linnworks",
          "Testing ensures the integration is working correctly before live operations begin."
        ],
        "image": null,
        "alt": ""
      },
      {
        "title": "Activate the Integration",
        "notes": [
          "Once testing is complete, the Stream integration can be activated for live order processing.",
          "Orders assigned to Stream as the shipping vendor will automatically begin syncing to the Stream platform for shipment creation and delivery planning."
        ],
        "image": null,
        "alt": ""
      }
    ],
    "kind": "shipping",
    "slug": "stream-shipping-integration",
    "label": "Stream Integration",
    "seoTitle": "Stream Shipping Integration for Linnworks | Rishvi Ltd",
    "description": "Stream Shipping Integration for Linnworks: route planning, automated delivery notifications, real-time tracking and proof of delivery for own-fleet logistics."
  },
  {
    "title": "Stream Shipping and Planning",
    "headline": "Stream Shipping and Planning Integration for Linnworks",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "The Stream – Linnworks integration is designed to automate and simplify order dispatch, delivery route planning, and tracking — all directly within Linnworks.",
      "Once Stream is selected as the shipping vendor for an order, The integration automatically transfers the order to Stream, manages route planning, and syncs all key updates back to Linnworks."
    ],
    "images": [
      {
        "src": "assest/linnworks/stream-shipping-and-planning/stream-logo-stacked-black-1.webp",
        "alt": "Stream Shipping Integration",
        "w": "1112",
        "h": "1047"
      }
    ],
    "sections": [
      {
        "eyebrow": "How It Works",
        "title": "When you assign Stream as the shipping vendor on an order",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "1. Sync from Linnworks to Stream",
            "paras": [],
            "items": [
              "Orders in Linnworks allocated with Vendor = Stream are automatically sent to Stream every 15 minutes.",
              "This transfer includes all necessary order details for route planning and dispatch."
            ]
          },
          {
            "title": "2. Route Planning in Stream",
            "paras": [
              "Once the order appears in Stream:",
              "This completes routing and planning directly in the Stream Portal"
            ],
            "items": [
              "Planning the shipment.",
              "Select the Service & Service Level",
              "Add Route Information (Optional)",
              "Select the Stock Location (if not set in Linnworks)",
              "Set the On Hand Date (if not set in Linnworks)",
              "Select the Delivery Method",
              "Set Unload and Assembly Time",
              "Select the Planned Slot",
              "Confirm Slot (Optional)",
              "Add Driver Notes (Optional)",
              "Save the Order",
              "Go to Advanced Planning",
              "Select the Order from the “Unplanned” section of the screen and drag it to the “Selected Run” section.",
              "Enter the Run Details:",
              "The Run Number should be added in the description (this will be reflected in Linnworks).",
              "Click Save.",
              "Locate the Runs from “Runs (DD/MM/YY – DD/MM/YY)”.",
              "Select the Driver and Vehicle (this information will be reflected in Linnworks).",
              "Click the Route button to route the order.",
              "Lock the Order to finalise the routing."
            ]
          },
          {
            "title": "3. Webhook Trigger from Stream",
            "paras": [],
            "items": [
              "A webhook is triggered when a route is Locked in Stream.",
              "This updates Linnworks in real time with route and dispatch details."
            ]
          },
          {
            "title": "4. Sync from Stream to Linnworks",
            "paras": [
              "When the delivery route is locked in Stream, Linnworks is updated with:"
            ],
            "items": [
              "Dispatch Date",
              "Dispatch Day (Visual Order Identifier)",
              "Run Number (Visual Order Identifier)",
              "Van Registration Number (Stored as Order Extended Property)",
              "Delivery Routing Sequence (Stored as Order Extended Property)",
              "Additional Extended Properties (if required by Stream)"
            ]
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Benefits",
        "title": "Key Features & Benefits",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Automated Order Flow",
            "paras": [
              "No manual steps - orders allocated to Stream are sent automatically."
            ],
            "items": []
          },
          {
            "title": "Label Printing from Linnworks",
            "paras": [
              "Generate shipping labels directly in Linnworks. Supports multi-label printing, parcel splitting, and servicespecific formats."
            ],
            "items": []
          },
          {
            "title": "Real-Time Tracking Updates",
            "paras": [
              "Tracking numbers generated in Stream sync automatically back to Linnworks."
            ],
            "items": []
          },
          {
            "title": "Accurate Delivery Planning",
            "paras": [
              "All key route details (dispatch date, van allocation, run number, etc.) are synced to Linnworks for visibility."
            ],
            "items": []
          },
          {
            "title": "Exchange & Collection Support",
            "paras": [
              "Integrated process for orders involving both delivery and product collection."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Management",
        "title": "Order Processing & Route Updates",
        "paras": [
          "When an order is closed or locked into a delivery route in Stream:"
        ],
        "items": [],
        "groups": [
          {
            "title": "1. Trigger",
            "paras": [
              "Stream sends a webhook with all necessary route details."
            ],
            "items": []
          },
          {
            "title": "2. Update Linnworks",
            "paras": [],
            "items": [
              "Dispatch Date → Updated in Linnworks.",
              "Dispatch Day (Visual Identifier) → Synced to Linnworks.",
              "Run Number (Visual Identifier) → Synced to Linnworks.",
              "Delivery Routing Sequence (stream_GroupSequence) → Stored as an extended property.",
              "Driver Name Stream_driverName",
              "Vehicle Name Stream_vehicleName",
              "Driver Notes Stream_driverNotes",
              "Other properties → Added as required by Stream."
            ]
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "The Stream–Linnworks integration allows businesses to:",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Automate order transfer and updates.",
            "paras": [],
            "items": []
          },
          {
            "title": "Print labels and manage shipments in one place.",
            "paras": [],
            "items": []
          },
          {
            "title": "Maintain accurate tracking and route visibility.",
            "paras": [],
            "items": []
          },
          {
            "title": "Handle exchanges efficiently with integrated delivery and collection.",
            "paras": [],
            "items": []
          }
        ],
        "images": [
          {
            "src": "assest/linnworks/stream-shipping-and-planning/Stream-Shipping-and-Planning.jpg",
            "alt": ""
          }
        ],
        "table": null
      },
      {
        "eyebrow": "Management",
        "title": "Exchange Process (Returns & Replacements)",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "1. Identification in Linnworks",
            "paras": [
              "Orders flagged with a Stream service containing “pickup” are automatically recognised as Exchange Orders."
            ],
            "items": []
          },
          {
            "title": "2. Notification to Stream",
            "paras": [
              "Stream receives the flagged Exchange order and is instructed to handle:"
            ],
            "items": [
              "Collection of returned items."
            ]
          },
          {
            "title": "3. API Integration for Exchange Handling",
            "paras": [
              "When an exchange is created in Linnworks:"
            ],
            "items": [
              "An API request registers the exchange in Stream.",
              "Background services call backend functions to process the exchange."
            ]
          },
          {
            "title": "4. Continuous Sync",
            "paras": [
              "Updates to Exchange orders in Linnworks are sent to Stream every 15 minutes until the route is marked Closed in Stream."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "",
        "title": "Updating Stream from Linnworks Changes",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "1. Changes to Sync",
            "paras": [],
            "items": [
              "Dispatch Date",
              "Order Status",
              "Customer Details (Address, Contact Info)",
              "Product Quantity or SKU changes",
              "Tracking information"
            ]
          },
          {
            "title": "2. Sending Updates to Stream API",
            "paras": [],
            "items": [
              "Extract updated details from Linnworks.",
              "Format according to Stream API requirements.",
              "Send updates to Stream API to maintain consistency."
            ]
          }
        ],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Steps to Configure Stream Shipping in Linnworks"
    },
    "steps": [
      {
        "title": "Click on Shipping in the left-hand menu, then select Shipping Integrations from the submenu.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined.png",
        "alt": ""
      },
      {
        "title": "Click on the Add Integration button in the top-right corner of the Shipping Integrations screen.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-1.png",
        "alt": ""
      },
      {
        "title": "Search for Stream Shipping Integration in the search bar, then click Integrate.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-2.png",
        "alt": ""
      },
      {
        "title": "In the Add Stream Shipping Integration pop-up, enter a unique Account Name for reference, then click Next.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-3.png",
        "alt": ""
      },
      {
        "title": "Enter the Client ID and Client Secret provided by Stream or the channel partner. Select Is Live Account if you wish to use the live Stream environment.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-4.png",
        "alt": ""
      },
      {
        "title": "Enter the Sender Address details, including: Contact Name, Company Name, Address (Street, Town/City, Region, Country). Click Next to proceed.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-5.png",
        "alt": ""
      },
      {
        "title": "Configure the Account Settings",
        "notes": [
          "Order Sync – Sync orders to Stream when selected.",
          "Dispatch Sync – Update dispatch dates when selected.",
          "Use Default Location – If selected, the Default Location will be sent to Stream.",
          "Default Location – Enter the depot name in Stream where you want orders assigned.",
          "Order Sync Days – Set the number of days to send orders to Stream (default: 10 days).",
          "Send Change to Stream – If selected, any updates made in Linnworks after sending the order will be updated in Stream.",
          "Hands On Date – If selected, the order will be sent to Stream with the hand-on date matching the order received date."
        ],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-6.png",
        "alt": ""
      },
      {
        "title": "Click Next to continue. Select the Label Reference type",
        "notes": [
          "Linnworks Order ID – The label will print the Linnworks order number.",
          "Channel Reference – The label will print the channel reference."
        ],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-7.png",
        "alt": ""
      },
      {
        "title": "Click Next to proceed. In the Shipping Integrations list, locate the Stream Shipping Integration you just set up and click on the Services icon under the Actions column.",
        "notes": [],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-8.png",
        "alt": ""
      },
      {
        "title": "Click on Add Service to create a new shipping service.",
        "notes": [
          "If the Service Name contains “Pick-up”, the service will be configured to send a collection request rather than a delivery.",
          "Once all services are added, click Finish to complete the setup.",
          "The Stream–Linnworks shipping and planning integration setup is now complete, enabling seamless order syncing, route planning, label printing, and tracking updates directly within Linnworks for streamlined shipping operations"
        ],
        "image": "assest/linnworks/stream-shipping-and-planning/undefined-9.png",
        "alt": ""
      }
    ],
    "kind": "shipping",
    "slug": "stream-shipping-and-planning",
    "label": "Stream Shipping and Planning",
    "seoTitle": "Stream Shipping and Planning for Linnworks | Rishvi Ltd",
    "description": "Connect Linnworks with Stream for real-time delivery tracking, route planning, barcode scanning and returns, improving fulfilment and customer experience."
  },
  {
    "title": "Package Splitter",
    "headline": "RIS-PG-1001 Package Splitter",
    "eyebrow": "",
    "introLines": [
      "Go to Orders > Dispatch Console.",
      "Use one of the following tabs to search for an order/item(s) that you need to process:",
      "By order ID",
      "By item barcode",
      "By tray",
      "Once the Process Order screen opens, follow the same instructions as below, starting from step 3."
    ],
    "introParas": [
      "The Split Packaging Component app on Linnworks streamlines order processing by allowing users to input an integer to determine the number of packages for splitting orders, automatically distributing order items across these packages. It optimizes order fulfilment by efficiently organizing items into multiple packages, enhancing productivity and accuracy."
    ],
    "images": [
      {
        "src": "assest/linnworks/package-splitter/people-business-meeting-high-angle_23-2148911819.avif",
        "alt": "Missing Phone Number and Email 1",
        "w": "626",
        "h": "418"
      },
      {
        "src": "assest/linnworks/package-splitter/240_F_373514790_fvPkgwLkD95dJlj4Z1aYvbhUtybDRDXw.jpg",
        "alt": "Missing Phone Number and Email 2",
        "w": "360",
        "h": "240"
      }
    ],
    "sections": [
      {
        "eyebrow": "",
        "title": "Summary",
        "paras": [
          "The Split Packaging Component app on Linnworks simplifies order splitting by enabling users to specify the number of packages, automatically distributing items across them, enhancing efficiency and accuracy in order fulfilment."
        ],
        "items": [],
        "groups": [],
        "images": [],
        "table": null
      }
    ],
    "stepsHead": {
      "eyebrow": "Our App",
      "title": "Configure the macro",
      "intro": "Once the Assign Payment Method app is installed:"
    },
    "steps": [
      {
        "title": "In the Open Orders screen, find the order you need to process. Select the order, click Action, or right-click the order and go to Process Order > Process.",
        "notes": [],
        "image": "assest/linnworks/package-splitter/1.png",
        "alt": "Package-Splitter-step1"
      },
      {
        "title": "The Process Order screen will open. At the bottom of the screen, you will see the Split Into x Packages button.",
        "notes": [],
        "image": "assest/linnworks/package-splitter/spaces_oDgPytuGFrtSP4UCjP4c_uploads_DpgCWPWjZoD8lhVaAAOE_image.webp",
        "alt": "Package-Splitter-step2"
      },
      {
        "title": "Click the button, enter the number of packages required, and click Split Packaging.",
        "notes": [
          "Info! If you split, for example, an order of 10 items into 5 packages, you will receive 1 package containing 6 items and 4 packages, each containing 1 item. This means the app will ensure at least 1 item is in each package, and any remaining items will be put into Package 1."
        ],
        "image": "assest/linnworks/package-splitter/Screenshot-5.png",
        "alt": "Package-Splitter-step3"
      },
      {
        "title": "The left side of the screen will now show how many parts the packaging has been split into.",
        "notes": [],
        "image": "assest/linnworks/package-splitter/Screenshot-6.png",
        "alt": "Package-Splitter-step4"
      },
      {
        "title": "After that, you can proceed to print shipping labels for the order. Linnworks will generate as many shipping labels as there are packages.",
        "notes": [
          "Info! To keep a record, an order that had its packaging split using the Package Splitter app will have the number of packages recorded under Edit Order Details > Shipping & Packaging."
        ],
        "image": "assest/linnworks/package-splitter/image-13.avif",
        "alt": "Package-Splitter-step5"
      },
      {
        "title": "If you need to remove or edit the split, you can do it from the same Process Order screen by using the Edit Packaging or the Remove Split buttons.",
        "notes": [],
        "image": "assest/linnworks/package-splitter/image-12.avif",
        "alt": "Package-Splitter-step6"
      },
      {
        "title": "When clicking the Edit Packaging button, the Split Packaging screen will open, allowing you to manually change the number of packages and move items between them.",
        "notes": [],
        "image": "assest/linnworks/package-splitter/image-11.avif",
        "alt": "Package-Splitter-step7"
      }
    ],
    "kind": "automation",
    "slug": "package-splitter",
    "label": "Package Splitter",
    "seoTitle": "Package Splitter Linnworks Macro | Rishvi Ltd",
    "description": "Rishvi Ltd offers a package splitter tool to manage and split orders into multiple packages efficiently."
  },
  {
    "title": "Run Macro",
    "headline": "Execute Automation Instantly with the Run Macro Button in Linnworks",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "Rishvi Ltd’s Run Macro feature adds a convenient on-screen button to the Linnworks Open Orders screen, allowing users to trigger scheduled macros directly—without navigating to the macro configuration section.",
      "This on-demand functionality helps streamline your workflow by enabling quick execution of automation scripts exactly when and where you need them.",
      "Perfect for warehouse teams or admins who want to run scripts like label cleanup, order flagging, or rule enforcement with a single click—right from the order screen."
    ],
    "images": [
      {
        "src": "assest/linnworks/run-macro/Run-Macro-1.webp",
        "alt": "",
        "w": "1920",
        "h": "1080"
      },
      {
        "src": "assest/linnworks/run-macro/Run-Macro.webp",
        "alt": "",
        "w": "1500",
        "h": "901"
      }
    ],
    "sections": [
      {
        "eyebrow": "Key Functionalities",
        "title": "Key Functionalities of the Run Macro Button",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "On-Screen Macro Execution",
            "paras": [
              "Adds a clickable button directly on the Open Orders screen, making automation accessible without leaving your workflow."
            ],
            "items": []
          },
          {
            "title": "Run Any Scheduled Macro",
            "paras": [
              "Supports triggering any existing scheduled macro from the dropdown, including discount adjustments, label fixes, routing logic, etc."
            ],
            "items": []
          },
          {
            "title": "No Navigation Required",
            "paras": [
              "Eliminates the need to go to the Linnworks automation section or back-end settings—run it right where you're working."
            ],
            "items": []
          },
          {
            "title": "Ease of Use for Operations Team",
            "paras": [
              "Designed with simplicity in mind, so warehouse or fulfilment staff can execute complex automation without technical knowledge."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Benefits",
        "title": "Why Use the Run Macro Button by Rishvi Ltd?",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Boosts Operational Efficiency",
            "paras": [
              "Reduces time spent navigating menus and helps execute macros in real time during fulfilment."
            ],
            "items": []
          },
          {
            "title": "Non-Technical Friendly",
            "paras": [
              "No configuration knowledge needed—just select and run with one click."
            ],
            "items": []
          },
          {
            "title": "Flexible and Customizable",
            "paras": [
              "Works with any scheduled macro you've set up—giving full flexibility across departments and roles."
            ],
            "items": []
          },
          {
            "title": "Enhances Workflow",
            "paras": [
              "Empowers your team to take action quickly—whether it’s updating orders, validating data, or adjusting inventory."
            ],
            "items": []
          }
        ],
        "images": [
          {
            "src": "assest/linnworks/run-macro/Run-Macro-2.webp",
            "alt": ""
          }
        ],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "automation",
    "slug": "run-macro",
    "label": "Run Macro",
    "seoTitle": "Run Macro Button for Linnworks | Trigger Automation Instantly",
    "description": "Add a Run Macro button to Linnworks Open Orders screen and execute any scheduled macro instantly. Improve efficiency with on-demand automation."
  },
  {
    "title": "Rename SKU",
    "headline": "Easily Rename SKUs On Screen Without CSVs in Linnworks",
    "eyebrow": "",
    "introLines": [],
    "introParas": [
      "Rishvi Ltd introduces an intuitive on-screen automation that allows users to rename SKUs directly from the Linnworks Inventory screen—no more time-consuming CSV uploads or data reimports.",
      "This tool empowers your team to make quick adjustments to SKU names with just a few clicks, making the process faster, cleaner, and fully integrated into your day-to-day operations.",
      "Ideal for businesses regularly updating product codes or simplifying internal product identifiers without breaking their workflow."
    ],
    "images": [
      {
        "src": "assest/linnworks/rename-sku/Thumbnail-9.jpg",
        "alt": "Power build 2",
        "w": "1254",
        "h": "836"
      },
      {
        "src": "assest/linnworks/rename-sku/6531a9a7ef5d428876d5f31d_scripting-scaled.jpeg",
        "alt": "",
        "w": "2560",
        "h": "1920"
      }
    ],
    "sections": [
      {
        "eyebrow": "Key Functionalities",
        "title": "Key Functionalities of Rename SKU Automation",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "On-Screen Button Integration",
            "paras": [
              "A dedicated Rename SKU button is added to the Linnworks Inventory screen for easy access."
            ],
            "items": []
          },
          {
            "title": "Select and Rename in One Click",
            "paras": [
              "Simply select the SKU you wish to rename, click the button, and enter the new SKU name in the prompt—no spreadsheet needed."
            ],
            "items": []
          },
          {
            "title": "Instant Rename Without CSV Import",
            "paras": [
              "Skip the traditional CSV preparation and import steps—changes are applied in real time to your inventory."
            ],
            "items": []
          },
          {
            "title": "Safe, Controlled Renaming Process",
            "paras": [
              "The macro ensures a controlled update, preventing accidental duplication or invalid characters."
            ],
            "items": []
          }
        ],
        "images": [],
        "table": null
      },
      {
        "eyebrow": "Benefits",
        "title": "Why Use Rename SKU Automation by Rishvi Ltd?",
        "paras": [],
        "items": [],
        "groups": [
          {
            "title": "Faster Workflow",
            "paras": [
              "Make SKU changes instantly without pausing your inventory or uploading files."
            ],
            "items": []
          },
          {
            "title": "Zero CSV Hassle",
            "paras": [
              "Remove the need to prepare, upload, and validate spreadsheet files for simple changes."
            ],
            "items": []
          },
          {
            "title": "User-Friendly Interface",
            "paras": [
              "Even non-technical users can rename SKUs with ease using the interactive prompt."
            ],
            "items": []
          },
          {
            "title": "On-Demand Changes",
            "paras": [
              "Trigger SKU updates exactly when needed—ideal for fast-moving retail or product catalog corrections."
            ],
            "items": []
          }
        ],
        "images": [
          {
            "src": "assest/linnworks/rename-sku/18_Dec_2020_virtual-warehouse-728at2x.jpg",
            "alt": "Channel Inventory Aggregation by Source and Subsources 2"
          }
        ],
        "table": null
      }
    ],
    "stepsHead": null,
    "steps": [],
    "kind": "automation",
    "slug": "rename-sku",
    "label": "Rename SKU",
    "seoTitle": "Rename SKU On-Screen Automation for Linnworks | Rishvi Ltd",
    "description": "Rename SKUs directly from Linnworks Inventory screen using Rishvi Ltd’s on-screen automation. No more CSV imports. Fast, safe, and efficient."
  }
];
