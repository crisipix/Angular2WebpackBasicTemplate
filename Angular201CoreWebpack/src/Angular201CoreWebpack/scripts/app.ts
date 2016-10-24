import {Component, ViewContainerRef} from '@angular/core';



@Component({
    selector: 'my-app',
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})
    

export class AppComponent {
    title: string;

    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        this.title = 'Title Angular 2.1 Core';
    }
}
