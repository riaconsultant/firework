import {} from '@angular/common';
import {} from '@angular/router';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Routes } from '@angular/router/src/config';
import * as user from './index';

export const route:Routes=[
    {path:"",component:user.LoginComponent}
]

@NgModule({
    declarations:[],
    imports:[],
    exports:[]
})

export class UserRoute {}