import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IndependentService} from '../services/independent.service';
import {SharedService} from '../services/shared.service';
import {SharedLeftComponent} from '../shared-left.component';
import {SharedRightComponent} from '../shared-right.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule        
    ],
    declarations: [
        SharedLeftComponent,
        SharedRightComponent
    ],
    exports: [
        SharedLeftComponent,
        SharedRightComponent
    ],
    providers: [SharedService, IndependentService]

})
export class SharedServiceModule{}