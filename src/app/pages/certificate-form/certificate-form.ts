import { Component, ViewChild, viewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

  constructor(private certificateService: CertificateService, private router: Router) { }
  @ViewChild('form') form!: NgForm;

  certificate: Certificate = {
    id: '',
    name: '',
    activities: [],
    date: ''
  };

  activity: string = '';

  isInvalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isValidForm() {
    return (
      this.certificate.name.length > 0 && this.certificate.activities.length > 0
    );
  }

  addActivity() {
    if (this.activity.length === 0) return;

    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1);
  }

  submit() {
    if (!this.isValidForm()) return;

    this.certificate.date = this.actualDate();
    this.certificate.id = uuidv4();
    this.certificateService.addCertificate(this.certificate);

    this.router.navigate(['/certificates', this.certificate.id]);

    this.certificate = this.initialStateCertificate();
    this.form.resetForm();
  }

  actualDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  initialStateCertificate(): Certificate {
    return {
      id: '',
      name: '',
      activities: [],
      date: ''
    };
  }
}
