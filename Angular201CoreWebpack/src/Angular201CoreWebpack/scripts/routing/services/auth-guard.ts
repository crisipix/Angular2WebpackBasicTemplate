import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../user/service/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _userService: UserService,
        private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._userService.getUser()
            .map(data => {
                if (!data) {
                    //Redirect the user before denying them access to this route
                    this._router.navigate(['/login']);
                    return false;
                }
                if (data.username && data.entitlements.length === 0) {
                    this._router.navigate(['/forbidden']);
                    return false;
                }
                if (data.username && data.entitlements.length > 0) {
                    let entitled =  this.verifyEntitlements(route, data.entitlements);

                    if (!entitled) {
                        this._router.navigate(['/forbidden']);
                        return false;
                    }
                    return true;
                }
            })
            .catch(error => error);

    }

    verifyEntitlements(route: ActivatedRouteSnapshot, entitlements: Array<string>): Boolean
    {
        let parameters = route.url[0].parameters;
        let path = route.url[0].path;

        return entitlements.filter(e => e === path).length > 0;
    }
}