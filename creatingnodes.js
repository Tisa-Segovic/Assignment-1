/* asg4cart.js */

/*******************For the First List*****************/
var list = document.getElementsByTagName('ul')[0]; // <ul> element

// Append new item at the end of the list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('DHL (International) - $25.00 USD.');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// Append new item at the beginning of the list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('In-store pick-up - $0.00 USD.');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);


var listItems = document.querySelectorAll('li'); // <li> elements

// Add a specific class name to all of them
var i;
for (i = 1; i < listItems.length; i++) {
  listItems[i].className = 'shippingOptions';
}

/*******************For the Second List*****************/

var list2 = document.getElementsByTagName('ul')[1]; // <ul> element

//Append new item at the end of the list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('LinkedIn');
newItemLast.appendChild(newTextLast);
list2.appendChild(newItemLast);

//Append new item at the beginning of the list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('YouTube');
newItemFirst.appendChild(newTextFirst);
list2.insertBefore(newItemFirst, list2.firstChild);


var listItems = document.querySelectorAll('li'); // <li> elements

//Add a specific class name to all of them
var i;
for (i = 1; i < listItems.length; i++) {
listItems[i].className = 'mediaOptions';
}

