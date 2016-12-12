import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';
import { GlobalConfig } from '../app';


@Component({
    selector: 'tree',
    templateUrl: './views/tree/tree.component.html'
})
export class TreeComponent implements OnInit {
    @Input() node: TreeNode;
    globalConfig: GlobalConfig;
    environment: string;
    
    constructor() {
        this.globalConfig = new GlobalConfig();
        this.environment = this.globalConfig.PROD_API_URL;
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
