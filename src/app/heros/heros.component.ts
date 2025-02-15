import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

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

}
