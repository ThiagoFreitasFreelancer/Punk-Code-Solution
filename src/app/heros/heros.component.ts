import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
  imports: [CommonModule, FormsModule]
})
export class HerosComponent {

  hero: Hero = {
    id: 1,
    name: "Batmann"
  };

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {

    this.selectedHero = hero;

  }

}
