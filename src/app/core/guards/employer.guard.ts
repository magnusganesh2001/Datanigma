import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      const data = this.authService.getTokenData();      
      if(data.type == 'Employer')
        return true;
      else
        return false;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
