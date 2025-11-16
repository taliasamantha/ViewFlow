import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/searchService';

@Component({
  selector: 'navbar-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar_component.html',
  styleUrls: ['./navbar_component.css'],
})
export class NavbarPageComponent {
  constructor(private searchService: SearchService) {}

onSearch(term: string) {
  this.searchService.setSearchTerm(term);
}
}
