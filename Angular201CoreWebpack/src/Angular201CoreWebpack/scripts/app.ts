import {Component, ViewContainerRef} from '@angular/core';
import {TreeNode} from './tree/models/node';

@Component({
    selector: 'my-app',
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})
    

export class AppComponent {
    title: string;
    rootNode: TreeNode;
    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        this.title = 'Title Angular 2.1 Core';
        //this.node.name = 'Tree House';
        let children : Array<TreeNode> = 
        [
            new TreeNode('A', []),
            new TreeNode('B', [])
        ];
        this.rootNode = new TreeNode('Tree House', children);
        console.log(this.rootNode);
    }
}
