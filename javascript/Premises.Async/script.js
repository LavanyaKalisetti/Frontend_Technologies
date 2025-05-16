// let p=new Promise((resolve,reject) =>
// {
//     setTimeout(() =>
//     {
//     resolve("take the chocolate")
// },10000)
// })
// console.log(p)
// p.then((val) => console.log(val)).catch((err) => console.log("err"))

// let x=5000
// let p=new Promise((resolve,reject) =>
// {
//     setTimeout(()=>
//     {
//         if(x>25)
//         {
//             resolve(x)
//         }
//         else{
//             reject("bye")
//         }
//     },10000)
// })
// p.then((val)=>console.log(val)).catch((err)=>console.log(err))

let y=25
let obj=new Promise((resolve,reject) =>
    {
       resolve(y);
    })
    obj.then((res) =>
    {
    return res * 2;
    })
    obj.catch((reason) => console.log("reason:"+reason))
