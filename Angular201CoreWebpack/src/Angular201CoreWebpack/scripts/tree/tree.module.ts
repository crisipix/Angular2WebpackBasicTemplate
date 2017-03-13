import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomPipeModule} from '../common/pipes/custom-pipe.module';

import { TreeComponent } from './tree.component';
import { TreeRootComponent } from './tree-root.component';

    
@NgModule({
    imports: [CommonModule, CustomPipeModule],
    declarations: [TreeRootComponent, TreeComponent],
    exports: [TreeRootComponent, TreeComponent]
})

export class TreeModule { }

