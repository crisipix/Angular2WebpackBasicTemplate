import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import {AlertModule } from 'ng2-bootstrap';
import {CustomPipeModule} from '../../../common/pipes/module/custom-pipe.module';



import {SearchFilterComponent} from '../searchfilter.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlertModule,
        CustomPipeModule
    ],
    declarations: [SearchFilterComponent],
    exports: [SearchFilterComponent],
    providers: []
})

export class SearchFilterModule {

}