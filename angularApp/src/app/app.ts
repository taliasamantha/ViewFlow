import { Component, signal } from '@angular/core';
import { FooterPageComponent } from './components/footer/footer_component';
import { NavbarPageComponent } from './components/navbar/navbar_component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [NavbarPageComponent, FooterPageComponent, RouterModule],
})
export class App {
  protected readonly title = signal('angularApp');
}
