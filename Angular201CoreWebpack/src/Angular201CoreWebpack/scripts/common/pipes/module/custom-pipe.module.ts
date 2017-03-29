import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchComponent} from '../component/search.component';

import { HighlightDirective } from '../directives/highlight-directive';

import {SearchFilterPipe} from '../search.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SearchComponent, SearchFilterPipe, HighlightDirective],
    exports: [SearchComponent, SearchFilterPipe, HighlightDirective]
})

export class CustomPipeModule {

}