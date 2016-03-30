/**
 * Created by dev on 2016. 03. 29..
 */
import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html'

})
export class HeroDetailComponent implements OnInit{
  @Input()
      hero : Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams
	){

	}

	ngOnInit(){
		let id = +this._routeParams.get('id');
		this._heroService.getHeroes(id)
			.then(hero => this.hero = hero);
	}

	goBack(){
		window.history.back();
	}

}
