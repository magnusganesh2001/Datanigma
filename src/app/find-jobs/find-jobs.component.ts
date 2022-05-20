import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  displayedColumns: string[] = ['no', 'jobTitle', 'company', 'description', 'salary'];
  dataSource = [
    {no: 1, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 2, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 3, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 4, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 5, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 6, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 7, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 8, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 9, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'},
    {no: 10, jobTitle: 'Data Engineer', company: 'Datanigma', description: 'Data engineering work', salary: '5 LPA'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openJobPage(job: any): void {
    console.log("opening job page");
    alert("Opening Job - "+job.jobTitle);

  }

}
