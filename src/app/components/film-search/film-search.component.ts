import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  onSearchTermChange(term: string) {
    this.searchTermChange.emit(term);
    this.searchChange.emit(term);
  }
}