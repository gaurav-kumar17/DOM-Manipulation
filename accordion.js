// Variable

const accordion=document.getElementsByClassName('content-container');
console.log(accordion);

for(i=0;i<accordion.length;i++)
{
    accordion[i].addEventListener('click',function(){

        // this referes the Object that is currently calling the function
        this.classList.toggle('active');
    })
}