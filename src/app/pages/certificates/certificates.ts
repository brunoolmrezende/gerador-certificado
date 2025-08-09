import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { Router } from '@angular/router';
import { CertificateService } from '../../_services/certificate.service';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit {
  constructor(private router: Router, private certificateService: CertificateService) {}

  public certificates: any[] = [];

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates;
  }

  redirectToGenerateCertificate() {
    this.router.navigate(['/certificates/new']);
  }
}
