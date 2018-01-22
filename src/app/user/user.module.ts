import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as user from './index';
import { UserRoute } from './user.route';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations:[
        ...user.usrContainer
    ],
    imports:[
        CommonModule,
        FormsModule,
        UserRoute
    ],
    exports:[
        ...user.usrContainer
    ],
    providers:[]
})

export class UserModule {}
