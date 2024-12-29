import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-lst/film-lst.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }