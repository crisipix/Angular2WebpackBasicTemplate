import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ImageGenComponent} from './images/image-gen.component';
import {SpinnerComponent} from './images/spinner.component';
import {TextImageGenComponent} from './images/text-image-gen.component';
import {NewRecordComponent} from './components/new-record.component';

import {ValidateStart} from './validators/startswith.validator';
import {StartsWithValidatorDirective} from './validators/starts-with.validator.directive';
import {StartsWithValidator} from './validators/starts-with.validator.directive';
import { ValidationResult } from './validators/validator.result';
import { GenericSort } from './sorters/generic-sorter';
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ImageGenComponent, SpinnerComponent, TextImageGenComponent, NewRecordComponent, StartsWithValidatorDirective],
    exports: [ImageGenComponent, SpinnerComponent, TextImageGenComponent, NewRecordComponent, StartsWithValidatorDirective],
    providers: [GenericSort]
})

export class CustomCommonModule {

}