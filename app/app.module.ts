/**
 * Created by yukui on 2016/9/17.
 */
import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        HeroSearchService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}