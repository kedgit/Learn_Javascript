// IIFE - immediate invovked function expression
// avoid global pollution(variable conflict)
// run code once
// data private

// syntax 
/* 

( function(){
    ------logic----
} ) ()

*/

(function iif(){
    console.log("Imediate invoked function")
})();

(function iiftwo(){
    console.log("second iif function")
})();

const sum=((num1,num2)=>{
    return num1+num2
})(7,5);
console.log(sum);

((name) =>{
    console.log(`my name is:${name}`);
    
})("dude")

// output
/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/IIF.js
Imediate invoked function
second iif function
12
my name is:dude

*/