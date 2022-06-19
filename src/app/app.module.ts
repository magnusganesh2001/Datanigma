import { ListJobsPostedComponent } from './employer/list-jobs-posted/list-jobs-posted.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EmployerComponent } from './employer/employer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindJobsComponent } from './find-jobs/find-jobs.component'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { JobPostComponent } from './job-post/job-post.component';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { CompanyProfileComponent } from './employer/company-profile/company-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EmployerComponent,
    FindJobsComponent,
    JobPostComponent,
    HeaderComponent,
    AppliedJobsComponent,
    AppliedCandidatesComponent,
    ListJobsPostedComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
