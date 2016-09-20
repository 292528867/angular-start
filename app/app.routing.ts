/**
 * Created by yukui on 2016/9/19.
 */
import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

