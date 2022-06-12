import { JobService } from './../core/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  jobs:any;
  userId: string;
  jobInDisplay = {
    "_id": "628a38053ce46c9b7cc73f5f",
    "title": "Data Analyst",
    "description": "analyze data",
    "salary": "5",
    "company": "Ancidern",
    "location": "online",
    "employer": "628a220c5b9442540e1ab1d7",
    "__v": 7,
    "candidates": [
        "628a40f423d61a50ba34c4b0",
        "62a1b05e23b3972278663451"
    ]
};

  constructor(private authService: AuthService, private jobService: JobService, private router: Router, private toastService: ToastrService) {
    this.jobService.getAllJobs().then(res => {
      this.jobs = res.data.jobs;

      this.jobInDisplay = this.jobs[0];
    });
    this.userId = this.authService.getTokenData().id;
  }

  ngOnInit(): void {
  }

  openJob(job: any) {
    console.log(job);
    this.jobInDisplay = job;
    
  }

  applyJob(jobId: any): void {
    console.log("opening job page");
    this.jobService.applyJob(jobId).then(res => {
      this.toastService.success('Job has been applied successfully!', 'Job');
      this.router.navigate(['']);
    }).catch(err => {
      this.toastService.error(err.response.data.message, 'Job');
    });
  }

}
