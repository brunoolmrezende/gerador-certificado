import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificate } from './_components/item-certificate/item-certificate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, ItemCertificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
