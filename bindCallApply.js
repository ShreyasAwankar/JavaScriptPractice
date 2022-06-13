// .bind() method ....... 

let person1 = {
    name: 'Rohan Das',
    role: 'Data Analyst',
}

let person2 = {
    name: 'Harry',
    role: 'Pro Coder',
}

let person3 = {
    name: 'Skill F',
    role: 'Android Developer',
}

function personBinder() {
    console.log(`The name of the person is ${this.name}. The role is ${this.role}.`)
}

let person1Info = personBinder.bind(person1) //we can bind an object to a function with .bind() method
console.log(person1Info()) // as .bind() method creates a new copy of a function, we will need '()' after person1Info in console.log() 

let person2Info = personBinder.bind(person2) 
console.log(person2Info())


// We can also provide one or  multiple arguments in function

function personBinder2(animal) {
    console.log(`The name of the person is ${this.name}. The role is ${this.role} and he loves ${animal}.`)
}

let person3Info = personBinder2.bind(person3)
console.log(person3Info('dog'))

console.log(person3Info) // Observe the output of this line. What .bind() method actually dose is it will create a new copy of the function for that bound object.......



// .call() method .............
// call method is used for function borrowing....

let player1 ={
    name: 'Virat',
    sirname: 'Kohli',
    role: 'batsman'
};

let player2 ={
    name: 'Yuzi',
    sirname: 'Chahal',
    role: 'bowler'
}

let playerInfo = function ()  {
    return (`Player name : ${this.name} ${this.sirname}`)
}

function playerExtraInfo(type , bestPerformance) {
    return (`Player name : ${this.name} ${this.sirname} type : ${type} and the best performance is ${bestPerformance}`)
} 

playerExtraInfo.call(player1) // Obsorve the out put of this line. .call() has just borrowed the function 'playerInfo' for player1 and has not created a new copy of the function.

let p1 = playerExtraInfo.call(player1, 'left hand Batsman', 155) // call method takes ', seperated' arguements
console.log(p1)

let p2 = playerInfo.call(player2)
console.log(p2) // as .call() method dose not create a new copy of function. We will not need '()' after p2 in console log().



// .apply() method......................
// .apply() method takes the arguments (other than the object i.e.the first argument)) in array format.

let player3 = {
    name: 'Kiran',
    sirname: 'Pawar'
}

function tennisPlayerInfo(format, type) {
    return (`Player name : ${this.name} ${this.sirname} type : ${type} and the format: ${format}`)
} 

console.log(tennisPlayerInfo.apply(player3, ['tenis cricket', 'batter']))