import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeComponent } from './tree.component';
import { TreeRootComponent } from './tree-root.component';


@NgModule({
    imports: [CommonModule],
    declarations: [TreeRootComponent, TreeComponent],
    exports: [TreeRootComponent, TreeComponent]
})

export class TreeModule { }

