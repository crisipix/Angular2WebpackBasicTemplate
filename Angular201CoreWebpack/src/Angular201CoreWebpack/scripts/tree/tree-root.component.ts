import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';
import { GlobalConfig } from '../global.config';

// If you would rather have one instance per component, 
// use the providers array in the component's configuration object instead
// I only want it coming from the top level so I'll coment it out. 
@Component({
    selector: 'treeroot',
    templateUrl: './views/tree/tree-root.component.html',
    //providers: [GlobalConfig]
})
export class TreeRootComponent implements OnInit {
    rootNode: TreeNode;
    globalConfig: GlobalConfig;
    environment: string;

    constructor(globalConfig: GlobalConfig) {
        this.globalConfig = globalConfig;
        //this.globalConfig = new GlobalConfig();
        this.environment = this.globalConfig.Environment;

        //this.node.name = 'Tree House';
        let children: Array<TreeNode> =
        [
            new TreeNode('A', [
                new TreeNode('AA', []),
                new TreeNode('AB', []),
                new TreeNode('AC', []),
                new TreeNode('AD', []),
            ]),
            new TreeNode('B', [
                new TreeNode('BA', []),
                new TreeNode('BB', []),
            ]),
            new TreeNode('C', []),
            new TreeNode('D', [
                new TreeNode('DA', []),
                new TreeNode('DB', []),
                new TreeNode('DC', []),
                new TreeNode('DD', [
                    new TreeNode('DDA', []),
                    new TreeNode('DDB', []),
                    new TreeNode('DDC', []),
                ]),
            ])
        ];
        this.rootNode = new TreeNode('Tree House', children);
        console.log(this.rootNode); 
    }

    ngOnInit() {
        console.log();
    }
}
