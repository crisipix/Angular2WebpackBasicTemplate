import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {User} from '../models/user';
import {Post} from '../models/post';

@Injectable()
export class NestedRouteService {
    currentUser: User;
    private mockUser: User;
    constructor(private _http: Http) {
        this.mockUser = new User(1001, 'Waldo');
    }

    // get a user using a promise and observable
    // delay both by 3 seconds
    // this is fired on the oninit this call is a promise and doesn't need to finish for the parent app component.
    // aka the nested route resovles.
    // when the user comes back then we set the user and then get the users posts with the user's id on the default subpage
    getUserPromise() : Promise<User> {
        let userPromise = new Promise((resolve, reject) =>
            setTimeout(() => { resolve(this.mockUser) }, 3000)
        );

        return userPromise;
    }

    // this is fired on subscription and since the oninit needs to finish for the parent app component. 
    // when the user comes back then we get the users posts with the user's id on the default subpage
    // essentially the page wont render until this finishes. 
    getUserObservable(): Observable<User> {
        //let userObservable = Observable.create(
        //    o => { 
        //      setTimeout(o.next(this.mockUser), 10000);  setTimeout(o.complete());
        //}
        //}
        //);
        
        //return userObservable;

        let userObservable = new Observable(observer => {
            setTimeout(() => { observer.next(this.mockUser);}, 3000);
            setTimeout(() => { observer.complete(); }, 3000);
        });
        return userObservable;

    }

    getCurrentUser()
    {
        return this.currentUser;
    }

    setCurrentUser(user : User) {
        this.currentUser = user;
    }

    // if a user is null that means it wasn't retrieved and we need to retrieve it and then get the users posts.
    // if the user is not null we can just retrieve the users posts. aka return a promise to get them.
    getPostsPromise(user: User): Promise<Post[]>
    {
        if (!user) {
            let userPromise = new Promise<User>((resolve, reject) =>
                setTimeout(() => { resolve(this.mockUser) }, 3000)
            );

            return userPromise.then(user =>
                new Promise<Post[]>((resolve, reject) => {
                    setTimeout(() => { resolve(Posts.filter(p => p.userId === user.id)) }, 3000)
                }));
        }
        return new Promise((resolve, reject) =>
            setTimeout(resolve(Posts.filter(p => p.userId === user.id)), 3000)
       );
    }

    // this is fired on subscription and since the oninit needs to finish for the parent component. 
    // this post wont fire until after the result for the user comes back. 
    // when the user comes back we get the users posts with the user's id on the default subpage
    // if a user is null that means it wasn't retrieved and we need to retrieve it and then get the users posts.
    // if the user is not null we can just return an observable to the users posts. 
    getPostsObservable(user: User) {

        if (!user) {
            console.log('no user must look up users then posts');
            let userObservable = Observable.create(
                o => {
                    // when using the create observable all of the functions for next, error, complete 
                    // must be within the result observable
                    o.next(this.mockUser);
                    o.complete(console.log('got user observable'));
                }
            );

            return userObservable.flatMap((user) => new Observable(o => {
                // when creating a new observable same occurs
                // both the next and complete must be within the new ob object. 
                setTimeout(() => { o.next(Posts.filter(p => p.userId === user.id)) }, 3000);
                setTimeout(() => { o.complete(); }, 3000);
            }
            ));
        }

        return new Observable(observer => {
            setTimeout(() => { observer.next(Posts.filter(p => p.userId === user.id))}, 3000);
            setTimeout(() => { observer.complete(); }, 3000);
        });
    }

    //getPostsObservable(): Observable<Post[]> {
    //    return this._http.get('http://jsonplaceholder.typicode.com/posts')
    //        .map(this.extractData);
    //}

    //private extractData(response: Response) {
    //    let posts = response.json();
    //    return posts || {};
    //}

    //postData() {
    //    let data = { userId: 1, title: 'Best title', body: 'Best Selling Book' };
    //    return this._http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
    //        .toPromise()
    //        .then(response => response.json().id)
    //        .catch(this.handleError);
    //}

    //deleteData(id) {
    //    return this._http.delete('http://jsonplaceholder.typicode.com/posts/1')
    //        .toPromise()
    //        .catch(this.handleError);
    //}

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

export let Posts = [
    { id: 1, userId: 1001, title: 'Best title 1', body: 'Best Selling Book 1' },
    { id: 1, userId: 1002, title: 'Best title 2', body: 'Best Selling Book 2' },
    { id: 1, userId: 1002, title: 'Best title 3', body: 'Best Selling Book 3' },
    { id: 1, userId: 1001, title: 'Best title 4', body: 'Best Selling Book 4' },
    { id: 1, userId: 1001, title: 'Best title 5', body: 'Best Selling Book 5' },
    { id: 1, userId: 1004, title: 'Best title 6', body: 'Best Selling Book 6' }
];
