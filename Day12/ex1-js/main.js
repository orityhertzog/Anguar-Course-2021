function Calculator(a, b){
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function add(){ return this.a + this.b }

Calculator.prototype.subtract = function subtract(){return this.a - this.b}

Calculator.prototype.multiply = function multiply() {return this.a * this.b}

Calculator.prototype.log = function log() {console.log('sum: '+this.add()+'\nsubtract: ' + this.subtract()
+ '\nmultiply: '+this.multiply())}

var calc1 = new Calculator(10, 2);
var calc2 = new Calculator(5, 10);
calc1.log();
setTimeout(function(){calc2.log()}, 2000);



