import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IndependentService} from '../services/independent.service';
import {SharedService} from '../services/shared.service';
import {SharedLeftComponent} from '../shared-left.component';
import {SharedRightComponent} from '../shared-right.component';
import {ParentComponent} from '../parent-child.component';
import {ChildComponent} from '../parent-child.component';
import {DefaultSubComponent} from '../default-sub.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule        
    ],
    declarations: [
        SharedLeftComponent,
        SharedRightComponent,
        ParentComponent,
        ChildComponent,
        DefaultSubComponent
    ],
    exports: [
        SharedLeftComponent,
        SharedRightComponent,
        ParentComponent,
        ChildComponent,
        DefaultSubComponent
    ],
    providers: [SharedService, IndependentService]

})
export class SharedServiceModule{}