// In this, we will create the class and objects with the latest features of ES6 and also learn the inheritance...

class Employee {
  constructor(name, department, salary, experience) {
    (this.Name = name), (this.Department = department), (this.salary = salary);
    this.Experience = experience;
  }

  joiningYear() {
    return `Joining Year : ${2022 - this.Experience}`;
  }

  static add(a, b) {
    return a + b;
  } // We can create static methods to call without refering the objects.
}

let Rohan_Das = new Employee("Rohan Das", "IT", 600000, 10);
let Harry = new Employee("Harris Khan", "Programmer", 1500000, 12);

// console.log(Rohan_Das.Department)
// console.log(Harry.joiningYear())
// console.log(Employee.add(10,15))

// In JavaScript we can achieve the inheritence with the help of 'extends'.
// 'super' calls the constructor with required arguments of the class which we inherit from. And we will not have to write 'this.---' everytime...
class Player extends Employee {
  constructor(name, department, game, team) {
    super(name, department);
    this.Game = game;
    this.Team = team;
  }
  team (){
      return `Team name : ${this.team}`
  }
}

let player1 = new Player('Virat Kohli', 'Marketing', 'Cricket', 'RCB')
let player2 = new Player('Sunil Chetri', 'Sales', 'Football', 'FC GOA')

console.log(player2.Team)
