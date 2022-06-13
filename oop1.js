// Following is the object literal for craating the object

let myCar = {
  name: "Tata Nano",
  topSpeed: 200,
  run: function () {
    console.log(`${this.name} is running at the speed of ${this.topSpeed}`);
  },
};

// console.log(myCar.run());

// Crating a constructor for objects....

function car(name, topSpeed) {
  (this.nameOfTheCar = name),
    (this.topSpeedOfTheCar = topSpeed),
    (this.run = function () {
      return `${this.nameOfTheCar} running at the speed of ${this.topSpeedOfTheCar}`;
    });
}

// Creating the objects from the constructor with the following method......

car1 = new car("Maruti Suzuki Swift", 100);
car2 = new car("Honda City", 130);
car3 = new car("Harity Tuzuki", 150);

console.log(car3.run(), " and the car name is: ", car3.nameOfTheCar);
console.log(car1.topSpeedOfTheCar, " ", car1.nameOfTheCar);

// editing object prototypes.....
car.prototype.setName = function (newName) {
  return (this.nameOfTheCar = newName);
};

car2.setName("Taylor Swift")

console.log(car2.nameOfTheCar)
