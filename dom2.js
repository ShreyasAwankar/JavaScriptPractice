console.log('Here we will create, remove the elements in DOM')

// Creating the elements
let newListItem = document.createElement('li');
newListItem.className = "list2";
newListItem.id = "new";
newListItem.setAttribute('title', 'mytitile');

// We can change the the text, HTML as following
newListItem.innerText = "This is a new created list item"
newListItem.innerHTML = "<b>This is a new created list item with html</b>"
console.log(newListItem);

let textListItem = document.createTextNode("Hi this is an appended text node")


// Trversing to find the existing element and Adding the element to that existing element

let ourLists = document.querySelector(".container")
console.log(ourLists.children[2].children[0].className)
let oldList = ourLists.children[2]
oldList.appendChild(newListItem)
oldList.appendChild(textListItem)

// Repacing the elements
let h3 = document.createElement('h3')
h3.textContent = "This is h3"
textListItem.replaceWith(h3)


let element1 = document.createElement('li')
let tnode = document.createTextNode("Hello id 333, look I ave replaced you")
element1.appendChild(tnode)

let myul = document.getElementById("ul")
console.log(myul)
myul.replaceChild(element1, document.getElementById("333"))

// Imp  : understand the chronology of arguments -  (to be repaced as , to be replaced )

let element2 =document.createElement('li');
element2.id = "444"
element2.className = "list2"
element2.appendChild(document.createTextNode("Hello id 444, look I ave replaced you"))
myul.replaceChild(element2, document.getElementById("444"))

// removing the child
myul.removeChild(document.getElementById("555"))

console.log(element2.hasAttribute("class")); // It will return a boolian value true or false
console.log(element2.hasAttribute("id"));

element2.removeAttribute("id")
console.log(element2.attributes)
// we can aslo s attribute as we did in this file please check it......




let harry = document.createElement("h1")
harry.innerText = "Go to Code With Harry website"
console.log(harry)
harry.style.backgroundColor = "red", color = "white";
ourLists.appendChild(harry)
