import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IndependentService} from '../services/independent.service';
import {SharedService} from '../services/shared.service';
import {SharedLeftComponent} from '../shared-left.component';
import {SharedRightComponent} from '../shared-right.component';
import {ParentComponent} from '../parent-child.component';
import {ChildComponent} from '../parent-child.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule        
    ],
    declarations: [
        SharedLeftComponent,
        SharedRightComponent,
        ParentComponent,
        ChildComponent
    ],
    exports: [
        SharedLeftComponent,
        SharedRightComponent,
        ParentComponent,
        ChildComponent
    ],
    providers: [SharedService, IndependentService]

})
export class SharedServiceModule{}