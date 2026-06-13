//DOM is TREE Of nodes/elements created by browser

//                      DOCUMENT
//                   Root ele <html> PARENT
//       <head>                      SIBLINGS        <body>

console.dir(document); //examine the DOCUMENT OBJECT
console.log(document.domain); //local host LOOPBACK address
console.log(document.URL);
console.log(document.title);
console.log(document.body);
console.log(document.all[10]); //gives properly of all elements, grab any element based on index
console.log(document.forms); //get forms, links, images, etc




//SELECTORS
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Change header text!';
console.log(headerTitle.innerText) //pays attention to STYLING, if display:none
headerTitle.innerHTML='<h3>HEY</h3>'
headerTitle.style.borderBottom='solid 3px #000';

//get elements by className
const items=document.getElementsByClassName('list-group-item');
console.log(items);
items[0].textContent="World";
items[0].style.fontWeight='bold';

//items.style.backgroundColor='#000' CANT DO, as need to loop thru array
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor="#fce570ff";
}

const li=document.getElementsByTagName('li'); //for all LIST ITEMS, even if no common class name


//QUERY SELECTOR - only grabs first one

let header=document.querySelector('#main-header'); //grab by ID,CLASS,TAG antyhing
header.style.borderBottom='solid 3px #991a1aff'

let input=document.querySelector('input');
input.value='Enter task:';
input.style.color='#807c7cff';

let submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

let item=document.querySelector('.list-group-item');
item.style.color='red'; //GRABS FIRST ITEM

let lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='green';


//QUERY SELECTOR ALL gives NODELIST
let titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='List Titleee';

//TRAVERSING DOM
let itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4';

//can do parentNode.parentNode chaining same as parentElement

console.log(itemlist.children); //same as childNodes

//FirstChild gives all line breaks etc, not JUST the first ele
console.log(itemlist.firstElementChild);
console.log(itemlist.previousElementSibling);


//CREATE A DIV
let newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','hello div');

//create text node
let newdivtext=document.createTextNode("HELLO WORLD");
newdiv.appendChild(newdivtext);
console.log(newdiv);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
console.log(newdiv);
container.insertBefore(newdiv,h1);





//EVENTS & EVENT LISTERS
let button=document.getElementById('button').addEventListener('click',runEvent);
function buttonClick(e){
    console.log('button clicked');
    document.querySelector('#main').style.backgroundColor='red';

    console.log(e.target); //gives what was clicked
    console.log(e.target.id); //id of WHAT WAS CLICKED

    console.log(e.clientX);
    console.log(e.clientY); //dist from top of window where user clicked

    console.log(e.offsetX); //dist from the actual element left
    
    console.log(e.altKey); //ctrlKey, shiftKey, true or false if that key was held while clicking
}

//MOUSE EVENTS
button=document.getElementById('button');
button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent); //as SOON as u click down
button.addEventListener('mouseup',runEvent); //waits to click, and then LIFT UP

//mouseenter,mouseleave,mouseover (child ele), mouseout, mousemove

button.addEventListener('mousemove',runEvent);
function runEvent(e) {
    console.log('event type: ' + e.type);

    button.innerHTML =
        '<h3>MouseX: ' + e.offsetX + '</h3>' +
        '<h3>MouseY: ' + e.offsetY + '</h3>';

    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",50)";
    //rgb(0,0,0)
}

let itemInput=document.querySelector('input[type="text"]');
let form=document.querySelector('form');
itemInput.addEventListener('keydown',runE); //clicking any key

function runE(e){
    console.log('event type: '+e.type);
    console.log(e.target.value);
}

//BLUR AND FOCUS EVENT LISTERES
itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);
itemInput.addEventListener('cut',runEvent); //know when CUT or PASTE






