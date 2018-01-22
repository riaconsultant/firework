import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { usrContainer } from './index';

@NgModule({
    declarations:[
        ...usrContainer
    ],
    imports:[
        CommonModule,
    ],
    providers:[]

})

export class UserModule {}
