import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
	constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }
  heroes: Hero[]; 
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
  selectedHero: Hero;
}