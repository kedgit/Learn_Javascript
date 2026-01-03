// do repeated work by calling function
// function sum(num1,num2){
//     console.log(num1+num2)
// }

function sum(num1,num2){  // parameter
   return num1+num2
}
sum // reference
const res=sum(2,1) // call function at reference sum // argument
// console.log(res)

function loggin(username="unknown"){ // bydefault value
    if(!username){
        return "plean enter username"
    }
    return `${username} logged in`
}
const val=loggin()
// console.log(val);

// rest operator (collect all given values)
function calculatenums(...nums){
    return nums;
}
console.log(calculatenums(12,23,45,56))
// output 
/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/function.js
[ 12, 23, 45, 56 ]

*/

function calculatenums(value1,value2,...nums){
    return nums;
}
console.log(calculatenums(12,23,45,56))
// output 
/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/function.js
[45, 56 ]

*/
const Aadhar={
    username:"aadhar",
    price:12
}

function handleObject(anyobject){
    console.log(`username: ${anyobject.username} and price: is ${anyobject.price}`)
}
handleObject(Aadhar)

const myarray=[1,2,3,4,5]
console.log(typeof myarray); // object

function returnSecondValue(anyarray){
    return anyarray[2]
}

const valu=returnSecondValue(myarray)
console.log(valu)