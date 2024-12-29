import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../core/models/film.interface';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-lst.component.html',
  styleUrls: ['./film-lst.component.css']
})
export class FilmListComponent {
  @Input() films: Film[] = [];
  @Input() filteredFilms: Film[] = [];
  @Input() selectedFilm: Film | null = null;
  @Output() selectFilm = new EventEmitter<Film>();

  onSelect(film: Film) {
    this.selectFilm.emit(film);
  }
}