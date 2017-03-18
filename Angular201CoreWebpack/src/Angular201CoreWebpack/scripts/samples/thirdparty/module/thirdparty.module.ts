import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for datepicker
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';

//Components
import {HandsonComponent} from '../handson.component';
import {Ng2BootstrapComponent} from '../ng2bootstrap.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
    ],
    declarations: [HandsonComponent,
        Ng2BootstrapComponent],
    exports: [HandsonComponent,
        Ng2BootstrapComponent]

})
export class ThirdPartyModule {

}
