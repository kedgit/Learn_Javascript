const user={
    username:"kedar",
    age:18,
    id:true,
    getuserdetails:function(){
        // ecah function has its own execution context
        console.log("my details");
        console.log(this);
        
        
    }
    
    
}
// console.log(user.getuserdetails());
// console.log(this);

// new keyword create new instance and call constructor function
function Customer(name,sellcount,income){
    this.name=name;
    this.sellcount=sellcount
    this.income=income
    
}



// object two override current context 
 const customer1= new Customer("hira",540,23450)
 const cutsomer2= new Customer("bete",250,15456)
// console.log(Customer.prototype.sayhi=function(){
//     return "hi"+this.name
// })
// console.log(customer1.sayhi());
console.log(cutsomer2.constructor);
