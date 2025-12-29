// memory management in javascript
// two space 1. stack 2. heap
// stack (primitive)--> copy of value 
// heap(non-primitive) --> ref of memory

let value="memory";
let another=value // only give copy of value

another="managemnet"

console.log(value);

console.log(another);

let users1={
    email:"kedar12@gmail.com",
    upi:"phonepay"
}

let users2=users1
users2.email="change13@gmail.com"

console.log(users1.email) // reference change apply for all ref variables