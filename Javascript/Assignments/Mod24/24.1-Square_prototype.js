function square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }

square.prototype.isSquare= function(){
    return this.a=== this.b && this.c===this.d && this.a===this.d?
    true:false;
}
const mySquare= new square(2,2,2,2);
console.log(mySquare.isSquare());
