/**
 * Created by yukui on 2016/9/17.
 */
import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    title = 'Tour of Heroes';

    hero: Hero = {
        id: 1,
        name: 'Mr. Nice'
    };

    heroes: Hero[];
    selectHero: Hero;

    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService,
                private router: Router) {
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h != hero);
                if (this.selectHero === hero) {
                    this.selectHero = null;
                }
            });
    }
}