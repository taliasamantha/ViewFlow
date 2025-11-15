import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home_page/home_page_component";
import { FooterPageComponent } from "./components/footer/footer_component";
import { NavabarPageComponent } from "./components/navbar/navbar_component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HomePageComponent, FooterPageComponent, NavabarPageComponent]
})
export class App {
  protected readonly title = signal('angularApp');
}
