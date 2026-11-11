import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly trustItems = [
    { icon: 'pi-verified', label: 'Linnworks Certified Partner' },
    { icon: 'pi-building', label: 'Odoo Partner' },
    { icon: 'pi-map-marker', label: 'UK-based team' },
  ];

  readonly systems = [
    { name: 'Linnworks', status: 'Synced', tone: 'ok' },
    { name: 'Shopify', status: 'Synced', tone: 'ok' },
    { name: 'Odoo ERP', status: 'Syncing', tone: 'busy' },
  ];
}
