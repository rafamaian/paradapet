import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit() {}

  // Abre perfil do usuário no Google em outra aba
  goProfile() {
    window.open('https://myaccount.google.com/');

    // Na mesma aba
    // location.href = 'https://myaccount.google.com/';
    return false;
  }
}
