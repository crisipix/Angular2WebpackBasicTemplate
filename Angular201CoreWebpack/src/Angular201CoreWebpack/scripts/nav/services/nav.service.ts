﻿import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NavService
{
    config: any;
    constructor(private _http: Http) {
        this.setConfig();
    }

     // this is fired on subscription and since the oninit needs to finish for the parent app component. 
    // when the config comes back then we continue
    // essentially the page wont render until this finishes. 
    getConfig(): Observable<any>
    {

        //let userObservable = new Observable(observer => {
        //    setTimeout(() => { observer.next(this.mockUser); }, 3000);
        //    setTimeout(() => { observer.complete(); }, 3000);
        //});
        //return userObservable;



        // fake some wait time. 
        let configObservable = new Observable(obs => {
            setTimeout(() => { obs.next(this.config); }, 1000);
            setTimeout(() => { obs.complete(); }, 1000);
        });
        return configObservable;


    }

    sampleHttpCall() {
        this._http.get('http://test.com').map(res => res.json()).catch(this._errorHandler);


    }

    _errorHandler(error) {
        console.log(error);
        return Observable.throw(error || "Server Error")
    }

    setConfig()
    {
        this.config = {
            left: [{
                name: 'Root', navs:
                [
                    { name: 'Home', link: 'tagging', isSelected: true},
                    { name: 'Tree', link: 'tree' },
                    { name: 'Dashboard', link: 'dashboard' },
                ],
                navgroups: [
                    {
                        name: 'Main Items', navs: [
                            { name: 'Submission State', link: 'SubmissionState', icon: 'fa-edit' },
                            { name: 'Nav', link: 'Nav', icon: 'fa-balance-scale' },
                            { name: 'Nested Routing', link: 'NestedRouting', icon: 'fa-book fa-fw' },
                            ], navgroups: [
                                {
                                    name: 'Service Calls', navs: [
                                        { name: 'Http Test', link: 'httpcall' },
                                        { name: 'Model Builder Form', link: 'mbuilderform', icon: 'fa-snapchat-ghost' },
                                    ], navgroups: [],
                                },
                                {
                                    name: 'Search Pipes', navs: [
                                        { name: 'Search Filter', link: 'searchfilter' },
                                        { name: 'Highlight Search Filter', link: 'highlightfilter' },
                                        { name: 'Highlight Sample', link: 'highlightsample'},
                                    ], navgroups: [],
                                },
                                {
                                    name: 'Auth', navs: [
                                        { name: 'Page Not Found', link: '404' },
                                        { name: 'Not Authorized', link: 'forbidden' },
                                        { name: 'Not Authenticated', link: 'login' },
                                        { name: 'Not Authorized Tree', link: 'tree403' },
                                    ], navgroups: [],
                                },
                                {
                                    name: 'Tables', navs: [
                                        { name: 'Table Sort', link: 'tablesample' },
                                    ], navgroups: [],
                                }
                            ]
                    },
                    {
                        name: 'Samples', navs: [
                            { name: 'Inheritance', link: 'Inheritance', icon: 'fa-snapchat-ghost' },
                            { name: 'Resolver', link: 'Resolver' },
                            { name: 'Dashboard Widgets', link: 'MyDashboard' },
                            { name: 'Custom Table', link: 'Table' },
                            { name: 'Sortable Table', link: 'SortTable' }
                        ], navgroups: [
                            {
                                name: 'Forms', navs: [
                                    { name: 'Template Form', link: 'templateform', icon: 'fa-snapchat-ghost' },
                                    { name: 'Model Form', link: 'modelform', icon: 'fa-snapchat-ghost' },
                                    { name: 'Model Builder Form', link: 'mbuilderform', icon: 'fa-snapchat-ghost' },
                                    { name: 'New Record Form', link: 'newrecord', icon: 'fa-snapchat-ghost' },
                                ], navgroups: [],
                            },
                            {
                                name: 'Shared', navs: [
                                    { name: 'Left Shared', link: 'left', icon: 'fa-snapchat-ghost' },
                                    { name: 'Right Shared', link: 'right', icon: 'fa-snapchat-ghost' },
                                    { name: 'Parent Child', link: 'parentchild', icon: 'fa-snapchat-ghost' },
                                ], navgroups: [],
                            }]
                    },
                    {
                        name: 'Extensions', navs: [
                            { name: 'Hanson Table', link: 'handson', icon: 'fa-edit' },
                            { name: 'Boostrap', link: 'ng2boostrap', icon: 'fa-edit' },
                            { name: 'Dragula', link: 'dragula', icon: 'fa-edit' },
                        ], navgroups: []
                    },
                ]
            }],
            right: [{
                name: 'Root',
                navs: [],
                navgroups: [
                    {
                        name: 'About',
                        navs: [
                            { name: 'Nested Routing', link: 'NestedRouting', icon: 'fa-book fa-fw' },
                            { name: 'Settings', link: 'NestedRouting', icon: 'fa-book fa-fw' }
                        ], navgroups: [], location: 'right', icon: 'fa-user'
                    }
                ]
            }]
        };
    }
}