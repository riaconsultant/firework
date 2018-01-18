import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';

import * as user from './user/index';
import * as layout from './layout/index';
import * as services from './service/index';
import { AuthGuard } from './auth.guard';
import { RouterModule,Routes } from '@angular/router';

const appRoute:Routes=[
  { path:'login',component:layout.PublicComponent,children:[]}
]

@NgModule({
  declarations: [
    ...user.usrContainer,
    ...layout.layoutContainer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoute { }
