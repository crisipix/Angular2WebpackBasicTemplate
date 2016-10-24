import {Component, Input, Output, OnInit} from '@angular/core'
import { NestedRouteService } from './services/nested-route.service';
import { User } from './models/user';
import { Post} from './models/post';
import {SpinnerComponent} from '../common/images/spinner.component';


@Component({
    selector: 'default-nest',
    directives: [SpinnerComponent],
    templateUrl: './views/nested/default-nested.component.html'
})
export class DefaultNestedComponent implements OnInit {
    user: User;
    userPosts: Array<Post>;
    userPosts_o: Array<Post>;
    loadingPosts: boolean;
    constructor(private _service: NestedRouteService) {
        this.userPosts = new Array<Post>();
        this.userPosts_o = new Array<Post>();
    }

    ngOnInit() {
        this.loadingPosts = true;
        this.user = this._service.currentUser;
        this._service.getPostsPromise(this.user).then(r => this.userPosts = r);
        this._service.getPostsObservable(this.user)
            .subscribe(data => {this.userPosts_o = data},
            error => { console.log(error);},
            () => { console.log('done'); this.loadingPosts = false;});

    }
}