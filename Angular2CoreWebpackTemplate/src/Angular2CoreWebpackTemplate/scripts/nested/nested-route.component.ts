import {Component, OnInit} from '@angular/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

import { HttpTestComponent} from './http-test.component';
import { DragulaComponent} from '../dragula.component';
import { DefaultNestedComponent} from './default-nested.component';
import { NestedRouteService } from './services/nested-route.service';
import { User } from './models/user';
import {SpinnerComponent} from '../common/images/spinner.component';
@Component({
    selector: 'nested-route',
    directives: [AlertComponent, RouterOutlet, ROUTER_DIRECTIVES, SpinnerComponent],
    providers: [NestedRouteService],
    //template: `
    //        Nested Routing
    //        <a [routerLink]="['Drag']">Drag</a>
    //        <router-outlet></router-outlet>
    //        `
    templateUrl: './views/nested/nested-route.component.html'
})

@RouteConfig([
    {
        path: '/',
        name: 'Default',
        component: DefaultNestedComponent,
        useAsDefault: true
    },
    {
        path: '/drag',
        name: 'Drag',
        component: DragulaComponent
    },
    {
        path: '/httptest',
        name: 'SubHttpTest',
        component: HttpTestComponent
    }


])


export class NestedRouteComponent implements OnInit {
    user: User;
    user_o: User;
    loadingUser: boolean;
    constructor(private _service: NestedRouteService) {
    }

    ngOnInit() {
        this.loadingUser = true;
        this._service.getUserPromise()
            .then(response => {
                this.user = response;
                this._service.setCurrentUser(this.user);

            })
            .catch(error => console.log(error));

        this._service.getUserObservable().subscribe(
            data => {
                this.user_o = data;
                // not calling this because it seems to set the service's internal 
                // user immediately not allowing the promise to call and wait on page startup. 
                // this seems to come back before the promise even kicks off. maybe because it's hot while onInit.
                // while the promise is kicked off on page resolution?
               // this._service.setCurrentUser(this.user_o);
            },
            error => { },
            () => { this.loadingUser = false;}
        );
    }
}
