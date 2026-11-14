import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

export interface DespatchStep {
  title: string;
  image: string;
  alt: string;
}

/** Public Change Despatch Date page, shown at /linnworks/change-despatch-date. */
@Component({
  selector: 'app-change-despatch-date',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective, RouterLink],
  templateUrl: './change-despatch-date.component.html',
  styleUrl: './change-despatch-date.component.scss',
})
export class ChangeDespatchDateComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Linnworks', route: '/linnworks' }];

  readonly intro = {
    eyebrow: 'Start using the macro',
    text: 'The Change Despatch Date of single or multiple orders in Linnworks streamlines order management by allowing users to select one or multiple orders and easily adjust the despatch date. This automation simplifies the process of rescheduling orders, improving efficiency in managing order fulfilment timelines.',
    multipleLabel: 'For Multiple Orders:',
    multiple: [
      'Go to Open Orders.',
      'Select Multiple Orders.',
      'Once the Multiple Orders are selected, follow the same instructions as below, starting from step 2.',
    ],
  };

  readonly summary = {
    title: 'Summary',
    text: 'The Change Despatch Date facilitates the adjustment of despatch dates for single or multiple orders with ease. By enabling users to select and modify despatch dates efficiently, it enhances order management and ensures timely fulfilment.',
  };

  readonly appHead = { eyebrow: 'Our App', title: 'Configure the macro', sub: 'From the Open Orders screen' };

  readonly steps: DespatchStep[] = [
    {
      title: 'In the Open Orders screen, find the order you need to process. Select the order, click on Change Despatch Date.',
      image: 'assest/image-8-1024x415-1.png',
      alt: 'Open Orders screen with the order and the Change Despatch Date button highlighted',
    },
    {
      title: 'The Order Despatch Date screen will open.',
      image: 'assest/image-9.png',
      alt: 'Order Dispatch Date dialog with a date field and Save and Close buttons',
    },
    {
      title: 'Select despatch Date and click on save button.',
      image: 'assest/image-9.png',
      alt: 'Order Dispatch Date dialog where the date is chosen and saved',
    },
    {
      title: 'Go back to the Open Order screen and verify the despatch date of order.',
      image: 'assest/image-10-1024x297-1.png',
      alt: 'Open Orders screen showing the updated despatch date on the selected order',
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
