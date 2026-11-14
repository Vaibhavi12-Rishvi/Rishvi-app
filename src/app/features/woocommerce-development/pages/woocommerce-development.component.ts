import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { BannerCrumb, PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { HeaderComponent } from '../../home/components/header/header.component';

/** Public WooCommerce Development page, shown at /woocommerce-development. */
@Component({
  selector: 'app-woocommerce-development',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, RevealDirective],
  templateUrl: './woocommerce-development.component.html',
  styleUrl: './woocommerce-development.component.scss',
})
export class WoocommerceDevelopmentComponent implements OnDestroy {
  private readonly theme = inject(ThemeService);
  private readonly appliedDefault = !localStorage.getItem('primaryColor');
  private readonly previousColor = this.theme.primaryColor();

  readonly crumbs: BannerCrumb[] = [{ label: 'Website Development', route: '/website-development' }];

  readonly intro = {
    eyebrow: 'WooCommerce Development',
    paragraphs: [
      'WooCommerce is one the most powerful ecommerce platform empowering more than 1.5 active online stores. As technology is transforming the way we conduct business, more and more traditional brickandmortar stores are moving online. Increased reach and options to scale are the major factors that have led to an increased number of ecommerce businesses. When it comes to building a robust, fullfledged ecommerce store, there is no better option than WooCommerce.',
      'WooCommerce is an opensource, scalable, and fully customizable platform built for WordPress sites.',
    ],
    pills: [
      { icon: 'pi-wordpress', label: 'Built for WordPress' },
      { icon: 'pi-lock-open', label: 'Open source' },
      { icon: 'pi-arrows-alt', label: 'Scalable' },
      { icon: 'pi-sliders-h', label: 'Fully customizable' },
    ],
  };

  readonly whyHead = {
    eyebrow: 'Why WooCommerce?',
    title: 'Why WooCommerce?',
    text: 'WooCommerce is a great desire for organizations and those who need to construct their on-line keep both from scratch and from the present Word Press internet site or blog. Here are a number of the blessings WooCommerce gives to its users.',
  };

  readonly why = [
    'WooCommerce is a unfastened e-trade plugin this is empowered with a strong set of equipment and functions had to get started.',
    'WooCommerce has an open-supply code base this means that the code is loose to view, use, modify, and make contributions towards.',
    'Since WooCommerce is powered with the aid of using WordPress, it permits WordPress internet site proprietors to promote on-line thru a platform they already realize and love.',
    'WooCommerce goals at making the system of launching an internet keep as brief and smooth as possible. It gives a smooth on boarding wizard that courses you all through the complete setup in much less than 5 minutes.',
  ];

  readonly featuresHead = { eyebrow: 'Features', title: 'Features of WooCommerce' };

  readonly featuresLeft = [
    'Modern & Clean Interface',
    'WordPress Content Integration',
    'Pre-installed payment gateways',
    'Geo-location Support',
    'Automatic Taxes',
    'Cart Behavior',
    'Fast Page Loading Speed',
    'Add/Manage Products',
    'Product Types',
  ];

  readonly featuresRight = [
    'Shipping Calculations',
    'Flexible Shipping Destinations',
    'Multiple Shipping Methods',
    'Select Customer Address',
    'Search Engine Optimization',
    'Simplified Coupon System',
    'Product Reviews',
    'Owner Verification',
    'Reporting',
  ];

  readonly servicesHead = { eyebrow: 'Services', title: 'Explore WooCommerce Services' };

  readonly services = [
    { icon: 'pi-cog', text: 'We comprise custom functionalities for the web shops to suit the client`s necessities to perfection. Avail our WooCommerce internet site customization offerings for themes, modules, and plugins to increase the competencies and functionalities in addition to get the preferred appearance and sense of your e-trade store.' },
    { icon: 'pi-shopping-cart', text: 'We are extending all the features you need to develop a successful online store. We handle all aspects of WooCommerce ecommerce development, from attractive design to integration of features such as one-click payments, social networks, shipping methods, payment gateways, and more.' },
    { icon: 'pi-palette', text: 'Our WooCommerce developers are adept on the artwork of designing distinguished e-trade websites. Leveraging the bendy nature of WooCommerce, our innovative UX/UI designer’s layout custom designed WooCommerce issues that upload a visible enchantment to the web keep and fee to the business.' },
    { icon: 'pi-puzzle', text: 'As WooCommerce experts, we understand the importance of providing customer-centric solutions that meet customer needs and expectations. We are specialized in developing custom extensions and plugins that are bug-free and enrich your online store with desired features.' },
    { icon: 'pi-sync', text: 'We offer steady and clean migration in your current e-trade keep from every other platform to WooCommerce. We make certain that the whole manner is accomplished in a glitch-unfastened way preserving your current products, orders, and clients steady, and in the shortest time-frame.' },
    { icon: 'pi-headphones', text: 'Our professional group provides dependable ongoing upkeep and support services for your WooCommerce store. We make certain that its miles constantly up and running, with instantaneously decision of insects and overall performance issues, in order that it constantly supplies the excellent consumer studies in any respect times.' },
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
