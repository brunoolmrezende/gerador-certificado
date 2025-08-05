import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = '';
  activity: string = '';
  activities: string[] = [''];

  isInvalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isValidForm() {
    return this.name.length > 0 && this.activities.length > 0;
  }
}
