﻿import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import {AlertModule } from 'ng2-bootstrap';

import {CallService} from '../services/httpcall.service';

import {HttpCallComponent} from '../httpcall.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        //HttpModule,
        AlertModule
    ],
    declarations: [HttpCallComponent],
    exports: [HttpCallComponent],
    providers: [CallService]
})

export class HttpCallModule {

}