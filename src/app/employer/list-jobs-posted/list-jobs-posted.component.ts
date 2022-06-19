import { JobService } from '../../core/services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jobs-posted',
  templateUrl: './list-jobs-posted.component.html',
  styleUrls: ['./list-jobs-posted.component.scss']
})
export class ListJobsPostedComponent implements OnInit {
  displayedColumns: string[] = ['no', 'title', 'company', 'description', 'salary'];
  dataSource = [];
  constructor(private jobService: JobService) {
    this.jobService.getCreatedJobs().then(res => {
      console.log(res.data);

      this.dataSource = res.data.jobs;
    });
  }

  ngOnInit(): void {
  }

}
