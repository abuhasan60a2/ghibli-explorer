import { Component, OnInit } from '@angular/core';
import { Film } from './core/models/film.interface';
import { GhibliService } from './core/services/ghibli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  films: Film[] = [];
  filteredFilms: Film[] = [];
  selectedFilm: Film | null = null;
  searchTerm: string = '';

  constructor(private ghibliService: GhibliService) {}

  ngOnInit() {
    this.loadFilms();
    this.ghibliService.selectedFilm$.subscribe(
      film => this.selectedFilm = film
    );
  }

  loadFilms() {
    this.ghibliService.getFilms().subscribe(films => {
      this.films = films;
      this.filteredFilms = films;
    });
  }

  onSearchChange(term: string) {
    this.filteredFilms = this.films.filter(film =>
      film.title.toLowerCase().includes(term.toLowerCase()) ||
      film.original_title.toLowerCase().includes(term.toLowerCase())
    );
  }

  onSelectFilm(film: Film) {
    this.ghibliService.setSelectedFilm(film);
  }
}
