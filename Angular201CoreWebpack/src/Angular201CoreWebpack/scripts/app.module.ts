import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import {AppComponent} from './app';
import {TreeModule} from './tree/tree.module';
import {MatchingTagsPipe} from './tagging/pipe/match-tag.pipe';
import {TaggingComponent} from './tagging/tagging.component';
@NgModule({
    imports: [BrowserModule,
        TreeModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'tagging', pathMatch: 'full' },
            { path: 'tagging', component: TaggingComponent },
        ])
    ],
    declarations: [AppComponent, TaggingComponent,MatchingTagsPipe],
    bootstrap: [AppComponent]
})

export class AppModule { }

