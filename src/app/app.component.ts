import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'JWTAuthApp';
  constructor(){
  }
  ngOnInit(): void {
  }
  
 
}
