import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl+"auth/signup", userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl+"auth/login", credentials);
  }
}