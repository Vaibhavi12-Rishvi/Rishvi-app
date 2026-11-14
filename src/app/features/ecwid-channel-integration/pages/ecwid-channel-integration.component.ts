import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

export interface EcwidStep {
  title: string;
  image: string;
  alt: string;
}

/** Public Ecwid Channel Integration page, shown at /linnworks/ecwid-channel-integration. */
@Component({
  selector: 'app-ecwid-channel-integration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './ecwid-channel-integration.component.html',
  styleUrl: './ecwid-channel-integration.component.scss',
})
export class EcwidChannelIntegrationComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Linnworks', route: '/linnworks' }];

  readonly intro = {
    eyebrow: 'Start using the Ecwid',
    text: 'Simplify your e-commerce workflow with Rishvi Ltd’s Ecwid Channel Integration on Linnworks. From one central platform, seamlessly manage orders, pricing, inventory, and shipping. With features like real-time inventory updates, location and payment mapping, automated order downloads and dispatches, and easy price adjustments, this integration keeps your Ecwid store running smoothly and efficiently.',
    features: [
      { icon: 'pi-sync', label: 'Real-time inventory updates' },
      { icon: 'pi-map-marker', label: 'Location and payment mapping' },
      { icon: 'pi-download', label: 'Automated order downloads' },
      { icon: 'pi-send', label: 'Automated dispatches' },
      { icon: 'pi-tags', label: 'Easy price adjustments' },
    ],
  };

  readonly appHead = { eyebrow: 'Our App', title: 'Configure The Ecwid' };

  readonly steps: EcwidStep[] = [
    { title: 'On linnworks go to settings', image: 'assest/3.png', alt: 'Linnworks dashboard with an arrow pointing at Settings' },
    { title: 'then click on channel Integration', image: 'assest/4.png', alt: 'Settings menu with Channel integration highlighted' },
    { title: 'Tap on Add New', image: 'assest/5.jpg', alt: 'Channel Integrations list with the Add New button highlighted' },
    { title: 'Search for Bandcamp channel here > click on Install Application', image: 'assest/6.png', alt: 'Add Channel dialog showing the Ecwid Channel with an Install Application button' },
    { title: 'Here Provide a New Name > Click on Next', image: 'assest/7.jpg', alt: 'Add Ecwid Channel wizard asking for an account name' },
    { title: 'Accept the Terms and conditions > click on Next', image: 'assest/8.jpg', alt: 'Add Ecwid Channel wizard showing the disclaimer and terms checkbox' },
    { title: 'Here Provide Store ID , Auth Token and Currency and Check on Is Oauth > click on Next', image: 'assest/9.jpg', alt: 'Add Ecwid Channel wizard with Store Id, Auth Token, Currency and Is Oauth fields' },
    { title: 'Here Check Price Includes Tax and also click on Is Cancel Order > Click on Next', image: 'assest/10.jpg', alt: 'Add Ecwid Channel wizard order setup with Price Includes Tax and Is CancelOrder ticked' },
    { title: 'And Finally tap on Finish', image: 'assest/11.png', alt: 'Add Ecwid Channel wizard showing the integration has been completed' },
    { title: 'Here you can see new channel integration has been added', image: 'assest/13.jpg', alt: 'Channel Integrations list with the new Ecwid channel highlighted' },
    { title: 'Enable it from here', image: 'assest/13.jpg', alt: 'Channel Integrations list with the Enabled toggle circled' },
    { title: 'From here, you can edit your channel integration anytime', image: 'assest/14.jpg', alt: 'Channel Integrations list with the edit action highlighted' },
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
