//import {NgModule} from '@angular/core';
//import {RouterModule, Routes} from '@angular/router';



//import {MatchingTagsPipe} from './tagging/pipe/match-tag.pipe';
//import {TaggingComponent} from './tagging/tagging.component';
//import {TreeRootComponent} from './tree/tree-root.component';
//import {TemplateFormComponent} from './samples/forms/template-form.component';
//import {ModelDrivenFormComponent} from './samples/forms/model-form.component';
//import {ModelBuilderFormComponent} from './samples/forms/model-builder-form.component';
//import {SharedLeftComponent} from './samples/sharedservice/shared-left.component';
//import {SharedRightComponent} from './samples/sharedservice/shared-right.component';
//import {DefaultSubComponent} from './samples/sharedservice/default-sub.component';
//import {ParentComponent} from './samples/sharedservice/parent-child.component';
//import {HandsonComponent} from './samples/thirdparty/handson.component';
//import {Ng2BootstrapComponent } from './samples/thirdparty/ng2bootstrap.component';
//import {DragulaComponent} from './samples/thirdparty/dragula.component';
//import {HttpCallComponent} from './samples/httpcall/httpcall.component';
//import {SearchFilterComponent} from './samples/searchfilter/searchfilter.component';

//const routes: Routes = [
//        { path: '', redirectTo: 'tagging', pathMatch: 'full' },
//        { path: 'tagging', component: TaggingComponent },
//        { path: 'tree', component: TreeRootComponent },
//        { path: 'templateform', component: TemplateFormComponent },
//        { path: 'modelform', component: ModelDrivenFormComponent },
//        { path: 'mbuilderform', component: ModelBuilderFormComponent },
//        { path: 'left', component: SharedLeftComponent },
//        { path: 'right', component: SharedRightComponent },
//        { path: 'handson', component: HandsonComponent },
//        { path: 'ng2boostrap', component: Ng2BootstrapComponent },
//        { path: 'dragula', component: DragulaComponent },
//        { path: 'httpcall', component: HttpCallComponent },
//        { path: 'searchfilter', component: SearchFilterComponent },

//        {
//            path: 'parentchild', component: ParentComponent,
//            children: [
//                { path: '', component: DefaultSubComponent }, // url: parentchild/left
//                { path: 'left', component: SharedLeftComponent }, // url: parentchild/left
//                { path: 'right', component: SharedRightComponent } // url: parentchild/right
//            ]
//        },

    
//];

//@NgModule({
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
//})
//export class AppRoutingModule {

//}

//export const routingComponents = [TaggingComponent];
