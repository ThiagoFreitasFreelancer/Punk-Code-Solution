import { Component } from '@angular/core';
import { HerosComponent } from "./heros/heros.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HerosComponent]
})
export class AppComponent {
  title = 'Punk Code Solutio';
}
