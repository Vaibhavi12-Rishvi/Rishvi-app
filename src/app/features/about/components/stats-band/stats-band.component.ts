import { Component } from '@angular/core';
import { AboutStat } from '../../../../models/home.model';
import { ABOUT_STATS } from '../../data/about.data';

/** Gradient band with the headline numbers. Used on the homepage and the About Us page. */
@Component({
  selector: 'app-stats-band',
  standalone: true,
  templateUrl: './stats-band.component.html',
  styleUrl: './stats-band.component.scss',
})
export class StatsBandComponent {
  readonly stats: AboutStat[] = ABOUT_STATS;
}
