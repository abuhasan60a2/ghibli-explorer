# GhibliExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Studio Ghibli Film Explorer

A web application built with Angular that allows users to explore Studio Ghibli films. This project demonstrates various Angular concepts including components, services, dependency injection, and reactive programming with RxJS.

## Features

- Display list of Studio Ghibli films
- Real-time search functionality
- Detailed view of selected films
- Responsive design
- Two-way data binding implementation
- Parent-child component communication
- Integration with Studio Ghibli REST API

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ghibli-explorer.git
```

2. Navigate to the project directory:
```bash
cd ghibli-explorer
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── core/                 # Core functionality
│   │   ├── services/
│   │   │   └── ghibli.service.ts
│   │   └── models/
│   │       └── film.interface.ts
│   ├── components/
│   │        ├── film-list/
│   │        ├── film-details/
│   │        └── film-search/
│   ├── app.component.ts     # Root component
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts        # Root module
└── assets/                  # Static files
```

## Components Overview

### App Component
- Root component that orchestrates the application
- Manages the state of films and search functionality
- Handles communication between child components

### Film List Component
- Displays the list of films
- Implements selection functionality
- Responds to search filters

### Film Details Component
- Shows detailed information about selected film
- Displays film title, description, director, and other metadata
- Responsive layout for better user experience

### Film Search Component
- Provides real-time search functionality
- Implements two-way data binding
- Emits search events to parent component

## API Integration

The application integrates with the Studio Ghibli API:
- Base URL: https://ghibli.rest
- Endpoints used:
  - `/films`: Get all films

## Technical Implementation

### Services
- GhibliService: Handles API communication
- Implements RxJS Observables for state management

### Models
```typescript
interface Film {
    id: string;
    title: string;
    original_title: string;
    description: string;
    director: string;
    release_date: string;
    running_time: string;
    rt_score: string;
}
```

### Key Features Implementation

#### Two-way Data Binding
```typescript
<input [(ngModel)]="searchTerm">
```

#### Component Communication
```typescript
// Parent to Child
<app-film-list [films]="films">

// Child to Parent
<app-film-list (selectFilm)="onSelectFilm($event)">
```## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
