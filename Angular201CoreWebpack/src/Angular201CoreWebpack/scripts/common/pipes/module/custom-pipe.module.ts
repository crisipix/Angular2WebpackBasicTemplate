import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchComponent} from '../component/search.component';

import {SearchFilterPipe} from '../search.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SearchComponent, SearchFilterPipe],
    exports: [SearchComponent, SearchFilterPipe]
})

export class CustomPipeModule {

}