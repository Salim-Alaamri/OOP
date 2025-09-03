// 'use strict';

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

class Student extends Person {
  constructor(firstName,birthYear){
    super(firstName);
    this.birthYear = birthYear
  }
  introduce(){
    console.log(`My name is ${this.firstName}, I was born ${this.birthYear}`);
  }
}

const sami = new Student('Sami Said', 1992);

sami.introduce()


// const salim = new Person('Salim', 1990);
// console.log(salim);
// console.log(salim.__proto__ === Person.prototype);

// Person.prototype.sayHello = function () {
//   console.log(`Hi my name is: ${this.firstName}`);
// };

// salim.sayHello();

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// salim.calcAge();

// console.log(salim.__proto__);
// console.log(salim.__proto__.__proto__);
// console.log(salim.__proto__.__proto__.__proto__);

// console.log(salim.__proto__ === Person.prototype);
// console.log(Person.prototype === salim.__proto__);

// const fruits = ['apple', 'banana', 'mango', 'orange','banana', 'mango', 'orange'];
// console.log(fruits.__proto__);
// console.log(fruits.__proto__===Array.prototype);

// const arr = [...new Set(fruits)]

// console.log(arr);

//Todo challenge :

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 110);
// const car2 = new Car('Mercedes', 90);

// car1.accelerate();
// car1.brake();
// car2.accelerate();
// car2.brake();

//todo : Generate random IP addresses in a range

class Device {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  randomIP() {
    this.ip = Math.floor(Math.random() * 254) + 1;
    console.log(
      `${this.name} with the IP address: 10.185.116.${this.ip} is connected`
    );
  }
}



const ping = new Device('GH');
// ping.randomIP();


//object.create : //todo

const PersonProto = {
  calcAge(){
    console.log(2025 - this.birthYear);
  },
  init(firstName,birthYear) {
this.firstName=firstName;
this.birthYear=birthYear;
  }
}

const salim = Object.create(PersonProto);
// salim.init('salim',1990);
// salim.calcAge()

//todo: >>>>>>         Challenge         
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

