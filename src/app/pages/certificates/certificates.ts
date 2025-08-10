import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { Router } from '@angular/router';
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit {

  certificates: Certificate[] = [];

  constructor(private router: Router, private certificateService: CertificateService) {}

  redirectToGenerateCertificate() {
    this.router.navigate(['/certificates/new']);
  }

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates.reverse();
  }
}
