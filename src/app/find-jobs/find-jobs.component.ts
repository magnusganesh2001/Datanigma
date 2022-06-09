import { JobService } from './../core/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  displayedColumns: string[] = ['no', 'title', 'company', 'description', 'salary', 'location', 'actions'];
  dataSource = [];

  constructor(private jobService: JobService, private router: Router, private toastService: ToastrService) {
    this.jobService.getAllJobs().then(res => {
      this.dataSource = res.data.jobs;
    });
  }

  ngOnInit(): void {
  }

  applyJob(jobId: any): void {
    console.log("opening job page");
    this.jobService.applyJob(jobId).then(res => {
      this.toastService.success('Job has been applied successfully!', 'Job');
      this.router.navigate(['']);
    }).catch(err => {
      this.toastService.error(err, 'Job');
    });
  }

}
