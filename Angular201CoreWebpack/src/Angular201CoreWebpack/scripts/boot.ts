///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app';

import {enableProdMode} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app.module';

enableProdMode();


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);