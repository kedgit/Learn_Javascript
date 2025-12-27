// JavaScript is dynamicaly typed

// code readability
console.log("hi"); 
console.log("hello")

let name="kedar"
let age=23
let isloggedIn=true
/*
    primitive datatype
    number --> 2
    string 
    bigint
    boolean
    null --> Standalone value (intensialy define null)
    undefined --> only declare not assign value 
    symbol--> unique ness
    object --> 
*/
console.log(typeof "kedar");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 23);
console.log(typeof true);

/* @kedgit ➜ /workspaces/Learn_Javascript (main) $ node basics/dataType.js
hi
hello
string
object
undefined
number
boolean

 */

const id = Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId);

const num=11234567890n;
console.log(typeof num); // bigint
const num1=11234567890;
console.log(typeof num1); // number

/* 

reference type or nonprimitive

Array
objects (broweser web event)
functions

*/
// Array
const marks=[12,3,4,5]
console.log(marks);

// object
const obj={
    department:"HR",
    year:"2",
    salary:"27,500"
}
console.log(obj);

// function 
const myFunction= function(){
    console.log("he function");
    
}
console.log(myFunction);

console.log(typeof marks);
console.log(typeof obj);
console.log(typeof myFunction);


