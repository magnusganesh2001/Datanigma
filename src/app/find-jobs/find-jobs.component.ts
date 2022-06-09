import { JobService } from './../core/services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  displayedColumns: string[] = ['no', 'title', 'company', 'description', 'salary', 'location', 'actions'];
  dataSource = [];

  constructor(private jobService: JobService) {
    this.jobService.getAllJobs().then(res => {
      this.dataSource = res.data.jobs;
    });
  }

  ngOnInit(): void {
  }

  openJobPage(job: any): void {
    console.log("opening job page");
    alert("Opening Job - "+job.title);
  }

}
