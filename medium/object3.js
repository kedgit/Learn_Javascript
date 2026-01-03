// singletone
// const url= new Object();

const rest={}
rest.id="abc123"
rest.name="shital"
rest.logged=false

//console.log(rest);

const regular={
    email:"ked@gmail.com",
    fullname:{
        firstname:"kedar",
        lastname:"mhetre"
    }
}
//console.log(regular.fullname);

// to check property exist or not before access
// console.log(regular.hasOwnProperty('email'))

// //object keys array
// console.log(Object.keys(regular))
// // object values array
// console.log(Object.values(regular))
// // seperate key-value array
// console.log(Object.entries(regular));

const u1={
    name:"john",
    age:21
}
const u2={
    name2:"sham",
    age2:23
}
const u3={
    chai:"cofy",
    trail:"bist"
}

// combine to object
//const u1u2=Object.assign({},u1,u2) // due to same property keys name second object override values
//console.log(u1u2)
const u1u2={...u1,...u2}
//console.log(u1u2);

const u1u3=Object.assign({},u1,u3)
//console.log(u1u3)

const users=[
    {
        id:1,
        value:"one"
    },
    {
        id:2,
        value:"two"
    },
    {
        id:3,
        value:"three"
    }
]
console.log(users[1].value);

// de-structure object for repeated use of same property

const player={
    name:"rohit",
    team:"mimbai",
    match:34
}

// instead of this use de-structure of object
console.log(player.match);
console.log(player.match);

// de-structure
const score=player.match 
console.log(score)
// or 

const {match}=player

console.log(match)