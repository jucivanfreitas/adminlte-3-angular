// src/app/services/api-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',


})
export class ApiDataService {
  private apiUrl = 'http://localhost:3000/APIs'; // Certifique-se de que o seu servidor está realmente em execução neste URL

  constructor(private http: HttpClient) {}

  getAPIs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  saveAPIs(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
