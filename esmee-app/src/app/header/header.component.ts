import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h2 class = custom>
  header works! {{name}}</h2>`,
  styles: [
    `.custom{
        color:blue
    }`
  ]
})
export class HeaderComponent implements OnInit {
  name:string = "welcome to the header"
  constructor() { }

  ngOnInit(): void {
  }

}
