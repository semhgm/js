
const li = document.createElement('li');

li.className = 'item';
li.id = 'item1';
li.setAttribute('data-id', '5');
li.innerText = 'Item 4';

document.getElementById("myList").appendChild(li);
const ch = document.createElement('input');

ch.type = 'checkbox';