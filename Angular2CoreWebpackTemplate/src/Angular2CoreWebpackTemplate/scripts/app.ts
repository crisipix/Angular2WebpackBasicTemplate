import {Component, ViewContainerRef} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {HomeComponent} from './home.component';
import {NestedRouteComponent} from './nested/nested-route.component'; 
//import { DashboardComponent} from './dashboard.component';
//import {ParentFormComponent} from './dynamic/parent-form.component';
//import {WidgetPageComponent} from './widget/widget.page.component'
//import {NavGroupContainerComponent} from './nav/navgroup-container.component';
//import {HttpTestComponent} from './nested/http-test.component';
//import {ParentComponent} from './inheritance/inheritance.component';  // not working right now
//import {ResolveComponent} from './dashboard/resolve.component';
//import {DashboardContainerComponent} from './dashboard/dashboard-container.component';
//import {TableComponent} from './table/table.component';
//import {SortTableComponent } from './table/sort-table.component';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],//, NavGroupContainerComponent],
    templateUrl: './views/appView.html',
    styleUrls: ['./styles/app.css']
})

@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent },
        { path: '/nestedroute/...', name: 'NestedRouting', component: NestedRouteComponent, useAsDefault: true },
        //// if there is nested routing always use the /nested/...
        //{
        //    path: '/dashboard',
        //    name: 'Dashboard',
        //    component: DashboardComponent
        //},
        //{
        //    path: '/form',
        //    name: 'Form',
        //    component: ParentFormComponent
        //},
        //{
        //    path: '/widgets',
        //    name: 'Widgets',
        //    component: WidgetPageComponent
        //},
        //{
        //    path: '/nav',
        //    name: 'Nav',
        //    component: NavGroupContainerComponent
        //},
        //{
        //    path: '/httptest',
        //    name: 'HttpTest',
        //    component: HttpTestComponent
        //},
        //{
        //    path: '/inheritance',
        //    name: 'Inheritance',
        //    component: ParentComponent
        //},
        //{
        //    path: '/resolver',
        //    name: 'Resolver',
        //    component: ResolveComponent
        //},
        //{
        //    path: '/mydashboard',
        //    name: 'MyDashboard',
        //    component: DashboardContainerComponent
        //},
        //{
        //    path: 'table',
        //    name: 'Table',
        //    component: TableComponent
        //},
        //{
        //    path: 'sortTable',
        //    name: 'SortTable',
        //    component: SortTableComponent 
        //}


        
])
export class AppComponent {
    public constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}
