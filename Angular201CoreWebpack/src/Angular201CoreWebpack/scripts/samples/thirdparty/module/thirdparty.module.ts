import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for datepicker
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import {HotTableModule} from 'ng2-handsontable';

//Components
import {HandsonComponent} from '../handson.component';
import {Ng2BootstrapComponent} from '../ng2bootstrap.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        HotTableModule
    ],
    declarations: [HandsonComponent,
        Ng2BootstrapComponent],
    exports: [HandsonComponent,
        Ng2BootstrapComponent]

})
export class ThirdPartyModule {

}
