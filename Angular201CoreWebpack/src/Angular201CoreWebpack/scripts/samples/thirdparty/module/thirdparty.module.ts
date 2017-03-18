import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import {HandsonComponent} from '../handson.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HandsonComponent],
    exports: [HandsonComponent]

})
export class ThirdPartyModule {

}
