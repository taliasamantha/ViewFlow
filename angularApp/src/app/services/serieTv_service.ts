import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment_info';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  private apiUrl = environment.tvmazeApiShow;

  constructor(private http: HttpClient) {}

  // Metodo per ottenere i dati della schedule
  getSchedule(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
