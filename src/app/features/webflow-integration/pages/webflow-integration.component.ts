import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

export interface WebflowStep {
  title: string;
  /** Description lines shown under the title. */
  notes: string[];
  image: string;
  alt: string;
}

/** Public Webflow Channel Integration page, shown at /linnworks/webflow-integration. */
@Component({
  selector: 'app-webflow-integration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './webflow-integration.component.html',
  styleUrl: './webflow-integration.component.scss',
})
export class WebflowIntegrationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Linnworks', route: '/linnworks' }];

  readonly intro = {
    eyebrow: 'Webflow Integration',
    text: 'This project enables seamless integration between a Webflow eCommerce store and Linnworks, allowing centralized order, inventory, and product management across multiple channels. Designed using official Linnworks integration guidelines, the solution bridges your Webflow storefront with Linnworks automation and stock control capabilities.',
  };

  readonly featuresHead = { eyebrow: 'How It Works', title: 'Key Features' };

  readonly features = [
    { icon: 'pi-th-large', title: 'Product Sync', text: 'Products created or updated in Linnworks are automatically pushed to Webflow, keeping your online store updated with the latest product data.' },
    { icon: 'pi-box', title: 'Inventory Sync', text: 'Stock levels in Linnworks are treated as the source of truth. Any stock changes are pushed to Webflow in near real-time or on a schedule.' },
    { icon: 'pi-download', title: 'Order Sync', text: 'Orders placed in Webflow are automatically imported into Linnworks for processing and fulfillment.' },
    { icon: 'pi-link', title: 'SKU Mapping', text: 'If SKUs don’t match, orders won’t fail. Instead, unmatched SKUs are placed in a mapping queue, where you can link or create products in Linnworks.' },
    { icon: 'pi-bell', title: 'Error Handling & Alerts', text: 'Failed syncs are logged, and you’ll receive alerts for issues like missing SKUs or invalid product data.' },
    { icon: 'pi-shield', title: 'Security & Compliance', text: 'All API communication is encrypted, and customer order data is handled securely.' },
  ];

  readonly future = {
    title: 'Future Enhancements',
    icon: 'pi-compass',
    items: [
      'Bi-directional product updates',
      'Multi-location stock sync',
      'Enhanced dashboard with sync history',
      'Order status sync from Linnworks to Webflow',
    ],
  };

  readonly limits = {
    title: 'Limitations',
    icon: 'pi-exclamation-circle',
    items: [
      'Webflow API request limits (60/minute)',
      'Webflow collection size limit (10,000 products)',
      'Variants/bundles may need custom setup',
      'Multi-location inventory not supported yet',
    ],
  };

  readonly prereq = {
    title: 'Prerequisites',
    lead: 'To use this integration, you will need:',
    items: [
      'Active Linnworks account with API access',
      'A Webflow site with eCommerce enabled',
      'API credentials for both platforms',
      'Product SKUs added in both Linnworks and Webflow',
    ],
    note: '(SKUs are recommended to match, but mismatches are handled via SKU Mapping.)',
  };

  readonly appHead = { eyebrow: 'Our App', title: 'Linnworks: Installation & Initial Setup' };

  readonly steps: WebflowStep[] = [
    {
      title: 'Open Channel Integrations',
      notes: ['Go to your Linnworks dashboard and click on “Channel Integration” in the left-hand menu.'],
      image: 'assest/image.webp',
      alt: 'Linnworks Channel Integrations list with the Settings menu open',
    },
    {
      title: 'Add New Integration',
      notes: ['Click the “+ Add New” button. In the search bar, type “Webflow Integration” and select it from the list.'],
      image: 'assest/image-1-2048x1511.webp',
      alt: 'Add Channel dialog searching for Webflow Integration',
    },
    {
      title: 'Enter a Name for Your Webflow Account',
      notes: ['Type a name that helps you identify this Webflow store (e.g., “Main Website” or “Webflow US Store”), then click Next.'],
      image: 'assest/image-2.webp',
      alt: 'Add Webflow Integration Channel wizard asking for an account name',
    },
    {
      title: 'Read and Accept the Terms',
      notes: ['You’ll see a disclaimer and terms & conditions. Read through it, then check the box to agree and click Next.'],
      image: 'assest/image-3.webp',
      alt: 'Add Webflow Integration Channel wizard showing the disclaimer and terms checkbox',
    },
    {
      title: 'Enter Webflow Account Details',
      notes: [
        'Fill in the following information from your Webflow account:',
        'Auth Token – Used to connect your Webflow store securely',
        'Site ID – The unique ID of your Webflow project',
        'Is OAuth – Check this box if you’re using OAuth authentication',
        'Click Next once done.',
      ],
      image: 'assest/image-4.webp',
      alt: 'Add Webflow Integration Channel wizard with Auth Token, Site ID and Is Oauth fields',
    },
    {
      title: 'Choose Integration Options',
      notes: ['You’ll now be asked to select some preferences based on how you want the sync to work. Choose the options that match your needs.'],
      image: 'assest/image-5.webp',
      alt: 'Add Webflow Integration Channel wizard order setup options',
    },
    {
      title: 'Setup Complete',
      notes: ['That’s it! Your Webflow store is now connected to Linnworks. You can start syncing orders and managing inventory.'],
      image: 'assest/image-6.webp',
      alt: 'Add Webflow Integration Channel wizard showing the integration has been completed',
    },
  ];

  readonly active = signal(0);

  go(i: number): void {
    this.active.set(Math.max(0, Math.min(this.steps.length - 1, i)));
  }

  constructor() {
    // Same behaviour as the other public pages: show the Rishvi colour unless the visitor chose one.
    if (this.appliedDefault) {
      this.theme.primaryColor.set('rishvi');
    }
  }

  ngOnDestroy(): void {
    if (this.appliedDefault && !localStorage.getItem('primaryColor')) {
      this.theme.primaryColor.set(this.previousColor);
    }
  }
}
