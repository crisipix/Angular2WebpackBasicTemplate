import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app';
import {TreeModule} from './tree/tree.module';

@NgModule({
    imports: [BrowserModule, TreeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

