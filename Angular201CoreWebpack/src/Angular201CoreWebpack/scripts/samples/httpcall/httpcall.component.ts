import {Component} from '@angular/core';
import {CallService} from './services/httpcall.service';
import {Post} from './models/post';

@Component({
    selector: 'http-test',
    providers: [CallService],
    templateUrl: './views/samples/httpcall/httpcall.component.html'
})
export class HttpCallComponent {
    getData: string;
    firstPost: Post;
    allPosts: Array<Post>;
    postedData: string;
    deleteId: number;
    error: string;

    constructor(private _httpService: CallService) { }

    onTestGet() {
        this.getData = this._httpService.nonHttpCall();
    }
    getPostsByPromise() {
        this.allPosts = [];
        this._httpService.getPostsPromise()
            .then(response => {
                this.firstPost = response[0];
                this.allPosts = response; console.log(response);
            })
            .catch(error => this.error = error.message);
    }

    getPostsByObservable() {
        this.allPosts = [];
        this._httpService
            .getPostsObservable()
            .subscribe(
            posts => {
                this.allPosts = posts
                this.firstPost = posts[0];

            },
            error => { this.handleError(error); this.error = error.message; },
            () => console.log('Finished Getting Posts From Observable Call'));
    }

    postData() {
        this._httpService.postData()
            .then(response => this.postedData = JSON.stringify(response))
            .catch(error => this.error = error.message);
    }

    deletePost() {
        this._httpService
            .deleteData(this.deleteId)
            .then(response => {
                this.allPosts = this.allPosts.filter(p => p.id != this.deleteId);
                console.log(response);

            })
            .catch(error => this.error = error.message);;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
