import { Component, OnInit ,Output} from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  onRegister(){
    M.toast({ html: 'Registration Successful !! ', classes: 'rounded' });
  }

}
