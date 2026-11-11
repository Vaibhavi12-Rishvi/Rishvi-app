import { Component } from '@angular/core';
import { CertificationItem } from '../../../../models/home.model';
import { CERTIFICATIONS } from '../../data/home.data';

/** "Quality Standards & Accreditations": horizontal certification cards. */
@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly items: CertificationItem[] = CERTIFICATIONS;
}
