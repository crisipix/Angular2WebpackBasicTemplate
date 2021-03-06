﻿import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { CommonRoutingModule } from './routing/module/common.routing.module';


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
import {Ng2BootstrapComponent } from './samples/thirdparty/ng2bootstrap.component';
import {DragulaComponent} from './samples/thirdparty/dragula.component';
import {HttpCallComponent} from './samples/httpcall/httpcall.component';
import { SearchFilterComponent } from './samples/searchfilter/searchfilter.component';
import { HighlightSearchComponent } from './samples/searchfilter/highlight-search.component';
import { HightlightSampleComponent } from './samples/searchfilter/highlight-sample.component';
import { TableComponent } from './samples/tables/table.component';
import { AuthGuard } from './routing/services/auth-guard';
// Routing
import { NotFoundComponent } from './routing/notfound.component';
import { UnAuthenticatedComponent } from './routing/unauthenticated.component';
import { UnAuthorizedComponent } from './routing/unauthorized.component';

const routes: Routes = [
        { path: '', redirectTo: 'tagging', pathMatch: 'full' },
        { path: 'tagging', component: TaggingComponent },
        { path: 'tree', component: TreeRootComponent, canActivate: [AuthGuard] },
        { path: 'tree403', component: TreeRootComponent, canActivate: [AuthGuard] },
        { path: 'templateform', component: TemplateFormComponent },
        { path: 'modelform', component: ModelDrivenFormComponent },
        { path: 'mbuilderform', component: ModelBuilderFormComponent },
        { path: 'left', component: SharedLeftComponent },
        { path: 'right', component: SharedRightComponent },
        { path: 'handson', component: HandsonComponent },
        { path: 'ng2boostrap', component: Ng2BootstrapComponent },
        { path: 'dragula', component: DragulaComponent },
        { path: 'httpcall', component: HttpCallComponent },
        { path: 'searchfilter', component: SearchFilterComponent },
        { path: 'highlightfilter', component: HighlightSearchComponent },
        { path: 'highlightsample', component: HightlightSampleComponent },
        { path: 'tablesample', component: TableComponent},
        {
            path: 'parentchild', component: ParentComponent,
            children: [
                { path: '', component: DefaultSubComponent }, // url: parentchild/left
                { path: 'left', component: SharedLeftComponent }, // url: parentchild/left
                { path: 'right', component: SharedRightComponent } // url: parentchild/right
            ]
        },
        { path: 'login', component: UnAuthenticatedComponent },
        { path: 'forbidden', component: UnAuthorizedComponent },
        { path: '**', component: NotFoundComponent },

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [TaggingComponent];
