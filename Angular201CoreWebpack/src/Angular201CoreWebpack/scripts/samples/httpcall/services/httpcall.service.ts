import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from '../models/post';

@Injectable()
export class CallService {
    constructor(private _http: Http) { }
    nonHttpCall() { return 'Test Test';}

    getPostsPromise() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .toPromise()
            .then(function (response) {
                console.log(response.json());
                console.log(response.json()[0]);
                return response.json();
            })
            .catch(this.handleError);
    }

    getPostsObservable(): Observable<Post[]> {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .map(this.extractData)
            .catch(this.handleObservableError);
    }

    private extractData(response: Response) {
        let posts = response.json();
        return posts || {};
    }

    postData() {
        let data = { userId: 1, title: 'Best title', body: 'Best Selling Book' };
        return this._http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    deleteData(id) {
        return this._http.delete('http://jsonplaceholder.typicode.com/posts/1')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private handleObservableError(error: Response) {
        console.log('An Observable error occurred',error);
        return Observable.throw(error || 'Server Error');
    }

}
