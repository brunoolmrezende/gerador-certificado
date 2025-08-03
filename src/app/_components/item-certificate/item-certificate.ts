import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css'
})
export class ItemCertificate {
  id: string = '6';

  constructor(private router: Router) {}

  redirectToCertificate() {
    this.router.navigate(['/certificates', this.id]);
  }
}
