import {Injectable} from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Injectable()
export class SharedService {
    sharedMessage: string;
    messageChangedEvent: EventEmitter<any>;

    constructor() {
        this.messageChangedEvent = new EventEmitter<any>();
    }

    setSharedMessage(message: string) {
        this.sharedMessage = message;
        this.messageChangedEvent.emit('');

    }
}