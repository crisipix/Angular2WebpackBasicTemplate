import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserService } from './service/user.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    providers: [UserService]
})
export class UserModule {

}