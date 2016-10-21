/**
 * Created by yukui on 2016/9/19.
 */

import {Component} from "@angular/core";

@Component({
   selector:'my-app',
    template:`
       <app-title [subtitle]="subtitle"></app-title>
       <nav>
         <a routerLink="/contact" routerLinkActive="active">contact</a>
         <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
         <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
       </nav>
       <router-outlet></router-outlet>
`,
    styleUrls:['app/app.component.css']
})

export class AppComponent{
    subtitle = '(v1)';
}