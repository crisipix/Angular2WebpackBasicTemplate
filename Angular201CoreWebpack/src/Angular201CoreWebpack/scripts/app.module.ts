﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app';
import {NavModule } from './nav/nav.module';
import {TreeModule} from './tree/tree.module';
import {CustomCommonModule} from './common/c-common.module';
import {CustomPipeModule} from './common/pipes/custom-pipe.module';
import {SampleFormModule} from './samples/forms/sample-form.module';
import {SharedServiceModule} from './samples/sharedservice/module/shared-service.module';

import {MatchingTagsPipe} from './tagging/pipe/match-tag.pipe';
import {TaggingComponent} from './tagging/tagging.component';
import {TreeRootComponent} from './tree/tree-root.component';
import {TemplateFormComponent} from './samples/forms/template-form.component';
import {ModelDrivenFormComponent} from './samples/forms/model-form.component';
import {ModelBuilderFormComponent} from './samples/forms/model-builder-form.component';
import {SharedLeftComponent} from './samples/sharedservice/shared-left.component';
import {SharedRightComponent} from './samples/sharedservice/shared-right.component';
import {ParentComponent} from './samples/sharedservice/parent-child.component';


@NgModule({
    imports: [BrowserModule,
        NavModule,
        TreeModule,
        HttpModule,
        FormsModule,
        // Including the ReactiveFormsModule in our application
        ReactiveFormsModule,
        CustomCommonModule,
        CustomPipeModule,
        SharedServiceModule,
        SampleFormModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'tagging', pathMatch: 'full' },
            { path: 'tagging', component: TaggingComponent },
            { path: 'tree', component: TreeRootComponent },
            { path: 'templateform', component: TemplateFormComponent },
            { path: 'modelform', component: ModelDrivenFormComponent },
            { path: 'mbuilderform', component: ModelBuilderFormComponent },
            { path: 'left', component: SharedLeftComponent },
            { path: 'right', component: SharedRightComponent },
            { path: 'parentchild', component: ParentComponent },

        ])
    ],
        
    declarations: [AppComponent, TaggingComponent, MatchingTagsPipe ],
    bootstrap: [AppComponent]
})

export class AppModule { }

