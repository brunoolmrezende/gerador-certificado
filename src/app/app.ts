import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from "./_components/base-ui/base-ui";
import { CertificateService } from './_services/certificate.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates');
    this.certificateService.certificates = certificates
    ? JSON.parse(certificates)
    : [];
  }
}
