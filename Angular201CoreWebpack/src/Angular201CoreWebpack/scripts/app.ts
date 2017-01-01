import {Component, ViewContainerRef} from '@angular/core';
import {GlobalConfig} from './global.config';
@Component({
    selector: 'my-app',
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})

export class AppComponent{
    title: string;
    url: string;
    globalConfig: GlobalConfig;

    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        this.globalConfig = new GlobalConfig();
        this.url = this.globalConfig.API_URL;
        this.title = 'Title Angular 2.1 Core';
    }
}

