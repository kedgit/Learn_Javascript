// function addtwonum(a,b){
//     return a+b;
// }
// const res=addtwonum(2,3)
// console.log(res)

// const arr=[1,2,3,5,4,2,1,3,1,5]

// const obj={}

// for(let a=0;a<arr.length;a++){
//     if(!obj[arr[a]])
//         obj[arr[a]]=0
//     obj[arr[a]]= obj[arr[a]]+1
// }
// console.log(obj)

let name="kedar sharanabasappa mhetre"

let res=name.split(" ").map( w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ")
console.log(res);
console.log(typeof res);

