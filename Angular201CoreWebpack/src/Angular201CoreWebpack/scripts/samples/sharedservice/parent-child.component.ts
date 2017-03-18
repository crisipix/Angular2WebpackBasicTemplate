import { Component, Input, Output, OnInit} from '@angular/core';
import {SharedService} from './services/shared.service';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'parent',
    templateUrl: './views/samples/sharedservice/parent.component.html',
    providers: [SharedService]
})

export class ParentComponent {
    message: string;

    constructor(
        private _router: Router,
        private _service: SharedService
    ) {
        this._service.messageChangedEvent.subscribe(e => { this.onMessageChanged() });
    }

    onSubmit(value) {
        this._service.setSharedMessage(value.message);
    }

    onMessageChanged() {
        this.message = this._service.sharedMessage;
    }

    /*
        https://coryrylan.com/blog/introduction-to-angular-routing
    */
    navigate(link: string) {

        switch (link){
            case 'left':
                this._router.navigate(['parentchild/left']);
                console.log('left');
                break;
            case 'right':
                this._router.navigate(['parentchild/right']);

                console.log('right');
                break;
            default:
                console.log('where am I navigating?');
                break;
        }
    }
}


@Component({
    selector: 'child',
    templateUrl: './views/samples/sharedservice/child.component.html',
})

export class ChildComponent implements OnInit{
    message: string;

    constructor(private _service: SharedService) {
        this._service.messageChangedEvent.subscribe(e => { this.onMessageChanged() });
    }

    ngOnInit() {
        this.message = this._service.sharedMessage;
    }

    onSubmit(value) {
        this._service.setSharedMessage(value.message);
    }

    onMessageChanged() {
        this.message = this._service.sharedMessage;
    }

}