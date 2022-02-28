import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    displayValue = '';
    count: number = 0;
    name = 'Esmee'
    disable = false;

    getValue(val:string) {
      console.log(val);
      this.displayValue = val
    }

    counter(type:string){
      type==='add'?this.count++:this.count--;
    }

    getData(data:NgForm){
      console.log(data.value);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
