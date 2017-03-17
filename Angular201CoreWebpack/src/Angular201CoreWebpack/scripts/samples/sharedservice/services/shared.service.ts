import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    sharedMessage: string;

    constructor() { }

    setSharedMessage(message: string) {
        this.sharedMessage = message;
    }
}