import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get('https://mr-heroku-spring-boot-boilerplate.herokuapp.com/cool-cars');
  }
}
