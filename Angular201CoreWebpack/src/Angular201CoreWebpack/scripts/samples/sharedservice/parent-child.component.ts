import { Component, Input, Output, OnInit} from '@angular/core';
import {SharedService} from './services/shared.service';


@Component({
    selector: 'parent',
    templateUrl: './views/samples/sharedservice/parent.component.html',
    providers: [SharedService]
})

export class ParentComponent {
    message: string;

    constructor(
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