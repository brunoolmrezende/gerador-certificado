import { Component, ViewChild, viewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

  constructor(private certificateService: CertificateService) { }
  @ViewChild('form') form!: NgForm;

  name: string = '';
  activity: string = '';
  activities: string[] = [];

  certificate: Certificate | undefined;

  isInvalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isValidForm() {
    return (
      this.name && this.name.length > 0 && Array.isArray(this.activities) && this.activities.length > 0
    );
  }

  addActivity() {
    if (this.activity.length === 0) return;

    this.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }

  submit() {
    if (!this.isValidForm()) return;

    this.certificate = {
      id: uuidv4(),
      name: this.name,
      activities: this.activities,
      date: this.actualDate()
    };

    this.certificateService.addCertificate(this.certificate);

    this.certificate = this.initialStateCertificate();
    this.activities = []
    this.form.resetForm();
  }

  actualDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  initialStateCertificate() : Certificate {
    return {
      id: '',
      name: '',
      activities: [],
      date: ''
    }
  }
}
