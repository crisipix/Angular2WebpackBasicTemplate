import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';
import { GlobalConfig } from '../global.config';


@Component({
    selector: 'tree',
    templateUrl: './views/tree/tree.component.html',
    providers: [GlobalConfig]

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
