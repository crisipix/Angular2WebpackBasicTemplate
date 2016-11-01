import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './models/node';

@Component({
    selector: 'tree',
    template: `{{node?.name}}
{{node.children?.length}}
<ul>
    <li *ngFor="let child of node.children">
        {{child.name}}
    </li>
</ul>
`


})
export class TreeComponent implements OnInit{
    @Input() node: TreeNode;

    constructor() {


    }

    ngOnInit()
    {
        console.log(`Tree ${this.node.name}`);
    }
}
