let score="33"
let stringtonumber=Number(score)
console.log(typeof stringtonumber);

let age="23a"
let stringtoagenumber=Number(age)
console.log(typeof stringtoagenumber);
console.log(stringtoagenumber);

// javascript is not strict type check
/* 
@kedgit ➜ /workspaces/Learn_Javascript (main) $ node basics/typeconversion.js

number
number
NaN 

*/

let temp=null
let nulltonumber=Number(temp)
console.log(typeof nulltonumber);
console.log(nulltonumber);

/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node basics/typeconversion.js

number
0

*/

let bool=1
let booltonumber=Boolean(bool)
console.log(typeof booltonumber);
console.log(booltonumber)

/*

@kedgit ➜ /workspaces/Learn_Javascript (main) $ node basics/typeconversion.js

boolean
true

*/