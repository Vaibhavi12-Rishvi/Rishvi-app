import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactDetail, FooterColumn, PartnerBadge, SocialLink } from '../../../../models/home.model';
import { FOOTER_BADGES, FOOTER_CONTACTS, FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS, FOOTER_SOCIALS } from '../../data/home.data';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly columns: FooterColumn[] = [FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS];
  readonly contacts: ContactDetail[] = FOOTER_CONTACTS;
  readonly socials: SocialLink[] = FOOTER_SOCIALS;
  readonly badges: PartnerBadge[] = FOOTER_BADGES;
  readonly year = new Date().getFullYear();

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
