import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from '../../../common/c-common.module';

import { TableComponent } from '../table.component';

@NgModule({
    imports: [CommonModule, CustomCommonModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule {

}