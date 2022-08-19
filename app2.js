// ------------------------ Event Listener ----------------------

// Element.addlistener
const buttonTwo=document.querySelector('.btn-2');

function alertBtn(event)
{
    alert("Hello there");
}
buttonTwo.addEventListener("click",alertBtn);

// Mouseover event
const buttonthree=document.querySelector('.box-3');

function changeColor()
{
    buttonthree.style.background="red"
}
buttonthree.addEventListener("mouseover",changeColor);