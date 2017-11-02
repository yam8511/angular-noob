import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

// template 和 templateUrl 如果同時存在，會顯示 最下面的key值
// styles 和 styleUrl 如果同時存在，會顯示 最下面的key值
@Component({
  selector: 'app-my-heroes',
  // template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
  templateUrl: './heroes.component.html',
  // styles: [`
  //   h1 {
  //     color: #369;
  //     font-family: Arial, Helvetica, sans-serif;
  //     font-size: 250%;
  //   }
  // `],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
    this.hero = {
      id: 1,
      name: 'Zuolar'
    };
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(herores => this.heroes = herores);
  }

  toCapitalizeCase(letter: string, hero: Hero): void {
    hero.name = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
