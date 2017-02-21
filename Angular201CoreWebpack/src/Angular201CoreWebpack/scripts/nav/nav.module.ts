import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from '../common/c-common.module';


import { NavGroupContainerComponent } from './navgroup-container.component';
import { NavGroupComponent } from './navgroup.component';
//import {ImageGenComponent} from '../common/images/image-gen.component';
//import {TextImageGenComponent} from '../common/images/text-image-gen.component';

@NgModule({
    imports: [CommonModule, CustomCommonModule],
    declarations: [NavGroupContainerComponent, NavGroupComponent],
    exports: [NavGroupContainerComponent, NavGroupComponent]
})

export class NavModule { }

