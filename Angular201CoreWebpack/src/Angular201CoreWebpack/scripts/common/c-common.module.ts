import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';


import {ImageGenComponent} from './images/image-gen.component';
import {SpinnerComponent} from './images/spinner.component';
import {TextImageGenComponent} from './images/text-image-gen.component';

import {ValidateStart} from './validators/startswith.validator';
import {ValidationResult} from './validators/validator.result';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageGenComponent, SpinnerComponent, TextImageGenComponent],
    exports: [ImageGenComponent, SpinnerComponent, TextImageGenComponent]
})

export class CustomCommonModule {

}