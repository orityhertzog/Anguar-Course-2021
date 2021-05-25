import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex7-calc';
  //date
  num1 :number = 0;
  num2 :number = 0;
  results :string[] = [];

  //method

  setNum1(val1 :string){
    this.num1 = Number(val1);
  }

  setNum2(val2 :string){
    this.num2 = Number(val2);
  }

  print(a :number, b: number, res: number, symbol :string) :string{
    return `${a} ${symbol} ${b} = ${res}`;
  }

  add(a :number, b :number) :number{
    return  a + b;
    
  }

  multiply(a :number, b :number) :number{
    return  a * b;
   
  }

  subtract(a :number, b :number) :number{
    return a - b;
    
  }

  log() :void{
    let addRes :number = this.add(this.num1, this.num2);
    let multiplyRes :number = this.multiply(this.num1, this.num2);
    let subtractRes :number = this.subtract(this.num1, this.num2);
    this.results[0] = this.print(this.num1,this.num2,addRes,"+");
    this.results[1] = this.print(this.num1,this.num2,multiplyRes,"*")
    this.results[2] = this.print(this.num1,this.num2,subtractRes, "-")
  }
}