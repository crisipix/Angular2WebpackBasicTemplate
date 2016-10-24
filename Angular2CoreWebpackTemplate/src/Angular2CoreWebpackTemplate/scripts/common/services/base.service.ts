import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseService {
    serviceName: string;
    constructor(_http: Http) {
        // https://github.com/angular/http/issues/65
        let _build = (<any>_http)._backend._browserXHR.build;

        (<any>_http)._backend._browserXHR.build = () => {
            let _xhr = _build();
            _xhr.withCredentials = true;
            return _xhr;
        };
        this.serviceName = '';
    }

    handleError(error: any, service: string, method: string) {
        console.error(`${service} : an error occured on ${method} because : ${error}`);
        return Promise.reject(error.message || error);
    }

    handleObservableError(error: any, service: string, method: string) {
        console.error(`${service} : an error occured on  ${method} because : ${error}`);
        return Observable.throw(error.message || error);
    }

}