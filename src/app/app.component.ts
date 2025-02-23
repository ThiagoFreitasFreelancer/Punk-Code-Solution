import { Component } from '@angular/core';
import { HerosComponent } from "./heros/heros.component";
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ provideAnimations() ],
  imports: [ CommonModule, LandingPageComponent]
})
export class AppComponent {
  title = 'Punk Code Solutio';
}
