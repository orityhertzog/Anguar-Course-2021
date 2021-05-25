import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex7-calc';
  //data
  num1 :number = 0;
  num2 :number = 0;
  
  sum :number | null = null;
  product :number | null = null;
  subtract :number | null = null;

  get hasResults() :boolean {
    return (this.sum == null) && (this.product == null) && (this.subtract == null);
  }

  //methods
  reset(){
    this.sum = null;
    this.product = null;
    this.subtract = null;
}

  setNum1(value :string){
     this.num1 = Number(value);
     this.reset();
  }

  setNum2(value :string){
    this.num2 = Number(value);
    this.reset();
 }

 calc(){
   this.sum = this.num1 + this.num2;
   this.product = this.num1 * this.num2; 
   this.subtract = this.num1 - this.num2;
 }
}