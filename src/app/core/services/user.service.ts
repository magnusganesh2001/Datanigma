import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosInstance } from 'axios';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:3000/api/user/";

  private axiosClient: AxiosInstance;
  constructor(private router: Router, private authService: AuthService) {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString(),
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      },
      baseURL: this.BASE_URL
    });
  }

  public getCandidateData(id: string) {
    return this.axiosClient.request({
      method: "get",
      url: `candidate/${id}`
    });
  }

  public uploadResume(id: string, file: File) {
    return this.axiosClient.request({
      method: "get",
      url: `upload-resume/${id}`,
      data: file
    });
  }

}
