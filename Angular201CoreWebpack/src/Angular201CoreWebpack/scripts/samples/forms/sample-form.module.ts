import {NgModule} from '@angular/core';

/*
  need to always incude other modules you are importing. 
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TemplateFormComponent} from './template-form.component';

@NgModule({
    imports: [FormsModule],
    declarations: [TemplateFormComponent],
    exports: [TemplateFormComponent]

})

export class SampleFormModule
{

}
