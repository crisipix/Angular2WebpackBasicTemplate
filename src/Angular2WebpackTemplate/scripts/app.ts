import {Component, ViewContainerRef} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})

@RouteConfig([
      
])
export class AppComponent {
    Title: string = 'Angular 2 Webpack Template';
    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}
