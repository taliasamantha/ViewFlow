import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/searchService';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'navbar-page',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './navbar_component.html',
  styleUrls: ['./navbar_component.css'],
})
export class NavbarPageComponent {
  modalIsOpen: boolean = false;
  request = {
  username: '',
  email: '',
  message: ''
};
  constructor(private searchService: SearchService) {}

  onSearch(term: string) {
    this.searchService.setSearchTerm(term);
  }
  isOpen():void {
    this.modalIsOpen = true
    console.log(this.modalIsOpen)
  }
  closeModal():void {
    this.modalIsOpen = false
  }
  submitRequest() {
  console.log('Request inviata:', this.request);
  alert('Richiesta inviata con successo!');
  this.closeModal();
  this.request = { username: '', email: '', message: '' }; // reset
}
}
