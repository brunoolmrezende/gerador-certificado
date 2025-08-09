import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';
import { CertificateService } from '../../_services/certificate.service';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css'
})
export class ItemCertificate {
  constructor(private router: Router, private certificateService: CertificateService) {}

  id: string = '';
  name: string = '';
  date: string = '';

  redirectToCertificate() {
    this.router.navigate(['/certificates', this.id]);
  }
}
