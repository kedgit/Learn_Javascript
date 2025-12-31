
// Symbol for uniquely identify variable
const mykey=Symbol("key1")
// object
const obj={
    "name":"kedar",
    age:23,
    // add symbol into object like [symbol]
    [mykey]:"value",
    gender:"male",
    salary:23000,
    "loca_tion":"india"
}

// array of values from object
console.log(Array.of(Array.from(Object.values(obj)) , Array.from(Object.keys(obj))))

// array of keys from object
console.log(Array.from(Object.keys(obj)))

console.log(obj["age"])
console.log(obj.name);
console.log(obj.loca_tion);

// access symbol key value
console.log(obj[mykey])
// freeze object from ovveride
Object.freeze(obj)
obj.name="shiva"
console.log(obj)

obj.gretting= function(){
    console.log("hello js")
}

obj.nametake= function(){
  console.log(`hey user whats your name: , ${this.name}`)
}
//console.log(obj.gretting); // undefined

console.log(obj.gretting());
console.log(obj.nametake());

console.log(obj)

// output 
/* 
@kedgit ➜ /workspaces/Learn_Javascript (main) $ node medium/object.js
value
{
  name: 'kedar',
  age: 23,
  gender: 'male',
  salary: 23000,
  loca_tion: 'india',
  Symbol(key1): 'value'
}

hello js
undefined
hey user whats your name: , kedar

*/