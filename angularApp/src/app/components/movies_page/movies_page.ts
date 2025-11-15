import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/serieTv_service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from '../../services/film_service';

@Component({
  selector: 'movies-page',
  standalone: true,
  templateUrl: './movies_page.html',
  styleUrls: ['./movies_page.css'],
  imports: [CommonModule, HttpClientModule],
})
export class MoviesPageComponent implements OnInit {
  episodes: any[] = [];
  movies: any[] = [];

  constructor( private movieService: FilmService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.episodes = data;
    });
    this.movieService.getMovies(1).subscribe((data) => {
      this.movies = data.result;
    });
  }
}
