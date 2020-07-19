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
}
