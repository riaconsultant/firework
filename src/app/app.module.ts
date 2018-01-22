import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import * as user from './user/index';
import * as layout from './layout/index';
import * as services from './service/index';
import { AuthGuard } from './auth.guard';
import { AppRoute } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ...user.usrContainer,
    ...layout.layoutContainer
  ],
  imports: [
    BrowserModule,
    AppRoute,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ...services.serviceContainer,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
