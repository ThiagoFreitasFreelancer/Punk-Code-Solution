import { Component } from '@angular/core';
import { HerosComponent } from "./heros/heros.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HerosComponent, CommonModule]
})
export class AppComponent {
  title = 'Punk Code Solutio';
}
