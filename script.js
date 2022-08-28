
let flag=0;

function controller(x)
{
    flag=flag+x;

    //left
    // flag=2+ (-1)=1;

    //right
    // flag=2+1=3;
    // window.setInterval(slideshow(flag),1000);
    slideshow(flag);
}

slideshow(flag);
// window.setInterval(slideshow(flag),1000);

function slideshow(num)
{
    let slides=document.getElementsByClassName('slide');
    
    
    if(num == slides.length)
    {
        num=0;
        flag=0;
    }
    if(num < 0)
    {
        num=slides.length-1;
        flag=slides.length-1;
    }
    for(let slide of slides)
    {
        slide.style.display="none";
    }
    slides[num].style.display="block";
}