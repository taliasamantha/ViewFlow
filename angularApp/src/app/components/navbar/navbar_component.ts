import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar_component.html',
  styleUrls: ['./navbar_component.css'],
})
export class NavbarPageComponent {}
