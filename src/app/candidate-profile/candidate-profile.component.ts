import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalResumeComponent } from '../modal-resume/modal-resume.component'
@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})


export class CandidateProfileComponent implements OnInit {
  

  constructor(private authService: AuthService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalResumeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
