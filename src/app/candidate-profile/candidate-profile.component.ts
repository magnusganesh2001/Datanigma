import { ToastrService } from 'ngx-toastr';
import { UserService } from './../core/services/user.service';
import { Component } from '@angular/core';
import { JobService } from './../core/services/job.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})


export class CandidateProfileComponent {

  user: any;
  loggedUser: any;

  constructor(private router: Router, private userService: UserService, private authService: AuthService, private jobService: JobService, private toastService: ToastrService) {
    if (!authService.authorised)
      router.navigate(['']);
    this.loggedUser = authService.getTokenData();
    userService.getCandidateData(router.url.split('/').pop()+'').then(res => {
      this.user = res.data.user;
    }).catch(err => {
      this.toastService.error(err.response.data.message, 'Candidate');
      router.navigate(['']);
    });
  }

  uploadResume() {

  }

}
