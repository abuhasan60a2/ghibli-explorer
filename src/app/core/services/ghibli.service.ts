import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class GhibliService {
  private apiUrl = 'https://ghibli-explorer-api-74r3.vercel.app/api/films';
  private selectedFilmSubject = new BehaviorSubject<Film | null>(null);
  selectedFilm$ = this.selectedFilmSubject.asObservable();

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl)
      .pipe(
        map(films => films.sort((a, b) => 
          parseInt(b.release_date) - parseInt(a.release_date)
        ))
      );
  }

  setSelectedFilm(film: Film) {
    this.selectedFilmSubject.next(film);
  }
}
