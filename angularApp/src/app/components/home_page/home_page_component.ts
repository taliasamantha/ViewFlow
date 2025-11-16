import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/serieTv_service';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/searchService';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home_page_component.html',
  styleUrls: ['./home_page_component.css'],
  imports: [CommonModule],
})
export class HomePageComponent implements OnInit {

  episodes: any[] = [];          // dati originali
  filteredCards: any[] = [];     // dati filtrati

  constructor(
    private tvService: TvService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {

    this.tvService.getSchedule().subscribe(data => {
      this.episodes = data;         // salva risultati da API
      this.filteredCards = data;    // mostra tutto all’inizio
    });

    // ascolta la barra di ricerca
    this.searchService.searchTerm$.subscribe(term => {
      this.filterCards(term);
    });
  }

  filterCards(term: string) {
    term = term.toLowerCase().trim();

    if (!term) {
      this.filteredCards = this.episodes;
      return;
    }

    this.filteredCards = this.episodes.filter(ep => {
      const serieName = ep.show?.name?.toLowerCase() || '';
      const episodeName = ep.name?.toLowerCase() || '';
      const genres = ep.show?.genres?.join(' ').toLowerCase() || '';
      const network = ep.show?.network?.name?.toLowerCase() || '';

      return (
        serieName.includes(term) ||
        episodeName.includes(term) ||
        genres.includes(term) ||
        network.includes(term)
      );
    });
  }
}
