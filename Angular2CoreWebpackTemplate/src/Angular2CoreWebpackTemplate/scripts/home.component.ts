import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import {AlertComponent, ProgressbarComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { ImageGenComponent } from './images/image-gen.component';
import { TextImageGenComponent } from './images/text-image-gen.component';

@Component({
    selector: 'home-comp',
    directives: [AlertComponent, ProgressbarComponent, ImageGenComponent, TextImageGenComponent],
    //template: '<h3>My First Angular 2 App</h3><alert type="info" value="45">Alert!</alert>'
    //template: `
    //        <h3>My First Angular 2 App</h3>
    //        <alert type="info" value="45">Alert!</alert>
    //        <progressbar value="25"></progressbar>
    //        `
    templateUrl: './views/home.component.html'    
})
export class HomeComponent { }