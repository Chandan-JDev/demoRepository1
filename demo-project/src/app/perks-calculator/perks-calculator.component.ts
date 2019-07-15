import { Component, OnInit } from '@angular/core';
import {Employee} from './../model/employee';


@Component({
  selector: 'app-perks-calculator',
  templateUrl: './perks-calculator.component.html',
  styleUrls: ['./perks-calculator.component.css']
})
export class PerksCalculatorComponent implements OnInit {
  private employee:Employee=new Employee();
  constructor() { }

  ngOnInit() {
  }

  public calculateNet():number{
    let netSal:number=0;
    let hra :number=0;
    let da:number=0;
    if( this.employee.basic > 0 && this.employee.hra > 0 ){
       hra= this.employee.basic * this.employee.hra/100;
    }          
      
      alert(typeof netSal);
      alert(typeof hra);

    netSal = this.employee.basic + hra;    
    /*
    if( this.employee.basic > 0 && this.employee.da > 0 ){
      net = net + (this.employee.basic * this.employee.da /100);
    }
    */
    return netSal;
  }

  public logEmployee():void{
    console.log(this.employee.ename);
    console.log(this.employee.basic);
    console.log(this.employee.hra);
    console.log(this.employee.da);
    console.log(this.calculateNet());
  }

}
