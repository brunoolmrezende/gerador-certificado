import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  constructor() {}

  ngOnInit() {
    this.mensagem();
  }

  mensagem() {
    console.log('Mensagem from Navbar component');
  }

}
