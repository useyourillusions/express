import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = environment;

  constructor(
    private httpClient: HttpClient
  ) {}

  getSmth(): any {
    return this.httpClient.get(this.env.apiUrl + 'test');
  }

  signUp(body): any {
    return this.httpClient.post(this.env.apiUrl + 'api/sign-up', body);
  }

  signIn(body): any {
    return this.httpClient.post(this.env.apiUrl + 'api/sign-in', body);
  }

  getUser(params: {email: string}) {
    return this.httpClient.get(this.env.apiUrl + 'api/user', { params });
  }

  createEvent(body): any {
    return this.httpClient.post(this.env.apiUrl + 'api/events', body);
  }

  getEventById(params: {id: string}) {
    return this.httpClient.get(this.env.apiUrl + 'api/events' , { params });
  }

  getAllEvents() {
    return this.httpClient.get(this.env.apiUrl + 'api/events');
  }
}