import { Component, Input } from '@angular/core';
import { Film } from '../../core/models/film.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {
  @Input() selectedFilm: Film | null = null;
}