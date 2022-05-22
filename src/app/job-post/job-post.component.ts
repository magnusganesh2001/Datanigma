import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})

export class JobPostComponent implements OnInit {

  public jobPostForm !:FormGroup;

  constructor(private FormBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.jobPostForm = this.FormBuilder.group({
      jobTitle: new FormControl(''),
      Company: new FormControl(''),
      salary: new FormControl(''),
      location: new FormControl(''),
      jobDiscription: new FormControl(''),
    })
  }
  signUp(){
    this.http.post<any>('http://localhost:3000/jobPost', this.jobPostForm.value)
    .subscribe(res=>{
      alert("Job posted Successfull");
      this.jobPostForm.reset();
      this.router.navigate(['']);
    }, err=>{
      alert("Something went wrong")
    })
  }
}
