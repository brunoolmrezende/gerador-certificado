import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: Certificate[] = [];

  constructor() {}

  addCertificate(certificate: Certificate) {
    this.certificates.push({ ...certificate });
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
