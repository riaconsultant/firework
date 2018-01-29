import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as user from './index';
import { UserRoute } from './user.route';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
    declarations:[
        ...user.usrContainer,
        ForgotpasswordComponent
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
