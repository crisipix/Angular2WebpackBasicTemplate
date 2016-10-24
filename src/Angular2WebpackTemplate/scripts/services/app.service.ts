import {Injectable, Input, Output, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class AppService{
    appObject: any = { name: 'Angular', version: 2 };

    constructor(private _http: Http, private _jsonp: Jsonp) { }

    getPostsObservable() {
        let url = 'http://jsonplaceholder.typicode.com/posts';
        return this._http.get(url).map(response => response.json() || []).catch(this.handleObError);
        // return this._http.get(url).map(this.extractData);
    }

    getNewsObs() {
        let url = 'http://localhost:9091/api/news?symbol=yhoo';
        return this._http.get(url)
            .map(response => response.json() || [])
            .catch(this.handleObError);
    }
    getNews() {
        let url = 'https://finance.yahoo.com/rss/headline?s=yhoo';
        let headers = new Headers({ 'Content-Type': 'text/plain' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(url, options).toPromise()
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(this.handleError);
    }

    getNewsJP() {
        let url = 'https://finance.yahoo.com/rss/headline?s=yhoo';
        let params = new URLSearchParams();
       // params.set('search', term); // the user's search value
       // params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp.get(url,params).map(request => {
           console.log(request);//<string[]>request.json()[1]; 
        });
    }

    getAppInfoPromise()
    {
        return new Promise((resolve, reject) =>
            setTimeout(() => { return resolve(this.appObject); }, 2000)            
        );
    }

    getAppInfoObser()
    {
        console.log('kkkkk');
        return Observable.create(
            o => { setTimeout(() => { o.next(this.appObject); }, 2000); });
    }

    private handleError(error : any)
    {
        console.log('An error occured in the app service!');
        return Promise.reject(error.message || error);
    }

    private handleObError(error: any)
    {
        let errorMessage = (error.message) ? error.message : error.status ? `${error.status}-${error.statusText}` : 'server error';
        return Observable.throw(errorMessage);
    }
}
