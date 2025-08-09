import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = '';
  activity: string = '';
  activities: string[] = [];

  certificate: Certificate | undefined;

  isInvalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isValidForm() {
    return this.name.length > 0 && this.activities.length > 0;
  }

  addActivity() {
    this.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }

  submit() {
    if (!this.isValidForm()) return;

    this.certificate = {
      name: this.name,
      activities: this.activities
    };

    console.log(this.certificate);
  }
}
