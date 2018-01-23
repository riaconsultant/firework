import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit,OnDestroy {
  model={
    name:"Manoj"
  }
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){

  }

}
