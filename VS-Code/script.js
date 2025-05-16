const myDiv = document.getElementById('box');
const myInput=document.getElementById("inp")

function bringData()
{
    const str = myInput.value;
    myDiv.style.backgroundColor="red";
    myDiv.classList.add('x')
    myDiv.textContent=`${str.split('').reverse().join('')}`
}
