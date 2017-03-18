import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for datepicker
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import {HotTableModule} from 'ng2-handsontable';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';

//Components
import {HandsonComponent} from '../handson.component';
import {Ng2BootstrapComponent} from '../ng2bootstrap.component';
import {DragulaComponent} from '../dragula.component';

import { DragulaService } from 'ng2-dragula/ng2-dragula';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        HotTableModule,
        DragulaModule
    ],
    declarations: [HandsonComponent,
        Ng2BootstrapComponent,
        DragulaComponent
        ],
    exports: [HandsonComponent,
        Ng2BootstrapComponent,
        DragulaComponent
    ],
    providers: [DragulaService]

})
export class ThirdPartyModule {

}
