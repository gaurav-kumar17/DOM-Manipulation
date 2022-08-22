// Variable

const accordion=document.getElementsByClassName('content-container');
console.log(accordion);

for(i=0;i<accordion.length;i++)
{
    accordion[i].addEventListener('click',function(){

        // 'this' referes to the Object that is currently calling the function which is in this case accordion

        // The classList property returns the CSS classnames of an element and in this 'active' is the class name
        this.classList.toggle('active');
    })
}