// function fun()
// {
//     console.log("hello world");
// }
// setTimeout(fun,0)
// let i=0;
// for(i=0;i<1000;i++)
//     {
//         setTimeout (function()
//         {
// console.log("Hello"+i)
//         },1)
//         console.log("Hiii"+i)
//     }
//     setTimeout(() =>
//      {
//       setTimeout(() =>
//         {
//          console.log("hi");
//            }, 0)
//              console.log("good")
//          },0)
//          console.log("boy")

// console.log("hi")

// function blast()
// {
//   document.body.innerHTML=""
// }
// let timeBomb=setTimeout(blast,5000);
// document.getElementById('btn').addEventListener('click', () =>
// {
// clearTimeout(timeBomb)
// clearInterval(alarm)
// comsole.log("bomb diffused")
// })
// let c=0
// function fun()
// {
//   c++
//   console.log(c)
// }
// let alarm=setInterval(fun,1000)


let count=15
function timer(){
  count--
  document.getElementById('count').textContent=count
}
let y= setInterval(timer,1000)
document.getElementById("btn").addEventListener('click', () =>
  {
    clearInterval(y)
    clearInterval(x);
  })
  let x=setTimeout(() =>
  {
    document.body.innerHTML='';
  },count*1000)

  // console.log(dt)
  // console.log(dt.getFullYear())
  // console.log(dt.toLocaleTimeString());

  setInterval(() =>
  {
    let dt=new Date()
    document.getElementById("time").textContent=dt.toLocaleTimeString()
  },1000)
