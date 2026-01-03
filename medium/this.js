// this refer to current context
console.log(this);

// output {}

const user={
    saler:"hari",
    age:25,
    salary:function(){console.log(this)}
    
}
user.salary()  // { saler: 'hari', age: 25, salary: [Function: salary] }
user.saler="kedar"
user.salary()  // { saler: 'kedar', age: 25, salary: [Function: salary] }
console.log(typeof user.salary); // function

function chai(){
    const username="jiva"
    console.log(this.username);  // undefined
    
}
chai()

// arrow function
const work= () =>{ // explicite return in bracket
    console.log("Arrow function")
    console.log(this); // output -> {}
    
}
work()
// implicite return
const hey=(num1,num2)=> num1+num2
console.log(hey(2,5))  // 7

// explicite way to return object in ()

const returnobject=()=>({useranme:"dhoni"})
console.log(returnobject())