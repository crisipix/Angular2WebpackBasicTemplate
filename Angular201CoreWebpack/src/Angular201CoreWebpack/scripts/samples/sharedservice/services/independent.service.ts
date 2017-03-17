import {Injectable} from '@angular/core';

@Injectable()
export class IndependentService {
    myMessage: string;

    constructor() { }

    setIndependentMessage(message: string) {
        this.myMessage = message;
    }
}