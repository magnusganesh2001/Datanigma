import { JobPostComponent } from './job-post/job-post.component';
import { EmployerComponent } from './employer/employer.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "employer", component:EmployerComponent},
  {path: "find-job", component: FindJobsComponent },
  {path: "job-post", component: JobPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}