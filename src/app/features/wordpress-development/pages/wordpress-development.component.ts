import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

/** Public WordPress Development page, shown at /wordpress-development. */
@Component({
  selector: 'app-wordpress-development',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './wordpress-development.component.html',
  styleUrl: './wordpress-development.component.scss',
})
export class WordpressDevelopmentComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Website Development', route: '/website-development' }];

  readonly intro = {
    eyebrow: 'WordPress Development',
    paragraphs: [
      'We are one of the identified WordPress improvement corporations around the world and had been on this commercial enterprise for two decades. We delight ourselves in furnishing a one-forestall answer with higher than common WordPress improvement administrations at a quick turnaround time. Our professional organization of WordPress builders has the instinct of handing over out-of-the-container internet answers using modern day WordPress innovation.',
    ],
    tags: ['Cost-Effective', 'Responsive Website', 'SEO Friendly', 'Security', 'Ease of updating content'],
  };

  readonly servicesHead = {
    eyebrow: 'Services',
    title: 'WordPress Services We Offer',
    text: 'We give all viable wordpress offerings starting from custom wordpress subject matter development , plugin customization, wordpress pace optimization, SEO, and integration with third party modules and alertness like Facebook Apps to your WordPress website.',
  };

  readonly services = [
    { icon: 'pi-search', title: 'WordPress SEO', text: 'Follow the latest strategies and best practices to improve your web index website. We are working to increase the rank of our website through on-page and off-page SEO. Handles relevant keywords, valuable content, website load times, competitive searches, website backlinks, and more.' },
    { icon: 'pi-question-circle', title: 'WordPress Support', text: 'We provide high quality WordPress support services. Our services include website design customization, plugins, updates, migrations, staging, maintenance and troubleshooting. Our developers have many years of experience in technical support and keeping websites updates.' },
    { icon: 'pi-palette', title: 'WordPress Design', text: 'Design stays our essential focus. We provide WordPress complete provider that consists of a easy blog, brochure, static internet site to a complicated solution. We preserve aesthetic cost and capability of the internet site together with forte to face out from the crowd.' },
    { icon: 'pi-sliders-h', title: 'WordPress Customization', text: 'WordPress customization is achieved in keeping with our client’s requirements. Our developers do it like a chunk of artwork and seamlessly integrates 3rd party plugin and module for your web website online certainly and perfectly.' },
    { icon: 'pi-th-large', title: 'Module Development', text: 'We create web sites wherein content material flows in from WordPress and Products get seamlessly incorporated from the Magento Store giving your internet site a superb blend of technologies.' },
    { icon: 'pi-arrow-circle-up', title: 'Upgradation Services', text: 'A web page without protection is existence without breath for us. So we recognize its significance and we offer excessive user-cease protection ranges on your web page. From maintaining web page unfastened from virus attack hire us for all wordpress and plug-in upgradation.' },
  ];

  readonly maintenance = {
    icon: 'pi-wrench',
    title: 'WordPress Maintenance and Support',
    text: 'For all the errors and problems related to your existing wordpress website, our team of experts is always ready to help you with their experience to help you out of your trap. Hire us and we’ll fix your WordPress site and get it working properly.',
  };

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
