import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';

@Component({
    selector: 'tree',
    templateUrl:'./views/tree/tree.component.html'
})
export class TreeComponent implements OnInit{
    @Input() node: TreeNode;

    constructor() {

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
