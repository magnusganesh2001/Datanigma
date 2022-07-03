import { AuthService } from './../core/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalResumeComponent } from '../modal-resume/modal-resume.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userType: string;
  loggedIn: boolean;
  url: string;

  constructor(private router:Router, private authService: AuthService, public dialog: MatDialog){
    this.loggedIn = authService.isAuthenticated();
    this.url = router.url;
    this.userType = '';
  }
  
  ngOnInit(): void {
    this.authService.authorised.subscribe(res => {
      this.loggedIn = res;
      if (this.loggedIn)
        this.userType = this.authService.getTokenData().type;
      else
        this.userType = '';
    });
  }

  ngOnDestroy(): void {
    this.authService.authorised.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalResumeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
