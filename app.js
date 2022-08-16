// DOM Manipulation

//------------------------Selecting Elements ---------------------

// GetElementById()
// const title=document.getElementById("main-heading");
// console.log(title);

// GetElementByClassName()
// const listItem=document.getElementsByClassName("list-items");
// console.log(listItem);

// GetElementByTagName()
// const tagName=document.getElementsByTagName("li");
// console.log(tagName[2]);

// querySelector()
// const container=document.querySelector("div");
// console.log(container);

// querySelectorAll()
// const containers=document.querySelectorAll("div");
// console.log(containers);


//------------------------Styling an Element ---------------------

// const title=document.querySelector("#main-heading");
// const listItem=document.querySelectorAll(".list-items");
// // listItem.style.fontSize="40px";
// for(let i=0;i<listItem.length;i++)
// {
//     listItem[i].style.fontSize="2rem";
//     listItem[i].style.color="violet";
// }
// console.log(listItem);

//------------------------ Creating an element ------------------------
const ul=document.querySelector('ul');
const li=document.createElement('li');

// Adding elements
ul.append(li);
li.innerText="X-Man"

// Modifying the text
// const listItem=document.querySelector(".list-items");
// console.log(listItem.innerText);
// console.log(listItem.textContent);
// console.log(listItem.innerHTML);
// console.log(ul);


//------------------------ Modifying Elements Attribute & Classes ------------------------
// const li=document.createElement('li');
// li.setAttribute('id','main-heading');
// li.removeAttribute('id')
// console.log(li);
// const title=document.querySelector("#main-heading");

// console.log(title.getAttribute('id'));

li.classList.add('list-itemss');
// li.classList.remove('list-itemss');

// const container=document.querySelector(".container");
console.log(li.classList.contains('list-itemss'));

// ------------------------ Remove element -------------------------------
li.remove();