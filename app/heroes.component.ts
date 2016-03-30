/**
 * Created by dev on 2016. 03. 17..
 */
import {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';



@Component({
	selector: 'my-heroes',
	//providers: [HeroService],
	templateUrl: 'app/heroes.component.html',
	styleUrl: 'app/heroes.component.css',
	directives: [HeroDetailComponent]
})
//https://angular.io/docs/ts/latest/tutorial/toh-pt1.html
export class HeroesComponent implements OnInit{


	heroes: Hero[];
	selectedHero: Hero;
	constructor(
		private _router: Router,
		private _heroService: HeroService) { }
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}

