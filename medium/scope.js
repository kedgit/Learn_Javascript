// // programmer 1 global scope
// var a=300

// // programmer 2
// if(true){
//     var a=30
// }

// // programmer 1 access value of a
// //console.log(a);  // required 300 but output 30

// //devloper 1
// let b=10

// // devloper 2
// if(true){
//     let b=11
    
//     console.log("inner: ",b)
// }

// // devloper 1 access value of a
// b=7  // not redeclare but reassign in same scope
// console.log(b);

// //coder 1
// const c=99
// if(true){
//     const c=12
//     console.log(c)
// }
// // const - not allow reassign or redeclare in same scope
// console.log(c)

// call function then declare 
one()
// only function declaration
function one(){
    const username="herina"
    function child(){
        const website="youtube"
        console.log(username);
        
    }
   // console.log(website)  // error
    child()
}


// function hoisting in variable

console.log(host(3));  // access variable before declaration 
const host=function(num){  // called expression
    return num+1
}

 