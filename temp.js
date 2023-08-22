//&&
//||
//!

var temperature= -10;
if(temperature>30){
    console.log(`Its hot outside`);
    
}
else if(temperature>0 && temperature<=30)
{
    console.log(`its warm`);
}
else{
    console.log(`its cold outside`);
}

console.log(`***********|| Opeartor**********`);

var a=7;
var b= 3;
console.log(a>=b || b<=a); // true
console.log(a>b || b<a);
console.log(a<b || b>a);


console.log(`************! Operator***********`);
var a=7;
var b= 3;
console.log(!(a>b) || (b<a)); 




