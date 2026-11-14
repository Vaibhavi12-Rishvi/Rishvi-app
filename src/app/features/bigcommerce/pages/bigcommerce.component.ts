import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

/** Public Big-Commerce page, shown at /bigcommerce. */
@Component({
  selector: 'app-bigcommerce',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './bigcommerce.component.html',
  styleUrl: './bigcommerce.component.scss',
})
export class BigcommerceComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Website Development', route: '/website-development' }];

  readonly intro = {
    eyebrow: 'Big-Commerce',
    bullets: [
      'Simple yet attractive themes have the power to make the interface attractive, intuitive and responsive',
      'Fully customizable so you can sell anything, products, services, downloads, events, and more.',
      'Seamless integration with multiple currencies and multiple platforms like Amazon, eBay, Facebook, Google Shopping, and more.',
      'Highly secure online store with DDOS protection, automatic fraud detection, and PCI level compliance',
      'Compatibility with SEO and integrated marketing tools for selling online.',
      'Easy to use and understand, even for ecommerce sellers with limited technical knowledge and skills',
    ],
  };

  readonly servicesHead = { eyebrow: 'Services', title: 'Explore Big-Commerce Services' };

  readonly services = [
    { icon: 'pi-shop', title: 'Store Design & Development', text: 'Leverage our expertise to design modern and engaging online stores that excel in aesthetics, function and performance. Our expertise also extends to developing mobile stores tailored to your needs.' },
    { icon: 'pi-cog', title: 'Configuration', text: 'Setting up and configuring BigCommerce sites requires specific skills and experience, and we have both. With many years in the industry and a large number of BigCommerce online stores established to date, we are emerging as a trusted name.' },
    { icon: 'pi-palette', title: 'Theme Customization', text: 'Choose from a wide range of BigCommerce themes or customize them to suit your business needs. We support seamless theme development and customization to ensure your shopping experience.' },
    { icon: 'pi-link', title: 'API Integration', text: 'Our professionals make use of the API integration functions of BigCommerce to automate diverse duties along with commerce, publishing, business, etc. and combine a couple of apps with the platform for bringing favored results.' },
    { icon: 'pi-credit-card', title: 'Payment Gateway Integration', text: 'Secure and seamless transactions in e-commerce store by connecting different payment gateways to website through payment gateway integration. We can help you set up different payment methods for a comprehensive shopping experience.' },
    { icon: 'pi-wrench', title: 'Maintenance & Support', text: 'Keep your BigCommerce website running with reliable maintenance and support services. We guarantee that bugs and issues will be detected as soon as they appear and fixed as soon as possible.' },
  ];

  readonly processHead = { eyebrow: 'Work Process', title: 'Process We Follow' };

  readonly process = [
    { icon: 'pi-search', title: 'Discovery', text: 'At the start of the project, we collect and analyze your requirements for a custom Big Commerce store and submit an appropriate proposal.' },
    { icon: 'pi-calendar', title: 'Planning', text: 'Our professionals plan your BigCommerce shop after which assign a group of BigCommerce builders to paintings for your project.' },
    { icon: 'pi-pencil', title: 'Custom Design', text: 'Our designers will provide you custom mockups for the internet site pages and proportion them with the consumer for approval.' },
    { icon: 'pi-box', title: 'Store Set-up', text: 'We install and configure your e-trade shop and code a custom BigCommerce theme, that\'s when we send for your approval.' },
    { icon: 'pi-send', title: 'Launching', text: 'In the very last step, we join the area to the BigCommerce save and release it for your customers.' },
  ];

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
