import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import {AlertModule } from 'ng2-bootstrap';
import {CustomPipeModule} from '../../../common/pipes/module/custom-pipe.module';



import { SearchFilterComponent } from '../searchfilter.component';
import { HighlightSearchComponent } from '../highlight-search.component';
@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlertModule,
        CustomPipeModule
    ],
    declarations: [SearchFilterComponent, HighlightSearchComponent],
    exports: [SearchFilterComponent, HighlightSearchComponent],
    providers: []
})

export class SearchFilterModule {

}