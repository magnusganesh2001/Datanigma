import { HomeComponent } from './home/home.component';
import { SeekerGuard } from './core/guards/seeker.guard';
import { ModalResumeComponent } from './modal-resume/modal-resume.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { JobPostComponent } from './job-post/job-post.component';
import { EmployerComponent } from './employer/employer.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerGuard } from './core/guards/employer.guard';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

const routes: Routes = [
  {path: "employer", component:EmployerComponent, canActivate: [AuthGuard, EmployerGuard]},
  {path: "job-post", component: JobPostComponent, canActivate: [AuthGuard, EmployerGuard]},
  {path: "applied-candidates", component: AppliedCandidatesComponent, canActivate: [AuthGuard, EmployerGuard]},
  {path: "applied-jobs", component: AppliedJobsComponent, canActivate: [AuthGuard, SeekerGuard]},
  {path: "candidate-profile", component: CandidateProfileComponent, canActivate: [AuthGuard]},
  {path: "modalResume", component: ModalResumeComponent, canActivate: [AuthGuard]},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
