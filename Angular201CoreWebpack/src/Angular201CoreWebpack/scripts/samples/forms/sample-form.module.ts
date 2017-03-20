import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomCommonModule} from '../../common/c-common.module';

/*
  need to always incude other modules you are importing. 
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TemplateFormComponent} from './template-form.component';
import {ModelDrivenFormComponent} from './model-form.component';
import {ModelBuilderFormComponent} from './model-builder-form.component';
import {NewRecordContainerComponent} from './new-record.container.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomCommonModule],
    declarations: [TemplateFormComponent, ModelDrivenFormComponent, ModelBuilderFormComponent, NewRecordContainerComponent],
    exports: [TemplateFormComponent, ModelDrivenFormComponent, ModelBuilderFormComponent, NewRecordContainerComponent]

})

export class SampleFormModule
{

}
