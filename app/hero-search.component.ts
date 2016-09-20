/**
 * Created by yukui on 2016/9/20.
 */

import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroSearchService} from "./hero-search.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}