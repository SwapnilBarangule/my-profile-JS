

console.log(`***************************************************************`);
let arrowFun =()=>{
    console.log("Good Morning, Today is Tuesday");
}
arrowFun();
console.log(`***************************************************************`);
let arrow = (n1,n2,n3=1)=>{
    let result= n1*n2*n3;
    console.log(`Multiplication is: ${n1},${n2},${n3}, is :${result}`);
}
arrow(5,5,2);
arrow(10,4);
console.log(`***************************************************************`);
let arrow1=(n1,n2,n3,n4,n5)=>{
    return n1+n2+n3+n4+n5;
}
let add=arrow1(100,100,200,349,756);
console.log(`Àddition of numbers is:${add}`);

let str=arrow1("I am", " Learning"," ES6"," Features", " In Depth");
console.log(`Addtion of string is:${str}`);