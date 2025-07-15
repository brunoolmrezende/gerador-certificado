import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, ItemCertificate],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
