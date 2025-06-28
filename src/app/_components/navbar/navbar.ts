import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
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
