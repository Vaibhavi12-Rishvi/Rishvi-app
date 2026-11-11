import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../../models/home.model';
import { SERVICE_ITEMS } from '../../data/home.data';

@Component({
  selector: 'app-featured-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-services.component.html',
  styleUrl: './featured-services.component.scss',
})
export class FeaturedServicesComponent {
  readonly services: ServiceItem[] = SERVICE_ITEMS;
}
