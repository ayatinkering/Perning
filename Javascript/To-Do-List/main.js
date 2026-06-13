let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

filter.addEventListener('keyup',filterItems);
form.addEventListener('submit',addItem); //form submit event listener
itemList.addEventListener('click',removeItem);
//EVENT DELEGATION- listening to itemList instead of button, attaching listeners to the parent
//as del btns dont exist when the page first loads, and then check which buton was cliked


function addItem(e){
    e.preventDefault(); //stop the initial submit event
    let newitem=document.getElementById('item').value; //graba input text
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));

    let deletebtn=document.createElement('button');
    deletebtn.className='delete btn-danger';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){ //if delte button clicked
        if(confirm('are you sure???')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    let text=e.target.value.toLowerCase(); //convert search text to LOWERCASE
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){ //wont be -1 if matches
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}