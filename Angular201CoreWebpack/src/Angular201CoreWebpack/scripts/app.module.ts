import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import {AppComponent} from './app';
import {NavModule } from './nav/nav.module';
import {TreeModule} from './tree/tree.module';
import {CustomCommonModule} from './common/c-common.module';

import {MatchingTagsPipe} from './tagging/pipe/match-tag.pipe';
import {TaggingComponent} from './tagging/tagging.component';
import {TreeRootComponent} from './tree/tree-root.component';

@NgModule({
    imports: [BrowserModule,
        NavModule,
        TreeModule,
        HttpModule,
        CustomCommonModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'tagging', pathMatch: 'full' },
            { path: 'tagging', component: TaggingComponent },
            { path: 'tree', component: TreeRootComponent },
        ])
    ],
        
    declarations: [AppComponent, TaggingComponent, MatchingTagsPipe ],
    bootstrap: [AppComponent]
})

export class AppModule { }

