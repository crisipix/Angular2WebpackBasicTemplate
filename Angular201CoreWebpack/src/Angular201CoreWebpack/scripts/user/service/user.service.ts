import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import { generateUser } from '../../data/data';

@Injectable()
export class UserService {
    constructor() {
    }

    // get the user that returns an observable. 
    getUser(): Observable<User>
    {
        return new Observable(obs => {
            setTimeout(() => { obs.next(generateUser());},100);
            setTimeout(() => { obs.complete();},100);
        });

    }

}