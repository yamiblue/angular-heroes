import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
	constructor(
    private heroService: HeroService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  heroes: Hero[]; 
  selectedHero: Hero;
}