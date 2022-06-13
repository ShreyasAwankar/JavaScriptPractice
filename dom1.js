console.log("Wellcome to Document Object Module Practice")

console.log(document.getElementById('main-tag'))
console.log(document.getElementsByClassName('list-items'))

let elements = document.querySelectorAll('.list-item');
console.log(elements);

Array.from(elements).forEach(elem => {
    console.log(elem);
});

let parent = document.querySelector('.container')

// '.childNodes' will show everything including text nodes(new line + white spaces), comments and unnecessary stuff
console.log(parent.childNodes)
// '.children' will only show the children tags avoiding unnecessary stuff .
console.log(parent.children)
console.log(parent.childElementCount) 
// To count the number of childs
console.log(parent.firstChild)
console.log(parent.firstChild.parent) 
// we can deeg deeper with '.parent'
console.log(parent.firstChild.parentElement.parentElement) 
// we can deeg deeper with '.parentElement'
console.log(parent.firstChild.nextSibling.nextSibling.nextElementSibling) 
console.log(parent.firstChild.parentElement.parentElement)


console.log(parent.firstElementChild)
console.log(parent.lastChild)
console.log(parent.lastElementChild)
console.log(parent.childNodes[5].nodeName)
console.log(parent.childNodes[5].nodeType)

 //Node type legends
 //1 : elements
 //2 : attribute
 //3 : Text Node
 //8 : Comment
// 9 : document
 //10 : doc type

let grandChildren = parent.children
console.log(grandChildren[2].children[5]) //in this way we can dig deeper into childrens with '.children' we can put multiple '.children' to dig deeper

// lets undestand the context : We can work this way for traversing the nodes of html with JS




