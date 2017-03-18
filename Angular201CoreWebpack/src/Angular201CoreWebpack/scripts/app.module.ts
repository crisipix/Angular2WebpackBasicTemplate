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
import {ThirdPartyModule} from './samples/thirdparty/module/thirdparty.module';



import {MatchingTagsPipe} from './tagging/pipe/match-tag.pipe';
import {TaggingComponent} from './tagging/tagging.component';
import {TreeRootComponent} from './tree/tree-root.component';
import {TemplateFormComponent} from './samples/forms/template-form.component';
import {ModelDrivenFormComponent} from './samples/forms/model-form.component';
import {ModelBuilderFormComponent} from './samples/forms/model-builder-form.component';
import {SharedLeftComponent} from './samples/sharedservice/shared-left.component';
import {SharedRightComponent} from './samples/sharedservice/shared-right.component';
import {DefaultSubComponent} from './samples/sharedservice/default-sub.component';
import {ParentComponent} from './samples/sharedservice/parent-child.component';
import {HandsonComponent} from './samples/thirdparty/handson.component';


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
        ThirdPartyModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'tagging', pathMatch: 'full' },
            { path: 'tagging', component: TaggingComponent },
            { path: 'tree', component: TreeRootComponent },
            { path: 'templateform', component: TemplateFormComponent },
            { path: 'modelform', component: ModelDrivenFormComponent },
            { path: 'mbuilderform', component: ModelBuilderFormComponent },
            { path: 'left', component: SharedLeftComponent },
            { path: 'right', component: SharedRightComponent },
            { path: 'handson', component: HandsonComponent},
            {
                path: 'parentchild', component: ParentComponent,
                children: [
                    { path: '', component: DefaultSubComponent }, // url: parentchild/left
                    { path: 'left', component: SharedLeftComponent }, // url: parentchild/left
                    { path: 'right', component: SharedRightComponent } // url: parentchild/right
                ]
            },

        ])
    ],
        
    declarations: [AppComponent, TaggingComponent, MatchingTagsPipe ],
    bootstrap: [AppComponent]
})

export class AppModule { }

