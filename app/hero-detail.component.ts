/**
 * Created by yukui on 2016/9/19.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'my-hero-detail',
    templateUrl:'app/hero-detail.component.html',
    styleUrls:['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(private  heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach(
            (param: Params) => {
                let id = +param['id'];
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            });
    }

    goBack(): void {
        window.history.back();
    }

    save() : void{
        this.heroService.update(this.hero)
            .then(this.goBack);
    }
}