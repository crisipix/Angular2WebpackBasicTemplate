import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/*
  need to always incude other modules you are importing. 
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TemplateFormComponent} from './template-form.component';
import {ModelDrivenFormComponent} from './model-form.component';
import {ModelBuilderFormComponent} from './model-builder-form.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [TemplateFormComponent, ModelDrivenFormComponent, ModelBuilderFormComponent],
    exports: [TemplateFormComponent, ModelDrivenFormComponent, ModelBuilderFormComponent]

})

export class SampleFormModule
{

}
