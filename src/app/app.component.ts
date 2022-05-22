import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datanigma';

  authenticated: boolean;

  constructor(private router:Router, private authService: AuthService){
    this.authenticated = this.authService.isAuthenticated();
    this.authService.authorised.subscribe(authStatus => {
      this.authenticated = authStatus;
    })
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
