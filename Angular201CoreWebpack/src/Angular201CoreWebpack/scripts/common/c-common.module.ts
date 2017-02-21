import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';


import {ImageGenComponent} from './images/image-gen.component';
import {SpinnerComponent} from './images/spinner.component';
import {TextImageGenComponent} from './images/text-image-gen.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageGenComponent, SpinnerComponent, TextImageGenComponent ],
    exports: [ImageGenComponent, SpinnerComponent, TextImageGenComponent]
})

export class CustomCommonModule {

}