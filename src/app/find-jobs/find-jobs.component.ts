import { JobService } from './../core/services/job.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../core/services/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss'],
})
export class FindJobsComponent {
  displayedColumns: string[] = [
    'job'
  ];
  dataSource!: MatTableDataSource<JobList>;
  userId: string;
  searchText: string = '';
  jobInDisplay: JobList | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private authService: AuthService,
    private jobService: JobService,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.jobInDisplay = undefined;
    this.jobService.getAllJobs().then((res) => {
      const jobList = res.data.jobs;
      // const jobList = [
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      //   {
      //     "skills": [],
      //     "languages": [],
      //     "benefits": [],
      //     "_id": "628a38053ce46c9b7cc73f5f",
      //     "title": "Data Analyst",
      //     "description": "analyze data",
      //     "salary": "5",
      //     "company": "Ancidern",
      //     "location": "online",
      //     "employer": "628a220c5b9442540e1ab1d7",
      //     "__v": 7,
      //     "candidates": [
      //         "628a40f423d61a50ba34c4b0",
      //         "62a1b05e23b3972278663451"
      //     ]
      //   },
      // ];
      this.dataSource = new MatTableDataSource<JobList>(jobList);
      this.dataSource.paginator = this.paginator;
    });
    this.userId = this.authService.getTokenData().id;
  }

  applyFilter() {
    const filterString = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterString;
    this.jobInDisplay = undefined;
  }

  openJob(job: JobList) {
    this.jobInDisplay = job;
  }

  applyJob(jobId: any): void {
    console.log('opening job page');
    this.jobService
      .applyJob(jobId)
      .then((res) => {
        this.toastService.success('Job has been applied successfully!', 'Job');
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.toastService.error(err.response.data.message, 'Job');
      });
  }
}

export interface JobList {
  skills: string[];
  languages: string[];
  benefits: string[];
  _id: string;
  title: string;
  description: string;
  salary: string;
  company: string;
  location: string;
  employer: string;
  candidates: string[];
  // "urgent": boolean;
}
