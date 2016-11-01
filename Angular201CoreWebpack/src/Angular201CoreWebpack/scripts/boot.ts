﻿///<reference path="./../typings/globals/core-js/index.d.ts"/>
import {enableProdMode} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
enableProdMode();


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);