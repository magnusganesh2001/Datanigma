import { ToastrService } from 'ngx-toastr';
import { JobService } from './../core/services/job.service';
import { AuthService } from './../core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.scss']
})
export class AppliedCandidatesComponent {

  displayedColumns: string[] = ['jobTitle', 'name', 'phone', 'email', 'resume'];
  dataSource: any[] = [];

  constructor(private authService: AuthService, private jobService: JobService, private toastService: ToastrService) {
    if(this.authService.isAuthenticated()) {
      jobService.getCandidates().then(res => {
        this.dataSource = res.data.candidates;
        console.log(this.dataSource);
      }).catch(err => {
        toastService.error(err, 'Failed');
      })
    }
  }
}
