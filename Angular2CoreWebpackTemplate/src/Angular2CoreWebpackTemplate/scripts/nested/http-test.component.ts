import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CallService} from './services/http-test.service';   
import {Post} from './models/post';

@Component({
    selector: 'http-test',
    directives: [AlertComponent],
    providers: [CallService],
    template: `
            <div class="row">
                <div class="col-md-12">
                        <h3>Http Test</h3>
                        <button (click)="onTestGet()">Request</button>
                        <p>Request : {{getData}}</p>

                        <button (click)="onTestHttpGet()">Get Request</button>
                        <p>Request : {{httpData | json}}</p>
    
                        <button (click)="onTestHttpGetObservable()">Get Request Observable</button>

                        <button (click)="postData()">Post Request</button>
                        <p>Request: {{postHttpData}}</p>
 
                         <button (click)="deletePost()"> Delete Post </button>
                         <input [(ngModel)]="deleteId" placeholder="Id to Delete">
                         <p>Deleted : {{deletedId }}</p>

                        <ul>
                             <li *ngFor="let post of allPosts">{{post | json}}</li>
                        </ul>
                </div>
            </div>            
            `
    //templateUrl: './views/appView.html'



})
export class HttpTestComponent {
    getData: string;
    httpData: Post;
    allPosts: Array<Post>;
    postHttpData: string;
    deleteId: number;

    constructor(private _httpService: CallService) { }

    onTestGet() {
        this.getData = this._httpService.helloWorld();
    }
    onTestHttpGet() {
        this._httpService.getPosts()
            .then(response => { this.httpData = response[0]; this.allPosts = response; console.log(response); });
    }

    onTestHttpGetObservable() {
        this._httpService
            .getPostsObservable()
            .subscribe(posts => this.allPosts = posts,
            error => this.handleError(error),
            () => console.log('Finished'));
    }

    postData() {
        this._httpService.postData().then(response => this.postHttpData = response);
    }

    deletePost() {
        this._httpService
            .deleteData(this.deleteId)
            .then(response => { this.allPosts = this.allPosts.filter(p => p.id != this.deleteId) });
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
