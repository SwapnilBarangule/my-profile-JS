const arrayNumbers =[20,11,40,25,37,49,9,31,60,2,19];

const res = arrayNumbers.filter((currentValue)=>{
        return currentValue>50;
})
console.log(`Numbers which are  greater than 50 are :`,res);


const res1 = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
})
console.log(`All the even numbers from given array:`,res1);


const res2 = arrayNumbers.filter((currentValue)=>{
    return currentValue%2 !=0;
})
console.log(`All the odd numbers:`,res2);



const res3 = arrayNumbers.filter((currentValue)=>{
    return currentValue% 5==0;
})
console.log(`NUmbers which are multiple of 5 are:`,res3);



const res4 = arrayNumbers.filter((currentValue)=>{
    return currentValue>20 && currentValue<50;
})
console.log(`All the numbers which are betweeen 20 and 50 are:`,res4);

