import { Component, OnInit, Output } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    M.toast({ html: 'User Logged In !! ', classes: 'rounded' });
  }
}
