const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance)

// digit after decimal
console.log(balance.toFixed(2));

// round figure digit
// precision value range 1 - 21
let num=112.3
console.log(num.toPrecision(2));

// readable number format
let amount=1000000
console.log(amount.toLocaleString('en-IN'));

// ------------------------Math-------------------
console.log(Math);

console.log(Math.abs(-8));

// auto adjust higher value
console.log(Math.round(4.7));

// higher value
console.log(Math.ceil(4.6));

// lower value
console.log(Math.floor(4.6));

// min and max 
const arr=Math.min(1,2,3,4);
const arr2=Math.max(1,2,3,4);
console.log(`Min value is ${arr} and Max value is ${arr2}`);
// random value 0 - 1
const min=10;
const max=20;
console.log(Math.round(Math.random()*(max-min+1))+min);

// output
/* 


@kedgit ➜ /workspaces/Learn_Javascript (main) $ node basics/numandmaths.js
400
[Number: 100]
100.00
1.1e+2
10,00,000
Object [Math] {}
8
5
5
4
Min value is 1 and Max value is 4
13

*/