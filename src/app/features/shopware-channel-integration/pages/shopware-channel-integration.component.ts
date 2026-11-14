import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

export interface ShopwareStep {
  title: string;
  /** Extra lines shown under the title. */
  notes?: string[];
  /** Screenshot; some steps have none. */
  image?: string;
  alt?: string;
}

/** Public Shopware Channel Integration page, shown at /linnworks/shopware-channel-integration. */
@Component({
  selector: 'app-shopware-channel-integration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './shopware-channel-integration.component.html',
  styleUrl: './shopware-channel-integration.component.scss',
})
export class ShopwareChannelIntegrationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Linnworks', route: '/linnworks' }];

  readonly intro = {
    eyebrow: 'Shopware Channel Integration',
    text: 'This project enables seamless integration between a Shopware and Linnworks, allowing centralized order, inventory, and product management across multiple channels. Designed using official Linnworks channel integration guidelines, the solution bridges your Shopware storefront with Linnworks automation and stock control capabilities.',
  };

  readonly featuresHead = { eyebrow: 'How It Works', title: 'Key Features' };

  readonly features = [
    { icon: 'pi-box', title: 'Inventory Updates', text: 'Automatically sync stock level changes from Linnworks to Shopware, ensuring your listings remain accurate.' },
    { icon: 'pi-download', title: 'Order Download', text: 'Automatically import orders from Shopware into Linnworks. The paid/unpaid status is determined by the Paid Status List in your channel settings.' },
    { icon: 'pi-percentage', title: 'Channel Tax', text: 'Tax details and settings on orders in Linnworks are supplied directly from Shopware during the order download process.' },
    { icon: 'pi-link', title: 'Inventory Mapping', text: 'Link your Shopware listings with Linnworks inventory items to enable stock and price synchronisation.' },
    { icon: 'pi-map-marker', title: 'Location Mapping', text: 'Download orders to specific Linnworks locations and send inventory updates from chosen locations.' },
    { icon: 'pi-send', title: 'Order Dispatch', text: 'Mark orders as shipped from within Linnworks, complete with tracking numbers and shippig service names, syncing directly with Shopware.' },
    { icon: 'pi-credit-card', title: 'Payment Mapping', text: 'Map Shopware payment methods to Linnworks payment options, ensuring accurate payment method details in your orders.' },
    { icon: 'pi-tag', title: 'Price Change', text: 'Update product prices on your Shopware listings directly through Linnworks.' },
  ];

  readonly appHead = { eyebrow: 'Our App', title: 'Linnworks: Installation & Initial Setup' };

  readonly steps: ShopwareStep[] = [
    { title: 'In Linnworks, search for “Shopware v6” in the Apps/Integrations section.', image: 'assest/step-1-2048x293.jpg', alt: 'Add Channel dialog with the search box highlighted' },
    { title: 'Click Install', image: 'assest/step-2-2048x476.jpg', alt: 'Add Channel dialog showing Shopware V6 with the Install Application button highlighted' },
    { title: 'Enter an Account Name (e.g., “Shopware – Main Store”) to identify the channel', image: 'assest/step-3-2048x847.jpg', alt: 'Add Shopware V6 Channel wizard asking for an account name' },
    { title: 'Review the on-screen information and permissions, then proceed', image: 'assest/step-4-2000x2048.jpg', alt: 'Add Shopware V6 Channel wizard showing the disclaimer and terms checkbox' },
    { title: 'Enter the API credentials provided by Shopware or Rishvi Ltd (e.g., Client ID, Client Secret, Base URL).', image: 'assest/step-5-2004x2048.jpg', alt: 'Add Shopware V6 Channel wizard with website URL, user name, password, client ID and client secret fields' },
    { title: 'Configure options according to your requirements', notes: ['(order download rules, stock update settings, price sync, tax handling, locations, etc.).'], image: 'assest/step-6-2000x2048.jpg', alt: 'Add Shopware V6 Channel wizard order setup options' },
    { title: 'Click Enable to activate the integration.' },
    { title: 'Go to Channel Mapping:', notes: ['Inventory Mapping: Link existing SKUs to Shopware listings, or create new SKUs in Linnworks.', '(Optional but recommended) Location/Payment/Shipping Mapping: Map your chosen locations and methods for accurate syncing.'], image: 'assest/step-8-2048x1152.png', alt: 'Linnworks channel mapping screen listing SKUs with Unlink and Create buttons' },
    { title: 'Create a test order in Shopware. Allow approximately 15 minutes for the order to appear in Linnworks.', image: 'assest/image.png', alt: 'A test order in the Shopware admin' },
    { title: 'Verify the import and data: check order status, taxes, shipping and payment details, and confirm stock behaviour.', image: 'assest/image-1.png', alt: 'The imported order row in Linnworks showing tax, totals and fulfilment status' },
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
