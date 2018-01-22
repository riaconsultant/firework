import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import * as user from './index';

export const route:Routes=[
    {path:"",component:user.LoginComponent}
]

@NgModule({
    declarations:[
        ...user.usrContainer
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})

export class UserRoute {}