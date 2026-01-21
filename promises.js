
// const promise1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("Async task completed!");
//         let c=10+12
//         if(c>20){
//             resolve()
//         }
//         else{
//             reject()
//         }
       
//     }, 1000);
// });

// promise1.then(() => {
//     console.log("Promise completed!");
// }).catch(() => {
//     console.log("Promise Rejected!");
// }).finally(()=>{
//     console.log("always promise!");
    
// })

// second way create promise
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("order product");
        let product="watch"
        let payment="done"
        if(payment=="done")
            resolve(product)
        else
            reject(product)
    },1000)
}).then((product)=>{
    console.log(product,"Order Succesful"); 
}).catch((product)=>{
    console.log(product,"Order Canceled");
    
}).finally(()=>{
    console.log("Visit Again ! Thank You !");
    
})

// const mypromise=new Promise( (resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log("Promise Created !");
//         let bool=false
//         if(bool){
//             resolve("solved")
//         }
//         else{
//             reject("Error")
//         }
//     },100)
// })

// // use async promise also handle by async function
// async function consumePromise() {
//     try{
//         const response=await mypromise
//     console.log(response);
//     }
//     catch{
//         console.log("Error by reject method");
        
//     }
    
    
// }
// consumePromise()
// async function getGithubInfo(params) {
//     const respone=await fetch('https://api.github.com/users/kedgit')
//     const data=await respone.json()
//     console.log(data)
// }
// getGithubInfo()

// task add to microtask queue/priority queue
fetch('https://api.github.com/users/kedgit')
.then( (response) =>{
    if(!response.ok){
        throw new Error(`HTTP Status: ${response.status}`);
    } 
    return response.json()
})
.then( (data)=> console.log(data))
.catch((error)=> console.log(error));
