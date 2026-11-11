import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** "Who we are" section: the Linnworks Certified Partner statement with the real certificate. */
@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss',
})
export class WhoWeAreComponent {}
