import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Adotar', url: '/home', icon: 'caret-up-circle' },
    { title: 'Doar', url: '/', icon: 'caret-down-circle' },
    { title: 'Dúvidas', url: '/duvidas', icon: 'help-circle' },
    { title: 'Suporte', url: '/', icon: 'information-circle' },
    { title: 'Notificação', url: '/notificacao', icon: 'notifications' },
  ];
  constructor(
    public auth: AngularFireAuth,
    private cookieService: CookieService
  ) {

    this.cookieService.put('tema','dark');
    console.log(this.cookieService.get('tema'));
  }
}
