 let array=[1,2,3,4,5,1];

// forcefully push at front
array.unshift(7);
console.log(array[3])

// forcefully remove from front
 array.shift();

console.log(array);

let age=new Array(23,21,24)
console.log(typeof age); // object

console.log(age);

age.push(27)
console.log(age);

// shallow copy --> ref
// deep copy --> copy of value

// check present or not ( return boolean )
console.log(array.includes(7));
console.log(array.includes(4));

// check index of element
console.log(array.indexOf(4));
console.log(array.indexOf(7));
console.log(array.lastIndexOf(1))

// array to string by join
const str=array.join();

console.log(typeof array); // object
console.log(str);
console.log(typeof str);   // string 

// slice --> just copy element and print in new array without last range

const n1=array.slice(1,3)
console.log("A: " ,array)
console.log(n1)

// splice --> take start range and remove count of elements from main array and put in new array
console.log("B: ",array);
const n2=array.splice(1,3)  // start with index 1 and delete 3 elements
console.log(n2);
console.log("c: ",array);


// add array in array
const arr1=["kedar","shiva","nitish"]
const arr2=["pavan","ismail","ritesh"]

//arr1.push(arr2);
console.log(arr1);


// add all elements as single value
const arr3=arr1.concat(arr2); // drawback single parameter
console.log(arr3);

// by spread operator // adv multiple parameter
const newarr=[...arr1,...arr2]
console.log(newarr);

// spread all values in single array
const another=[[1,2],3,[4,[5,6]]]
const real=another.flat(Infinity)
console.log(real)

// check is array
console.log(Array.isArray(arr1))

// build array of char from string
console.log(Array.from("kedar"))

// build array of char from object it return empty array get confuse array of key or value
console.log(Array.from({name: "shiva"}))

// array of variable
let score1=100;
let score2=200;
let score=300;
console.log(Array.of(score1,score2,score));

// output

/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/array.js
false
true
3
[ 1, 2, 3, 4, 5, 1 ]
object
[ 23, 21, 24 ]
[ 23, 21, 24, 27 ]
false
true
3
-1
5
object
1,2,3,4,5,1
string
A:  [ 1, 2, 3, 4, 5, 1 ]
[ 2, 3 ]
B:  [ 1, 2, 3, 4, 5, 1 ]
[ 2, 3, 4 ]
c:  [ 1, 5, 1 ]
[ 'kedar', 'shiva', 'nitish' ]
[ 'kedar', 'shiva', 'nitish', 'pavan', 'ismail', 'ritesh' ]
[ 'kedar', 'shiva', 'nitish', 'pavan', 'ismail', 'ritesh' ]
[ 1, 2, 3, 4, 5, 6 ]
true
[ 'k', 'e', 'd', 'a', 'r' ]
[]
[ 100, 200, 300 ]

*/