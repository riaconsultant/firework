import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import * as user from './user/index';
//import * as layout from './layout/index';
import * as services from './service/index';
import { AuthGuard } from './auth.guard';
import { RouterModule,Routes, PreloadAllModules } from '@angular/router';

const appRoute:Routes=[  
  {path:"login", component:user.LoginComponent},
  {path:"register", component:user.RegistrationComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path:"**", component:user.PagenotfoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoute { }
