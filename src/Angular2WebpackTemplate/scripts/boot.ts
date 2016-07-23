///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {AppComponent} from './app';
//import {HttpTestComponent} from './appCall';

import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
//bootstrap(HttpTestComponent, [HTTP_PROVIDERS]); // provide http support as well... seems odd. 
