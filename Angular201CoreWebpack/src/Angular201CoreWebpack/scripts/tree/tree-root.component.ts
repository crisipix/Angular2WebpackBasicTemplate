import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { FormControl }            from '@angular/forms';
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
    @Input() filter: string;
    @Output() update: EventEmitter<any>;
    items: Array<any>;
    //constructor() {
    //    this.toggleFilter = new EventEmitter<any>();
    //}

    //ngOnInit() {
    //    this.inputFilter.nativeElement.focus();
    //}

    //toggleFilterIdeas() {
    //    this.toggleFilter.emit('');
    //}

    constructor(globalConfig: GlobalConfig) {
        this.globalConfig = globalConfig;
        //this.globalConfig = new GlobalConfig();
        this.environment = this.globalConfig.Environment;
        this.update = new EventEmitter<any>();
        this.items = [{ code: '1A', desc: '1A' },
            { code: '2A', desc: '2A' },
            { code: '3A', desc: '3A' },
            { code: '4A', desc: '4A' },
            { code: '5B', desc: '5B' }
            ];
        this.filter = 'A';
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
