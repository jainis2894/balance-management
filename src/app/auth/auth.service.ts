import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../shared/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userDetails = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {}

  getUserDetails() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<User[]>(environment.login, { headers: headers });
  }
}
