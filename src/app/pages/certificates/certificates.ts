import { Component } from '@angular/core';
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
  constructor(private router: Router) {}

  redirectToGenerateCertificate() {
    this.router.navigate(['/certificates/new']);
  }
}
