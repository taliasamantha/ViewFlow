import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment_info';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = environment.filmListUrl;

  constructor(private http: HttpClient) {}

getMovies(page: number = 1): Observable<any> {
  const url = environment.filmListUrl.replace('PAGE_NUMBER', page.toString());
  return this.http.get(url);
}

}
