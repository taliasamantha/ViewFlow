import { Component, signal } from '@angular/core';
import { FooterPageComponent } from './components/footer/footer_component';
import { NavabarPageComponent } from './components/navbar/navbar_component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [NavabarPageComponent, FooterPageComponent, RouterModule, HttpClientModule],
})
export class App {
  protected readonly title = signal('angularApp');
}
