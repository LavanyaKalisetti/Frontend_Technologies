function fun ()
{
    alert("Hellooooooo");
}
function fun2()
{
    console.log("Lavanya");
}
document.addEventListener('keydown',function(event)
{
    console.log(event.key)
    //alert("bye")
})

//write a logic to print it is vowel only whene user presses a,e,i,o,u print consonant in other cases
document.addEventListener('keydown',function(event)
{
    let k=event.key.toLowerCase()
    if(['a','e','i','o','u'].includes(k))
    alert("it is vowel")
else
    alert("it is consonent")
})
