import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home_page/home_page_component';
import { MoviesPageComponent } from './components/movies_page/movies_page';

export const routes: Routes = [
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'series', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent },
];
