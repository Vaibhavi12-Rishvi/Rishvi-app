import { Component } from '@angular/core';
import { ClientLogo } from '../../../../models/home.model';
import { CLIENT_LOGOS } from '../../data/about.data';

/** "We work with" section: client logos in a slow, continuously scrolling strip. */
@Component({
  selector: 'app-clients-marquee',
  standalone: true,
  templateUrl: './clients-marquee.component.html',
  styleUrl: './clients-marquee.component.scss',
})
export class ClientsMarqueeComponent {
  readonly logos: ClientLogo[] = CLIENT_LOGOS;
}
