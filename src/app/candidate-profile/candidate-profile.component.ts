import { User } from './../core/models/user.model';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JobService } from './../core/services/job.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})


export class CandidateProfileComponent implements OnInit {
  

  constructor(private authService: AuthService, private jobService: JobService) { }
  
  ngOnInit(): void {
  }

  
}
