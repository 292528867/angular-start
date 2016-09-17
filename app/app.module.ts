/**
 * Created by yukui on 2016/9/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


@NgModule({
    imports : [BrowserModule],
    declarations :[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}