console.log("Let's learn about objects and that's gonna be interesting...")

let person = {
    name: 'Adolf Hitler',
    age: 55,
    party: 'Nazi',
    hobby: ['Killing Non Aryans', 'Painting', 'Scolding Musoulini'],
    book: 'Mein Kamf',
    greet: function() {
        alert("Hello! Wellcome to Nazi Party");
        return "If you see Himler, let me know. I will beat that basterd"; 
    }
}

// Note : You can set 'null' for a property (object element) if it dose not currently have a value and it will have some value in the future....

console.log(person)

person.isBadPerson = true; // Adding a property in the  object.
person.age=65 // Overriding an existing property in the object.

console.log(person)

delete person.book // Deleting a property.

console.log(person)

console.log(person.hobby) // Accessing a perticuler element in an object.
// console.log(person.greet()) // greet is not a peroperty but its afunction here....



// Copying an array with spread operator..........

let newPerson = { ...person } //but it will not copy the nested elemnets in the object they still referenced in newPerson
console.log('newPerson ', newPerson)

person.hobby.push('Having short mustache')

console.log(newPerson) // Observe the outputs of this line. After we have pushed a new element in old array, the changes are still reflected in copied array (newPerson). This proves that the array will not get completely copied the nested array will stll be referanced.

let personTwo = { ...person, hobby:[...person.hobby], age:77} // This will create a deepcopy of our object and now will not referance that nested array from the old object....
console.log('Person2 : ',personTwo)



// Checking wheather a property (key) exists in an object.
// We can do this using 'in' keyword.

if ('age' in personTwo) {
    }