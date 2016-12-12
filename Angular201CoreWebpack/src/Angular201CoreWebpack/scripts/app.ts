import {Component, ViewContainerRef} from '@angular/core';
import {TreeNode} from './tree/models/node';

@Component({
    selector: 'my-app',
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})
    

export class AppComponent{
    title: string;
    rootNode: TreeNode;
    url: string;
    globalConfig: GlobalConfig;
    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        this.url = PROD_API_URL;
        this.globalConfig = new GlobalConfig();
        this.title = 'Title Angular 2.1 Core';
        //this.node.name = 'Tree House';
        let children : Array<TreeNode> = 
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
}

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var API_URL: string;
declare var PROD_API_URL: string;

export interface GlobalEnvironment {
    API_URL: string;
    PROD_API_URL: string;
}

export class GlobalConfig implements GlobalEnvironment
{
    API_URL: string;
    PROD_API_URL: string;
    constructor() {
        this.API_URL = API_URL;
        this.PROD_API_URL = PROD_API_URL;
    }
}
