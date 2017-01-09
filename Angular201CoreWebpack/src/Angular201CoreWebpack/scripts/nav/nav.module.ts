import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavGroupContainerComponent } from './navgroup-container.component';
import { NavGroupComponent } from './navgroup.component';


@NgModule({
    imports: [CommonModule],
    declarations: [NavGroupContainerComponent, NavGroupComponent],
    exports: [NavGroupContainerComponent, NavGroupComponent]
})

export class NavModule { }

