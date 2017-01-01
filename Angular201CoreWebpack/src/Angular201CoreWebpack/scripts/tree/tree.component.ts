import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';
import { GlobalConfig } from '../global.config';

// If you would rather have one instance per component, 
// use the providers array in the component's configuration object instead
// I only want it coming from the top app.ts level so I'll coment it out. 
@Component({
    selector: 'tree',
    templateUrl: './views/tree/tree.component.html',
    // providers: [GlobalConfig] 

})
export class TreeComponent implements OnInit {
    @Input() node: TreeNode;
    globalConfig: GlobalConfig;
    environment: string;

    constructor(globalConfig: GlobalConfig) {
        //this.globalConfig = new GlobalConfig();
        this.globalConfig = globalConfig;
        this.environment = this.globalConfig.Environment;
    }

    ngOnInit()
    {
        console.log(`Tree ${this.node.name}`);
    }

    onClick()
    {
        this.node.isCollapsed = !this.node.isCollapsed;
    }
}
