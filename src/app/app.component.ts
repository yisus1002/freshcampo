import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fresh_campo';

  constructor(public auth: AuthService){}
}
