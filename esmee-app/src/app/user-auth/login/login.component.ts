import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string = 'Esmee';
  users =['Lakshmi', 'Tristan', 'Timothy', 'Mirna', 'Patrick'];

  userDetails = [
    {name:'alex', email: 'alex@gmail.com', phone:123456789},
    {name:'sarah', email: 'sarah@gmail.com', phone:198765432},
    {name:'Alan', email: 'alan@gmail.com', phone:123459876}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
