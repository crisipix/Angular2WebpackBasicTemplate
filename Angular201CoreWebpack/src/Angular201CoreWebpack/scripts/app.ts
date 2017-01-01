import {Component, ViewContainerRef} from '@angular/core';
import {GlobalConfig} from './global.config';
@Component({
    selector: 'my-app',
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css'],
    providers: [GlobalConfig]

})


// If you only want one instance of NameService across your entire app (i.e., Singleton), 
// then include it in the providers array of your root component
export class AppComponent{
    title: string;
    url: string;
    globalConfig: GlobalConfig;

    public constructor(private viewContainerRef: ViewContainerRef,
                       globalConfig: GlobalConfig) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        this.globalConfig = globalConfig;
        //this.globalConfig = new GlobalConfig();
        this.url = this.globalConfig.API_URL;
        this.title = 'Title Angular 2.1 Core';
    }
}

