import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from '../../common/c-common.module';
import { UserModule } from '../../user/user.module';

//Modules
import { NotFoundComponent } from '../notfound.component';
import { UnAuthenticatedComponent } from '../unauthenticated.component';
import { UnAuthorizedComponent } from '../unauthorized.component';

import { AuthGuard } from '../services/auth-guard';

@NgModule({
    imports: [CommonModule, CustomCommonModule],
    declarations: [NotFoundComponent, UnAuthenticatedComponent, UnAuthorizedComponent],
    exports: [NotFoundComponent, UnAuthenticatedComponent, UnAuthorizedComponent],
    providers: [AuthGuard]

})

export class CommonRoutingModule {

}