// different ways to create object

// // 1. literel/common way
// const person={
//   name:"kedar",
//   age:24,
//   location:"india"
// }
// console.log(person);


// // 2.using new object
// const person1=new Object();
// person1.name="raj";
// person1.age=25;

// console.log(person1);

// // 3. constructor function
// function user(name,age){
//    this.name=name
//    this.age=age
// }
// const p1=new user("hari",26)

// console.log(typeof user);  // function
// console.log(p1);

// // 4.ES6 class

// class customer{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// const c1=new customer("sagar",23)
// console.log(c1);
// console.log(typeof customer); // function
// console.log(typeof c1); // object

// // 5.json parse
// const obj=JSON.parse('{"name":"kohali"}')
// console.log(typeof obj); // object
// console.log(obj);

// Singleton  (only one instance of class (global access))
// IIF - immediate invoked function js treat as expression so call it execution time by js auto
// IIFE creates the scope and control logic; getInstance() creates the instance
// const store=(function(){
//   return{

//   };
// })(); // undefined

// design patteren 
const Singleton=(function(){
  let instance
  function createInstance(){
    return {
      name:"i am only one"
    };
  }
    return {
      getInstance(){
      if(!instance){ //if not instance then create first else getcall
        instance=createInstance()
      }
      return instance
    }
  }
})();

const a=Singleton.getInstance();
const b=Singleton.getInstance();
console.log(a==b); // both are refer to same object if true return
// output
// @kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/object2.js
// true


// let a;
// console.log(!a); // true

// let k=2;
// console.log(!k); //false
