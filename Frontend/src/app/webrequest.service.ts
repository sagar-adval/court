import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient ) {
    this.ROOT_URL = 'http://localhost:7300'
  }

  post(url, payload) {
    return this.http.post(`${this.ROOT_URL}/${url}`, payload)
  }
}
