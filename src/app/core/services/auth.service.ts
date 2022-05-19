import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosInstance } from 'axios';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = "http://localhost:8080/api/auth/"
  private authenticated = false;

  authorised: Subject<boolean> = new Subject<boolean>();

  private axiosClient: AxiosInstance;
  constructor(private router: Router) {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString(),
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      baseURL: this.BASE_URL
    });
    if (localStorage.getItem('user') !== null) {
      this.authenticated = true;
      this.authorised.next(this.authenticated);
    }
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public setAuthenticated(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticated = true;
    this.authorised.next(this.authenticated);
  }

  public logout(): void {
    this.authenticated = false;
    this.authorised.next(this.authenticated);
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user')+"");
  }

  public signup(user: any) {
    return this.axiosClient.request({
      method: "post",
      url: 'signup',
      data: user
    });
  }

  public login(uemail: string, upasswd: string) {
    return this.axiosClient.request({
      method: "post",
      url: 'login',
      data: {
        uemail, upasswd
      }
    });
  }

}
