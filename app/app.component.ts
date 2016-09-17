/**
 * Created by yukui on 2016/9/17.
 */
import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2> my favorite hero is :{{myHero}}</h2>
      <p>heroes:</p>
      <ul>
        <li *ngFor = "let hero of heroes">
          {{hero.name}}
        </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes!</p>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];
}