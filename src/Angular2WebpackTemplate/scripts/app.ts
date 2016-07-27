import {Component, ViewContainerRef, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { JSONP_PROVIDERS }  from '@angular/http';

import {AppService} from './services/app.service';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css'],
    providers: [JSONP_PROVIDERS,AppService]
})

@RouteConfig([
      
])
export class AppComponent implements OnInit {
    Title: string = 'Angular 2 Webpack Template';
    public constructor(private viewContainerRef: ViewContainerRef,
    private _service: AppService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }

    ngOnInit() {
        this._service.getNewsJP().subscribe(
            news => console.log(news),
            error => console.log(error));
        //this._service.getNews.then(response => console.log(response)).catch(error => console.log(error));
    }

}
