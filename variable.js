// var x = 101
// //s();
// // console.log(x); // assume its global object
// function s(){
//     // var x=10;   // allow reassign and redeclare
//     var x="kd";
//     console.log(x);
// }
// s();
// console.log(x);


// a=12;
// let a=14;
// function g() {
//      a = 10;   //reassign and block scoped
//     console.log(a); 
// }
// g();
// console.log(a);

const a=19;
// a=12   reassign error and block scoped
// const a=23;  redeclare error

function f(){
    const a=90;
    console.log(a);
}
f();
console.log(a);