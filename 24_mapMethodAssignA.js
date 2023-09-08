console.log(`*********************************************************************************************`);
const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19]

const newArray = arrayNumbers.map((currentValue)=>{
          return currentValue +10 ;
})
console.log(`Adding 10 in each element are:`,newArray);

console.log(`**********************************************************************************************`);
const numbers =[20,11,40,25,23,11,9,31,60,2,19]

const cubeArray = numbers.map((currentValue)=>{
          return currentValue*currentValue*currentValue ;
})
console.log(`cube of each elements are:`,cubeArray);
console.log(`**********************************************************************************************`);


const arrray=[20,11,40,25,23,11,9,31,60,2,19]

const addIndex = arrray.map((currentValue,index)=>{
          return currentValue+index ;
})
console.log(`adding index value into its corresponding each array elements are :`,addIndex);