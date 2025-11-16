import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/serieTv_service';
import { CommonModule } from '@angular/common';
import { FilmService } from '../../services/film_service';
import { SearchService } from '../../services/searchService';

@Component({
  selector: 'movies-page',
  standalone: true,
  templateUrl: './movies_page.html',
  styleUrls: ['./movies_page.css'],
  imports: [CommonModule],
})
export class MoviesPageComponent implements OnInit {
  episodes: any[] = [];
  movies: any[] = [];
  filteredMovie: any[] = [];

  constructor(private movieService: FilmService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.episodes = data;
      this.filteredMovie = data;
    });
    this.searchService.searchTerm$.subscribe((term) => {
      this.filterFilm(term);
    });
  }
  filterFilm(term:string){
    term = term.toLocaleLowerCase().trim();

    if(!term){
      this.filteredMovie = this.episodes;
      return
    }
 this.filteredMovie = this.episodes.filter(ep => {
    const title = ep?.name?.toLowerCase() || '';
    const rating = ep?.rating?.average ? ep.rating.average.toString() : '';
    const runtime = ep?.runtime ? ep.runtime.toString() : '';
    const airdate = ep?.airdate?.toLowerCase() || '';

    return (
      title.includes(term) ||
      rating.includes(term) ||
      runtime.includes(term) ||
      airdate.includes(term)
    );
  });
  }
}
